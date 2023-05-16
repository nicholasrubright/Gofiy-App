export default function PlaylistBlock(props: PlaylistBlockProp) {
  const { imgUrl, name } = props;

  return (
    <div className="container rounded py-3">
      <div className="row bg-light rounded">
        <div className="col-auto p-0">
          <img className="rounded" src={imgUrl} width="100" height="100"></img>
        </div>
        <div className="col align-self-center">
          <h4 className="text-center">{name}</h4>
        </div>
      </div>
    </div>
  );
}

interface PlaylistBlockProp {
  imgUrl: string;
  name: string;
}
