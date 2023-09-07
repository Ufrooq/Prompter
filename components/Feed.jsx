"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setsearchText] = useState("");

  const fetchPosts = async (query) => {};
  useEffect(() => {
    query;
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

      <PromptCard />
    </section>
  );
};

export default Feed;
