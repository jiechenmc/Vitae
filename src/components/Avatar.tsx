import React from "react";

interface AvatarProps {
  name: string;
  title: string;
  imageSource: string;
}

const Avatar = ({ name, title, imageSource }: AvatarProps) => {
  return (
    <div className="text-center">
      <img
        src={imageSource}
        className="rounded-full w-48 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-semibold leading-none mb-2">{name}</h5>
      <p className="text-lg font-semibold leading-none text-white">{title}</p>
    </div>
  );
};

export default Avatar;
