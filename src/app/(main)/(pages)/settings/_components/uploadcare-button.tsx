"use client";
import React, { useEffect } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: any;
};

const UploadCareButton = ({ onUpload }: Props) => {

  const router = useRouter()

  const handleUpload = async (e: any) => {
     
    if (await onUpload(`https://ucarecdn.com/${e.successEntries[0].uuid}/`)) {
      router.refresh()
    }
  };

  return (
    <div>
      <div>
        <FileUploaderRegular
          sourceList="local, camera, facebook, gdrive"
          cameraModes="photo, video"
          pubkey="3339de85dc1a8b71fbfb"
          multiple={false}
          onDoneClick={handleUpload}
        />
      </div>
    </div>
  );
};

export default UploadCareButton;
