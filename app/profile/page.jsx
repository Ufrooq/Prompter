"use client";
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
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

  async function handleEdit(postId) {
    router.push(`/edit-prompt?id=${postId}`);
  }
  async function handleDelete() {
    // router.push("delete-prompt");
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
      <Profile
        name="umar farooq"
        desc="welcome to your persomalized profile "
        posts={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default page;
