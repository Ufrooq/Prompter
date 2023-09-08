"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [posts, setposts] = useState([]);

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
    fetchPosts("");
  }, []);

  return (
    <section className="feed">
      <form className="w-full flex-center">
        <input
          type="text"
          value={searchText}
          required
          placeholder="search for a tag or a prompt"
          onChange={(e) => e.target.value}
          className="search_input peer"
        />
      </form>
      <div className="mt-20 prompt_layout">
        {posts &&
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
