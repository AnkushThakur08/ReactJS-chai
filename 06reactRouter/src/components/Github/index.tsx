import axios from "axios";
import { useEffect, useState } from "react";
import { IUserData } from "./type";

const Github = () => {
  const [userData, setUserData] = useState<IUserData>();
  const getUser = async () => {
    const res = await axios.get("https://api.github.com/users/hiteshchoudhary");
    setUserData(res?.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex gap-4 m-3">
      <div>
        <img className="rounded rounded-2xl" src={userData?.avatar_url} alt="user_image" />
      </div>
      <div>
        <h1 className="text-2xl font-normal my-3">{userData?.name}</h1>
        <h3 className="text-lg my-3">{userData?.bio}</h3>
        <p className="text-lg my-3">Location: {userData?.location}</p>
        <p className="text-lg my-3">Repos: {userData?.public_repos}</p>
        <p className="text-lg font-normal !font-bold">Followers: {userData?.followers}</p>
      </div>
    </div>
  );
};

export default Github;
