"use client";
import { useSearchParams } from "next/navigation";
import Form from "@components/Form";
import React, { useEffect, useState } from "react";

const EditPrompt = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  //   async function handleCreate(e) {
  //     e.preventDefault();
  //     setisSubmitting(true);
  //     console.log(post);
  //     try {
  //       const response = await fetch("/api/prompt/new", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           creatorId: session?.user?.id,
  //           prompt: post.prompt,
  //           tag: post.tag,
  //         }),
  //       });

  //       if (response.ok) {
  //         router.push("/");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setisSubmitting(false);
  //   }

  async function getPromptDetails() {
    try {
      const response = await fetch(`api/prompt/${promptId}`);
      const data = await response.json();
      console.log(data);
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
      fun="update"
      isSubmitting={isSubmitting}
      post={post}
      setpost={setpost}
      handleCreate={() => {}}
    />
  );
};

export default EditPrompt;
