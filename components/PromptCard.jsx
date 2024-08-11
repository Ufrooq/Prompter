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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={20}
            height={20}
          >
            {copied ? (
              <path
                fill="#e70d0d"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              />
            ) : (
              <path
                fill="#246ef0"
                d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"
              />
            )}
          </svg>
        </div>
      </div>
      <p className="my-3 font-satoshi text-sm text-gray-600">{prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer inline-block"
        onClick={() => console.log("link clicked")}
      >
        {`#${tag}`}
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
            className="text-sm font-inter border border-red-600 px-4 py-1 rounded-full text-red-600 transition hover:bg-red-600 hover:text-white"
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
