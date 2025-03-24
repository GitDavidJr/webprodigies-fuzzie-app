'use client';
import ProfileForm from "@/src/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";
import { db } from "@/src/lib/db";

type Props = {};

const Settings = (props: Props) => {

  const user = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    profileImage: "https://ucarecdn.com/4a0ad269-1e3f-40d2-b6d5-7e41cf6a0233/393728496_850480793387102_4572255596202681791_n.png",
  };

  const removeProfileImage = async () => {
    
  };

  const uploadProfileImage = async (url: string) => {
    
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 background-bluer-lg flex items-center border-b ">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            {" "}
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          onUpload={uploadProfileImage}
          userImage={user?.profileImage || ""}
        ></ProfilePicture>
        <ProfileForm />
      </div>
    </div>
  );
};

export default Settings;
