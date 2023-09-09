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
      <div className="mt-16 prompt_layout">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <PromptCard
              key={post._id}
              prompt={post.prompt}
              tag={post.tag}
              creator={post.creator}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </section>
  );
};

export default Profile;
