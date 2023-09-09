"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import React, { useEffect, useState } from "react";

const EditPrompt = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const promptId = searchParams.get("id");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  async function handleUpdate(e) {
    e.preventDefault();
    setisSubmitting(true);
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          updatedPrompt: post.prompt,
          updatedTag: "#" + post.tag,
        }),
      });

      if (response.ok) {
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
    setisSubmitting(false);
  }

  async function getPromptDetails() {
    try {
      const response = await fetch(`api/prompt/${promptId}`);
      const data = await response.json();
      setpost({ prompt: data.prompt, tag: data.tag });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);
  return (
    <Form
      fun="Update"
      isSubmitting={isSubmitting}
      post={post}
      setpost={setpost}
      handleSubmit={handleUpdate}
    />
  );
};

export default EditPrompt;
