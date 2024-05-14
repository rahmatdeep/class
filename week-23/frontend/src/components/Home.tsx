import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to={"/sender"}> Sender Page </Link>
      <Link to={"/receiver"}>Reciver Page</Link>
    </>
  );
}
