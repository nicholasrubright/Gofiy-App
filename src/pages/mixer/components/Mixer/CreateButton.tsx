export default function CreateButton(props: CreateButtonProps) {
  const { isLoading, createNewPlaylist } = props;

  return (
    <button
      type="button"
      className={`btn ${!isLoading ? "create-btn" : "btn-secondary"}`}
      disabled={isLoading}
      onClick={(e) => createNewPlaylist(e)}
    >
      {!isLoading && <span>Create</span>}
      {isLoading && <span className="spinner-border spinner-border-sm"></span>}
    </button>
  );
}

interface CreateButtonProps {
  isLoading: boolean;
  createNewPlaylist: (e: any) => void;
}
