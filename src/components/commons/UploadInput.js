import React, { useState } from "react";

const UploadInput = ({
  className = "",
  onFileSelect,
  placeholderIcon = "/assets/icons/icon-add-photo.svg",
  placeholderTitle = "Upload image",
  placeholderText = "drag or drop mp4, mov, 3gp or avi",
  acceptedTypes = "image/*",
  titleClassName = "",
  subtitleClassName = "",
  iconClassName = "",
  ...props
}) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      if (onFileSelect) onFileSelect(file);
    }
  };

  return (
    <div
      className={`product-ask-section bg-white/5 backdrop-blur-sm p-8 h-[420px] flex flex-col justify-center items-center text-center cursor-pointer ${className}`}
      {...props}
    >
      <input
        type="file"
        accept={acceptedTypes}
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-input"
      />
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          <label htmlFor="upload-input" className="flex flex-col items-center">
            <img
              src={placeholderIcon}
              alt="Add icon"
              className={`max-w-[36px] lg:max-w-[unset] ${iconClassName}`}
            />
            <span
              className={`text-base lg:text-[24px] text-white block mt-2 ${titleClassName}`}
            >
              {placeholderTitle}
            </span>
            <span
              className={`text-xs lg:text-sm text-white/60 block mt-1 ${subtitleClassName}`}
            >
              {placeholderText}
            </span>
          </label>
        </>
      )}
    </div>
  );
};

export default UploadInput;
