import ListOptions from "./ListOptions";
import PlaylistBlock from "./PlaylistBlock";

const img =
  "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9";
const name = "Test Playlist";

export default function Playlists() {
  return (
    <div className="container">
      <div id="top" className="row text-center border-bottom mb-3">
        <p>Playlists</p>
      </div>
      <div
        id="playlists"
        style={{ height: "400px" }}
        className="row overflow-auto px-3"
      >
        <PlaylistBlock name={name} imgUrl={img} />
        <PlaylistBlock name={name} imgUrl={img} />
        <PlaylistBlock name={name} imgUrl={img} />
        <PlaylistBlock name={name} imgUrl={img} />
      </div>
      <div id="bottom" className="row border-top mt-3 text-center py-2">
        <ListOptions />
      </div>
    </div>
  );
}
