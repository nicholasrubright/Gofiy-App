import { UserImageResponse } from "@mytypes/response.type";

export default function ProfileButton(props: ProfileButtonProps) {
  const { name, image } = props;

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle border-0 rounded-pill profile-dropdown"
        data-bs-toggle="dropdown"
      >
        <img
          className="img-fluid me-2 rounded-circle"
          src={image === null ? "/images/person-circle.svg" : image.url}
          height="30"
          width="30"
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
  image: UserImageResponse | null;
}
