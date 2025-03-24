"use client";

import React from "react";
import UploadCareButton from "./uploadcare-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { X } from "lucide-react";

type Props = {
  userImage: string | null;
  onDelete: any;
  onUpload: any;
};

const ProfilePicture = ({ onDelete, onUpload, userImage }: Props) => {
  const router = useRouter();

  const onRemoveProfileImage = async () => {
    if (await onDelete()) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col ">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div>
              <Image
                src={userImage} 
                alt="User_Image" 
                layout="intrinsic" 
                width={200} 
                height={200} 
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Profile Image
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
