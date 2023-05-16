import { MixerForm } from "./";
import { Playlists } from "../Playlist";

export default function Mixer() {
  return (
    <div className="container px-4 py-5 my-5">
      <div className="row text-center">
        <h1>Mixer!</h1>
      </div>
      <div className="row border">
        <div className="col-7 border-end">
          <Playlists />
        </div>
        <div className="col-5">
          <MixerForm />
        </div>
      </div>
    </div>
  );
}
