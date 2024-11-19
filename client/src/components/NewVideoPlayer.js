// import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Reactplayer from "react-player";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const NewVideoPlayer = ({ rating, setRating, rl, i, el }) => {
  // let randomNumbers = Math.floor(Math.random() * 100 + 1);
  // const [random, setRandom] = useState(randomNumbers);
  const randomVoteUp = () => {
    setRating(rating + 1);
  };
  const randomVoteDown = () => {
    setRating(rating - 1);
  };
  const deleteVideo = (i) => {
    console.log(i);
    let deleteIndex = i.filter((elm) => {
      console.log(elm);
      if(elm.url === "String"){
        return null;
    }else{
      return elm;
    }
  });
    console.log(' rating was deleted is ', rating);
    return deleteIndex;
  };
  return (
    <div className="newVideos">
      <div className="btnHead">
        {el}
        <span className="btnSpan">
          <Button
            onClick={randomVoteUp}
            style={{ backgroundColor: "blue", width: "70px" }}
          >
            {" "}
            <FiThumbsUp />{" "}
          </Button>
          {rating}
          <Button
            onClick={randomVoteDown}
            style={{ backgroundColor: "blue", width: "70px" }}
          >
            {" "}
            <FiThumbsDown />{" "}
          </Button>
        </span>
      </div>

      <Reactplayer controls url={rl} width="400px" height="250px" />
      <Button
        type="button"
        onClick={() => deleteVideo(i)}
        style={{ backgroundColor: "red", width: "70px" , margin: "0 auto"}}
        className="buton"
      >
        {" "}
        <RiDeleteBin5Line />{" "}
      </Button>
    </div>
  );
};

export default NewVideoPlayer;
