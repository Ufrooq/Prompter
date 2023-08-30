"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

// useEffect;
const Navbar = () => {
  const [UserLoggedIn, setUserLoggedIn] = useState(true);
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center mb-16 pt-4">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/images/logo.svg"
          alt="main-logo"
          width={35}
          height={35}
          className="object-contain"
        />
        <p className="logo_text">Prompter</p>
      </Link>

      {/* desktop navigation --> */}
      <div className="sm:flex items-center  hidden">
        {UserLoggedIn ? (
          <div className="flex gap-4">
            <Link href="/createPrompt" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn">Signout</button>
            <Link href="/profile">
              <Image
                src="/assets/images/no-user-no-back.png"
                alt="user-profile"
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
        ) : (
          <button className="outline_btn">Signin</button>
        )}
      </div>

      {/* mobile navigation --> */}
      <div className="sm:hidden flex relative">
        <FontAwesomeIcon
          width={"20px"}
          fontSize={"18px"}
          className="text-orange-600 cursor-pointer"
          icon={faEllipsisVertical}
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle && (
          <div className="w-[200px] bg-white absolute top-5 right-3 rounded-md shadow-lg">
            {UserLoggedIn ? (
              <div className="flex flex-col justify-center items-center gap-4 py-5">
                <Link href="/createPrompt" className="black_btn">
                  Create Post
                </Link>
                <button className="outline_btn">Signout</button>
                <Link href="/profile">
                  <Image
                    src="/assets/images/no-user-no-back.png"
                    alt="user-profile"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </Link>
              </div>
            ) : (
              <button className="outline_btn">Signin</button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
