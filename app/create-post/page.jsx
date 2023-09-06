"use client";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import React, { useState } from "react";

const CreatePage = () => {
  const router = useRouter();
  const [isSubmitting, setisSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  async function handleCreate(e) {
    e.preventDefault();
    setisSubmitting(true);
    console.log(post);
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }

    setisSubmitting(false);
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
