"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const PromptCard = ({ prompt, tag, creator, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const [copied, setcopied] = useState("");
  function handleCopy() {
    setcopied(true);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => {
      setcopied("");
    }, 2000);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex gap-5 p-2 justify-start items-center cursor-pointer">
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
      {/* {session?.user?.id == creator.id && pathName === "/profile" && ( */}
      <div className="flex flex-end gap-2 mt-3">
        <button className="text-sm font-inter bg-gray-200 px-4 py-1 rounded-lg text-green-600">
          Edit
        </button>
        <button className="text-sm font-inter bg-gray-200 px-4 py-1 rounded-lg text-primary-orange">
          Delete
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

export default PromptCard;
