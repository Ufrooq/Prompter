"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const EditPrompt = () => {
  const router = useRouter();
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
    const response = await fetch(`api/prompt/${promptId}`);
    const data = await response.json();

    setpost({
      prompt: data.prompt,
      prompt: tag.tag,
    });
  }
  useEffect(() => {
    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);
  return (
    <>
      <Form
        fun="update"
        isSubmitting={isSubmitting}
        post={post}
        setpost={setpost}
        handleCreate={handleCreate}
      />
    </>
  );
};

export default EditPrompt;
