"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { getProviders, signIn, useSession, signOut } from "next-auth/react";

// useEffect;
const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);

  async function handleSetProviders() {
    try {
      const response = await getProviders();
      setProviders(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSetProviders();
  }, []);
  return (
    <nav className="w-full flex justify-between items-center mb-16 pt-4">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/images/logo.svg"
          alt="main-logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">Prompter</p>
      </Link>
      {/* desktop navigation --> */}
      <div className="sm:flex items-center  hidden">
        {session?.user ? (
          <div className="flex gap-4">
            <Link href="/create-post" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn" onClick={() => signOut()}>
              Signout
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                alt="user-profile"
                width={40}
                height={40}
                className="object-contain rounded-full shadow-md"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="outline_btn"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Signin
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile navigation --> */}
      <div className="sm:hidden flex relative">
        <FontAwesomeIcon
          width={"20px"}
          fontSize={"18px"}
          className="text-[#ff5722] cursor-pointer"
          icon={faEllipsisVertical}
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle && (
          <div className="w-[200px] bg-white absolute top-5 right-3 rounded-md shadow-lg py-5">
            {session?.user ? (
              <div className="flex flex-col justify-center items-center gap-4 py-5">
                <Link href="/create-post" className="black_btn">
                  Create Post
                </Link>
                <button className="outline_btn" onClick={() => signOut()}>
                  Signout
                </button>
                <Link href="/profile">
                  <Image
                    src={session?.user?.image}
                    alt="user-profile"
                    width={40}
                    height={40}
                    className="object-contain rounded-full shadow-md"
                  />
                </Link>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      className="outline_btn mx-auto"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      Signin
                    </button>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
