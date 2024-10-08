"use client";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const CreatePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setisSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  async function handleCreate(e) {
    e.preventDefault();
    setisSubmitting(true);
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorId: session?.user?.id,
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
        fun="Create"
        isSubmitting={isSubmitting}
        post={post}
        setpost={setpost}
        handleSubmit={handleCreate}
      />
    </>
  );
};

export default CreatePage;
