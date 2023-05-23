import { CreateButton } from ".";

export default function MixerForm(props: MixerFormProps) {
  const { newPlaylistName, handleNewPlaylistName, createNewPlaylist } = props;

  return (
    <div className="container h-100">
      <div className="">
        <div id="title" className="row text-center border-bottom py-2">
          <h2>Combine!</h2>
        </div>
        <div id="fields" className="row mt-2 p-4">
          <div className="mb-3">
            <label htmlFor="newPlaylistName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="newPlaylistName"
              value={newPlaylistName}
              placeholder="Awesome Playlist"
              onChange={(e) => handleNewPlaylistName(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPlaylistDescription" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="newPlaylistDescription"
              value={newPlaylistName}
              placeholder="This is a really awesome playlist..."
              onChange={(e) => handleNewPlaylistName(e)}
            />
          </div>
        </div>
        <div>
          <div id="stats" className="row border-top p-3">
            <p>Total Songs: </p>
            <p>Total Selected Playlists: </p>
          </div>
          <div id="buttons" className="row border-top p-3 align-items-end">
            <div className="col d-grid align-self-end">
              <CreateButton
                isLoading={false}
                createNewPlaylist={createNewPlaylist}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MixerFormProps {
  newPlaylistName: string;
  handleNewPlaylistName: (e: any) => void;
  createNewPlaylist: (e: any) => void;
}
