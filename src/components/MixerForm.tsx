export default function MixerForm() {
  return (
    <div className="container">
      <div id="title" className="row text-center border-bottom py-2">
        <h2>Combine!</h2>
      </div>
      <div id="fields" className="row mt-2 p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Awesome Playlist"
          />
        </div>
      </div>
      <div id="stats" className="row border-top p-3">
        <p>Total Songs: </p>
        <p>Total Selected Playlists: </p>
      </div>
      <div id="buttons" className="row border-top p-3">
        <button type="button" className="btn btn-primary">
          Create
        </button>
      </div>
    </div>
  );
}
