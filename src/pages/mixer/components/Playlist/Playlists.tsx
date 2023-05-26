import { PlaylistBlock, ListOptions } from "./";
import Loader from "@/shared/components/Loader";
import { Playlist, PlaylistMapping } from "@mytypes/index";

export default function Playlists(props: PlaylistProps) {
  const { isLoading, playlists, selectedPlaylists, selectPlaylist } = props;

  const playlistBlocks = playlists.map((playlist) => {
    return (
      <PlaylistBlock
        key={playlist.id}
        id={playlist.id}
        name={playlist.name}
        imgUrl={playlist.img}
        active={selectedPlaylists[playlist.id]}
        selectPlaylist={selectPlaylist}
      />
    );
  });

  return (
    <div className="container">
      <div id="top" className="row text-center mb-3">
        <h3>Playlists</h3>
      </div>
      <div
        id="playlists"
        style={{ height: "400px" }}
        className="row overflow-auto px-3 playlist-container"
      >
        {isLoading && <Loader />}
        {!isLoading && playlistBlocks.length > 0 && playlistBlocks}
        {!isLoading && playlistBlocks.length === 0 && (
          <h3 className="text-center p-4">No Playlists...</h3>
        )}
      </div>
      <div id="bottom" className="row mt-3 text-center py-2">
        <ListOptions />
      </div>
    </div>
  );
}

interface PlaylistProps {
  isLoading: boolean;
  playlists: Playlist[];
  selectedPlaylists: PlaylistMapping;
  selectPlaylist: (e: any, id: string) => void;
}
