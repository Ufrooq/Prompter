"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const PromptCard = ({
  postId,
  prompt,
  tag,
  creator,
  handleEdit,
  handleDelete,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const [copied, setcopied] = useState("");
  function handleCopy() {
    setcopied(true);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => {
      setcopied("");
    }, 2000);
  }

  function handleNavigate() {
    if (creator) {
      router.push(`/profile/${creator._id.toString()}`);
    }
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex gap-5 p-2 justify-start items-center cursor-pointer"
          onClick={handleNavigate}
        >
          <Image
            src={creator.image}
            alt="main-logo"
            width={40}
            height={40}
            className="object-contain rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">{creator?.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => handleCopy()}>
          <Image
            alt="main-logo"
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={20}
            height={20}
            className="bg-gray-200 rounded-xl"
          />
        </div>
      </div>
      <p className="my-3 font-satoshi text-sm text-gray-600">{prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer inline-block"
        onClick={() => console.log("link clicked")}
      >
        {tag}
      </p>
      {session?.user?.id == creator._id && pathName === "/profile" && (
        <div className="flex flex-end gap-2 mt-3">
          <button
            className="text-sm font-inter border border-green-600 px-4 py-1 rounded-full text-green-600 transition hover:bg-green-600 hover:text-white"
            onClick={() => handleEdit && handleEdit(postId)}
          >
            Edit
          </button>
          <button
            className="text-sm font-inter border border-primary-orange px-4 py-1 rounded-full text-primary-orange transition hover:bg-primary-orange hover:text-white"
            onClick={() => handleDelete && handleDelete(postId)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
