export default function PlaylistBlock(props: PlaylistBlockProp) {
  const { id, imgUrl, name, active, selectPlaylist } = props;

  return (
    <div className="container rounded py-3">
      <div
        id="playlist-block"
        className={`row rounded shadow bg-light position-relative ${
          active ? "active" : ""
        }`}
      >
        <div className="col-auto p-0">
          <img
            className="rounded object-fit-scale"
            src={imgUrl}
            width="100"
            height="100"
          ></img>
        </div>
        <div className="col align-self-center">
          <h4 className="text-center">{name}</h4>
        </div>
        <a
          onClick={(e) => selectPlaylist(e, id)}
          className="stretched-link"
        ></a>
      </div>
    </div>
  );
}

interface PlaylistBlockProp {
  id: number;
  imgUrl: string;
  name: string;
  active: boolean;
  selectPlaylist: (e: any, index: number) => void;
}
