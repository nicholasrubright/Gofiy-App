import "@/styles/Mixer.module.css";

import { MixerForm } from "./";
import { Playlists } from "../Playlist";
import { useState } from "react";

const img =
  "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9";

const data = [
  {
    name: "Cool Playlist",
    img: img,
  },
  {
    name: "Aweomes playlist",
    img: img,
  },
  {
    name: "pepe poopoo",
    img: img,
  },
  {
    name: "aw Playlist",
    img: img,
  },
  {
    name: "erin is smelly",
    img: img,
  },
];

export default function Mixer() {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPlaylists, setSelectedPlaylists] = useState<boolean[]>(
    Array.prototype.fill(false, 0, data.length)
  );

  const [newPlaylistName, setNewPlaylistName] = useState<string>("");

  const handleNewPlaylistName = (e: any) => {
    setNewPlaylistName(e.target.value);
  };

  const createNewPlaylist = (e: any) => {
    console.log(newPlaylistName);
    setNewPlaylistName("");
  };

  const selectPlaylist = (e: any, index: number): void => {
    const updatedSelectedPlaylists = selectedPlaylists;
    updatedSelectedPlaylists[index] = !updatedSelectedPlaylists[index];
    setSelectedPlaylists([...updatedSelectedPlaylists]);
  };

  return (
    <div className="container px-4 py-5 my-5">
      <div className="row text-center">
        <h1>Mixer!</h1>
      </div>
      <div className="row border">
        <div className="col-lg-7 border-end">
          <Playlists
            isLoading={isLoading}
            playlists={data}
            selectedPlaylists={selectedPlaylists}
            selectPlaylist={selectPlaylist}
          />
        </div>
        <div className="col-lg-5">
          <MixerForm
            newPlaylistName={newPlaylistName}
            handleNewPlaylistName={handleNewPlaylistName}
            createNewPlaylist={createNewPlaylist}
          />
        </div>
      </div>
    </div>
  );
}
