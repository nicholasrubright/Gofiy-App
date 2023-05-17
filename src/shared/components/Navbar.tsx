import ProfileButton from "./ProfileButton";

// Only used to display the profile button
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex">
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
}
