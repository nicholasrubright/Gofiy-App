import Jumbotron from "@/pages/components/Jumbotron";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem("goify-token");
  }, []);

  return (
    <div className="container">
      <Jumbotron />
    </div>
  );
}
