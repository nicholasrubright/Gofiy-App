import { MixerForm } from "./";
import { Playlists } from "../Playlist";
import { useEffect, useState } from "react";
import { Playlist } from "../../../../shared/mytypes/model.type";
import { PlaylistMapping, UserPlaylistsResponse } from "@mytypes/index";
import { getPlaylistMapping, transformPlaylists } from "@/utils";
import { getSelectedPlaylists } from "@/utils/playlist.util";
import { createPlaylist } from "@/api/goify.api";

export default function Mixer(props: MixerProps) {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPlaylists, setSelectedPlaylists] = useState<PlaylistMapping>(
    {}
  );

  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    if (props.playlists !== null) {
      const playlists = transformPlaylists(props.playlists);
      setPlaylists(playlists);
      const mapping = getPlaylistMapping(playlists);
      setSelectedPlaylists({ ...mapping });
    }
  }, [props]);

  const [newPlaylistName, setNewPlaylistName] = useState<string>("");
  const [newPlaylistDescription, setNewPlaylistDescription] =
    useState<string>("");

  const handleNewPlaylistName = (e: any) => {
    setNewPlaylistName(e.target.value);
  };

  const handleNewPlaylistDescription = (e: any) => {
    setNewPlaylistDescription(e.target.value);
  };

  const createNewPlaylist = async (e: any) => {
    console.log(newPlaylistName); // submit the new playlist
    console.log(newPlaylistDescription);

    const ids = getSelectedPlaylists(playlists, selectedPlaylists);

    const token = localStorage.getItem("goify-token");

    const user = localStorage.getItem("user");

    if (token !== null && user !== null) {
      const res = await createPlaylist(
        ids,
        token,
        user,
        newPlaylistName,
        newPlaylistDescription
      );
    }

    setNewPlaylistName("");
    setNewPlaylistDescription("");

    const mapping = getPlaylistMapping(playlists);
    setSelectedPlaylists({ ...mapping });
  };

  const selectPlaylist = (e: any, index: string): void => {
    const updatedSelectedPlaylists = selectedPlaylists;
    updatedSelectedPlaylists[index] = !updatedSelectedPlaylists[index];
    setSelectedPlaylists({ ...updatedSelectedPlaylists });
  };

  return (
    <div className="container px-4 py-5">
      <div className="row">
        <div className="col-lg-7">
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
            newPlaylistDescription={newPlaylistDescription}
            handleNewPlaylistName={handleNewPlaylistName}
            handleNewPlaylistDescription={handleNewPlaylistDescription}
            createNewPlaylist={createNewPlaylist}
          />
        </div>
      </div>
    </div>
  );
}

interface MixerProps {
  playlists: UserPlaylistsResponse | null;
}
