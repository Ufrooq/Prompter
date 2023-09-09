"use client";
import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ posts, name, desc, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        {name}'s <span className="blue_gradient">profile</span>
      </h1>
      <p className="desc text-left text-sm">{desc}</p>
      {posts.length > 0 ? (
        <div className="mt-16 prompt_layout">
          {posts.map((post) => (
            <PromptCard
              key={post._id}
              postId={post._id}
              prompt={post.prompt}
              tag={post.tag}
              creator={post.creator}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <h1 className="no_posts">
          No <span className="orange_gradient">Posts</span> Available for Now
        </h1>
      )}
    </section>
  );
};

export default Profile;
