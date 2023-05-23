"use client";
import { UserProfileResponse } from "@mytypes/index";
import ProfileButton from "./ProfileButton";
import { useEffect, useState } from "react";
import { UserImageResponse } from "@mytypes/response.type";

// Only used to display the profile button
export default function Navbar(props: NavbarProps) {
  const [name, setName] = useState<string>("");
  const [images, setImages] = useState<UserImageResponse[]>([]);

  useEffect(() => {
    if (props.profile !== null) {
      setName(props.profile.name);
      setImages([props.profile.images]);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex">
          <ProfileButton name={name} images={images} />
        </div>
      </div>
    </nav>
  );
}

interface NavbarProps {
  profile: UserProfileResponse | null;
}
