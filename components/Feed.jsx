"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";
import Loader from "./Loader";

const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [posts, setposts] = useState(null);
  const { data: session } = useSession();

  let filteredPosts = posts?.filter((post) => {
    return post.prompt.toLowerCase().includes(searchText);
  });
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setposts(data);
    } catch (error) {
      setposts([]);
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
      <>
        {filteredPosts?.length > 0 ? (
          <>
            <h1 className="head_text_small orange_gradient">All Posts</h1>
            <div className="mx-8 prompt_layout">
              {posts.map((post) => (
                <PromptCard
                  key={post._id}
                  prompt={post.prompt}
                  tag={post.tag}
                  creator={post.creator}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {!posts == null || !filteredPosts?.length > 0 ? (
              <h1 className="head_text_small orange_gradient">
                No Posts Found !
              </h1>
            ) : (
              <div className="w-16 h-16 mt-16">
                <Loader size={"10"} />
              </div>
            )}
          </>
        )}
      </>
    </section>
  );
};

export default Feed;
