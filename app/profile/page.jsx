"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session } = useSession();
  const [posts, setposts] = useState([]);
  const fetchPosts = async (query) => {
    try {
      const response = await fetch(`/api/users/${session?.user?.id}/posts`);
      const data = await response.json();
      setposts(data);
    } catch (error) {
      console.log("Error has occured -----> ", error);
    }
  };

  async function handleEdit() {
    console.log("edited");
  }
  async function handleDelete() {
    console.log("deleted");
  }

  useEffect(() => {
    if (session?.user?.id) {
      fetchPosts("");
    }
  }, []);

  return (
    <>
      <Profile
        name="umar farooq"
        desc="welcome to your persomalized profile "
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default page;
