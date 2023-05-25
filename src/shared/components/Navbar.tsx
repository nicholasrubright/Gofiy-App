"use client";
import { UserProfileResponse } from "@mytypes/index";
import ProfileButton from "./ProfileButton";

// Only used to display the profile button
export default function Navbar(props: NavbarProps) {
  const { profile } = props;

  if (profile === null) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex">
          <ProfileButton name={profile.name} image={profile.images[0]} />
        </div>
      </div>
    </nav>
  );
}

interface NavbarProps {
  profile: UserProfileResponse | null;
}
