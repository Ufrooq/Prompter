"use client";
import Profile from "@components/Profile";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [userData, setUserData] = useState();
  const [posts, setPosts] = useState([]);

  const fetchPostsById = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("Error has occured -----> ", error);
    }
  };
  const fetchUserProfileById = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUserData(data);
      fetchPostsById(data?._id);
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
        desc="welcome to my profile"
        posts={posts}
        handleEdit={false}
        handleDelete={false}
      />
    </>
  );
};

export default page;
