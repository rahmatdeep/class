/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export const Receiver = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    const pc = new RTCPeerConnection();
    pc.onicecandidate = (event: { candidate: any }) => {
      //   console.log(event);
      if (event.candidate) {
        socket.send(
          JSON.stringify({
            type: "iceCandidate",
            candidate: event.candidate,
          })
        );
      }
    };

    pc.ontrack = (event: any) => {
      console.log(event);
      const video = document.createElement("video");
      document.body.appendChild(video);
      video.srcObject = new MediaStream([event.track]);
      video.play();
    };
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      //   console.log(message);

      if (message.type === "createOffer") {
        await pc.setRemoteDescription(message.sdp);

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        socket.send(
          JSON.stringify({ type: "createAnswer", sdp: pc.localDescription })
        );
      } else if (message.type === "iceCandidate") {
        if (pc) {
          pc.addIceCandidate(message.candidate);
        }
      }
    };
  }, []);

  return (
    <>
      <div>Reciever</div>
    </>
  );
};
