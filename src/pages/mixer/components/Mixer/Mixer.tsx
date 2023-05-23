import { MixerForm } from "./";
import { Playlists } from "../Playlist";
import { useEffect, useState } from "react";
import { Playlist } from "../../../../shared/mytypes/model.type";
import { PlaylistMapping } from "@mytypes/internal.type";
import { getPlaylistMapping } from "@/utils";

const img =
  "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9";

const data: Playlist[] = [
  {
    id: 1,
    name: "Cool Playlist",
    img: img,
  },
  {
    id: 2,
    name: "Aweomes playlist",
    img: img,
  },
  {
    id: 3,
    name: "pepe poopoo",
    img: img,
  },
  {
    id: 4,
    name: "aw Playlist",
    img: img,
  },
  {
    id: 5,
    name: "erin is smelly",
    img: img,
  },
];

export default function Mixer() {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPlaylists, setSelectedPlaylists] = useState<PlaylistMapping>(
    {}
  );

  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    setPlaylists([...data]);
    const mapping = getPlaylistMapping(playlists);
    setSelectedPlaylists({ ...mapping });
  }, []);

  const [newPlaylistName, setNewPlaylistName] = useState<string>("");

  const handleNewPlaylistName = (e: any) => {
    setNewPlaylistName(e.target.value);
  };

  const createNewPlaylist = (e: any) => {
    console.log(newPlaylistName); // submit the new playlist

    setNewPlaylistName("");
  };

  const selectPlaylist = (e: any, index: number): void => {
    const updatedSelectedPlaylists = selectedPlaylists;
    updatedSelectedPlaylists[index] = !updatedSelectedPlaylists[index];
    setSelectedPlaylists({ ...updatedSelectedPlaylists });
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
            playlists={playlists}
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
