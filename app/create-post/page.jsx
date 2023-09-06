"use client";
import Form from "@components/Form";
import React, { useState } from "react";

const CreatePage = () => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  async function handleCreate(e) {
    e.preventDefault();
    setisSubmitting(true);
    console.log(post);
    setTimeout(() => {
      setisSubmitting(false);
    }, 2000);
  }
  return (
    <>
      <Form
        isSubmitting={isSubmitting}
        post={post}
        setpost={setpost}
        handleCreate={handleCreate}
      />
    </>
  );
};

export default CreatePage;
