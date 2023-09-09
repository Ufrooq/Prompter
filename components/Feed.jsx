"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";

const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [posts, setposts] = useState([]);
  const { data: session } = useSession();

  const fetchPosts = async (query) => {
    try {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setposts(data);
    } catch (error) {
      console.log("Error has occured -----> ", error);
    }
  };
  useEffect(() => {
    if (session?.user?.id) {
      fetchPosts("");
    }
  }, [session]);

  return (
    <section className="feed">
      <form className="w-full flex-center">
        <input
          type="text"
          value={searchText}
          required
          placeholder="search for a tag or a prompt"
          onChange={(e) => setsearchText(e.target.value)}
          className="search_input peer"
        />
      </form>
      <h1 className="head_text_small orange_gradient">All Posts</h1>
      <div className="mx-8 prompt_layout">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <PromptCard
              key={post._id}
              prompt={post.prompt}
              tag={post.tag}
              creator={post.creator}
            />
          ))}
      </div>
    </section>
  );
};

export default Feed;
