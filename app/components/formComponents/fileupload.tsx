"use client";

import React, { useState, useCallback, useRef } from "react";

interface FileUploadProps {
  onUpload: (file: File) => void;
  allowedFileTypes: string[];
  maxFileSize: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onUpload,
  allowedFileTypes,
  maxFileSize,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  const uploadFileRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = useCallback((e: any) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    validateAndUpload(file);
    console.log(file);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    validateAndUpload(file);
  };

  const validateAndUpload = (file: File) => {
    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        setFileError("Invalid file type. Please select a different file.");
        return;
      }
      if (file.size > maxFileSize) {
        setFileError("File size exceeds the allowed limit.");
        return;
      }
      setFileError(null);
      onUpload(file);
    }
  };

  return (
    <>
      <div
        className={`border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer ${
          isDragging ? "border-blue-500" : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => uploadFileRef.current?.click()}
      >
        <input
          ref={uploadFileRef}
          type="file"
          accept={allowedFileTypes.join(",")}
          onChange={handleFileChange}
          className="hidden"
          multiple
        />
        <p>Drag and drop your file here or click to browse.</p>
        {fileError && <p className="text-red-500">{fileError}</p>}
      </div>
    </>
  );
};

export default FileUpload;
