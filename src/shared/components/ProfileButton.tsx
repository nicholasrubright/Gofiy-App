import { UserImageResponse } from "@mytypes/response.type";

const img =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

export default function ProfileButton(props: ProfileButtonProps) {
  const { name, images } = props;

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle border-0 rounded-pill profile-dropdown"
        data-bs-toggle="dropdown"
      >
        <img
          className="img-fluid me-2 rounded-pill"
          src={img}
          height="25"
          width="25"
        />
        <span className="align-middle">{name}</span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item">Logout</a>
        </li>
      </ul>
    </div>
  );
}

interface ProfileButtonProps {
  name: string;
  images: UserImageResponse[];
}
