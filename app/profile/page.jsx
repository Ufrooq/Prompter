"use client";
import Loader from "@components/Loader";
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

  async function handleDelete(postId) {
    const hasConfirmed = confirm("Are you sure you want to delete this post ?");
    if (!hasConfirmed) {
      return;
    }
    try {
      await fetch(`/api/prompt/${postId.toString()}`, {
        method: "DELETE",
      });

      const filteredPosts = posts.filter((post) => post._id != postId);
      setposts(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (session?.user?.id) {
      fetchPosts();
      console.log(posts);
    }
  }, [session]);

  return (
    <>
      {session?.user ? (
        <Profile
          name={session?.user?.name}
          desc="welcome to your persomalized profile "
          posts={posts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="w-20 h-20">
          <Loader size={"16"} />
        </div>
      )}
    </>
  );
};

export default page;
