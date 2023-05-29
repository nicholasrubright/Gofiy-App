"use client";
import { UserProfileResponse } from "@mytypes/index";
import ProfileButton from "./ProfileButton";

// Only used to display the profile button
export default function Navbar(props: NavbarProps) {
  const { profile } = props;

  if (profile === null) {
    return null;
  }

  const image = profile.images.length > 0 ? profile.images[0] : null;

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex">
          <ProfileButton name={profile.name} image={image} />
        </div>
      </div>
    </nav>
  );
}

interface NavbarProps {
  profile: UserProfileResponse | null;
}
