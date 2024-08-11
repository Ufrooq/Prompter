"use client";
import Profile from "@components/Profile";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [userData, setUserData] = useState();
  const fetchUserProfileById = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Error has occured -----> ", error);
    }
  };

  useEffect(() => {
    fetchUserProfileById(params.id);
  }, [params?.id]);

  return (
    <>
      <Profile
        name={userData?.username}
        desc="welcome to your persomalized profile "
        posts={[]}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
      />
    </>
  );
};

export default page;
