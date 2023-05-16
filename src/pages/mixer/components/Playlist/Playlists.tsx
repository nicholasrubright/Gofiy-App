import { useState } from "react";
import { PlaylistBlock, ListOptions } from "./";
import Loader from "@/shared/components/Loader";

const img =
  "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9";
const name = "Test Playlist";

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

export default function Playlists() {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPlaylist, setSelectedPlaylist] = useState<boolean[]>(
    Array.prototype.fill(false, 0, data.length)
  );

  const selectPlaylist = (e: any, index: number): void => {
    const updatedSelectedPlaylists = selectedPlaylist;
    updatedSelectedPlaylists[index] = !updatedSelectedPlaylists[index];
    setSelectedPlaylist([...updatedSelectedPlaylists]);
  };

  const playlistBlocks = data.map((item, index) => {
    return (
      <PlaylistBlock
        id={index}
        name={item.name}
        imgUrl={item.img}
        active={selectedPlaylist[index]}
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
