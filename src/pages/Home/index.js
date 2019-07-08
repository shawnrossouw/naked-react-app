import React from "react";
import backGroundImg from "../../images/docker-wallpaper-black.jpg";

function Home() {
  return (
    <div className="page page-home">
        <div className="bg-img">
            <img src={backGroundImg} alt={'docker whale'} />
        </div>
      <div className="title">
        <h1>REACT ROCKS</h1>
        <p>That is a true story bro. React totally rocks and docker sux. Joke, docker also rocks. :P</p>
      </div>
    </div>
  );
}
export default Home;
