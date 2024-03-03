import axios from "axios";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen bg-slate-600">
      <div className="flex justify-center">
        <div className="border p-8 rounded  bg-slate-300">
          <div>Name: {userData?.username}</div>
          <div>
            Email
            {userData?.email}
          </div>
        </div>
      </div>
    </div>
  );
}
