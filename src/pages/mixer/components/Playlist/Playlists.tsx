import { useState } from "react";
import { PlaylistBlock, ListOptions } from "./";
import Loader from "@/shared/components/Loader";

export default function Playlists(props: PlaylistProps) {
  const { isLoading, playlists, selectedPlaylists, selectPlaylist } = props;

  const playlistBlocks = playlists.map((playlist, index) => {
    return (
      <PlaylistBlock
        key={index}
        id={index}
        name={playlist.name}
        imgUrl={playlist.img}
        active={selectedPlaylists[index]}
        selectPlaylist={selectPlaylist}
      />
    );
  });

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
        {isLoading && <Loader />}
        {!isLoading && playlistBlocks}
      </div>
      <div id="bottom" className="row border-top mt-3 text-center py-2">
        <ListOptions />
      </div>
    </div>
  );
}

interface PlaylistProps {
  isLoading: boolean;
  playlists: any[];
  selectedPlaylists: boolean[];
  selectPlaylist: (e: any, index: number) => void;
}
