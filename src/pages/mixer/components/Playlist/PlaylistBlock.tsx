export default function PlaylistBlock(props: PlaylistBlockProp) {
  const { imgUrl, name } = props;

  return (
    <a className="container rounded py-3">
      <div className="row bg-light rounded">
        <div className="col-2">
          <img className="rounded" src={imgUrl} width="100" height="100"></img>
        </div>
        <div className="col">
          <p className="text-center text-decoration-none">{name}</p>
          <a href="#" className="stretch-link"></a>
        </div>
      </div>
    </a>
  );
}

interface PlaylistBlockProp {
  imgUrl: string;
  name: string;
}
