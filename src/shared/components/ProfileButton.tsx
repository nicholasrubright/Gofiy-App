const img =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

export default function ProfileButton() {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle border border-black rounded-pill"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="img-fluid me-2 rounded-pill"
          src={img}
          height="25"
          width="25"
        />
        <span>Profile</span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item">Logout</a>
        </li>
      </ul>
    </div>
  );
}
