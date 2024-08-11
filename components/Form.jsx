"use client";

import Link from "next/link";
import React from "react";
import Loader from "./Loader";

const Form = ({ fun, isSubmitting, post, setpost, handleSubmit }) => {
  return (
    <section className="w-full flex-col">
      <h2 className="head_text text-left blue_gradient">{fun} Your Post</h2>
      <p className="desc text-left">
        {fun} and share amazing AI prompts with the world ! An open plateform
        for users to share their imagination
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col flex-start gap-7 glassmorphism"
      >
        <label className="font-satoshi font-semibold text-base text-slate-700">
          Your AI prompt
        </label>
        <textarea
          onChange={(e) => {
            setpost({ ...post, prompt: e.target.value });
          }}
          value={post.prompt}
          placeholder="write here ..."
          cols="50"
          rows="5"
          className="p-3 outline-none shadow-md rounded-md"
        ></textarea>
        <label className="font-satoshi font-semibold text-base text-slate-700">
          Tag{" "}
          <span className="font-normal">
            (#products, #webdevelopment, #idea)
          </span>
        </label>
        <input
          name=""
          placeholder="write here ..."
          className="p-3 outline-none shadow-md rounded-md"
          onChange={(e) => {
            setpost({ ...post, tag: e.target.value });
          }}
          value={post.tag}
        />
        <div className="flex justify-end gap-4">
          <Link href="/" className="outline_btn">
            Cancel
          </Link>
          <button
            type="submit"
            className="text-sm mx-auto flex items-center font-inter bg-blue-600 text-white px-5 py-2 rounded-full border border-transparent transition hover:bg-transparent hover:text-blue-600 hover:border-blue-600 "
          >
            {isSubmitting ? <Loader size={4} /> : "Create"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
