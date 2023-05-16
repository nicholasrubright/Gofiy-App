import { useState } from "react";
import MixerForm from "./MixerForm";
import Playlists from "./Playlists";
import Loader from "@/shared/components/Loader";

export default function MixerComponent() {
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
