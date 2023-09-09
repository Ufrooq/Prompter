"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session } = useSession();
  const [posts, setposts] = useState([]);
  const fetchPosts = async () => {
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
      fetchPosts();
      console.log(posts);
    }
  }, [session]);

  return (
    <>
      {posts && posts.length > 0 && (
        <Profile
          name="umar farooq"
          desc="welcome to your persomalized profile "
          posts={posts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default page;
