import React, { useState } from "react";
import NewVideoPlayer from "./NewVideoPlayer";
const jsonResult = require("../exampleresponse.json");

const OrderResult = () => {
  const [titleAndUrl, setTitleAndUrl] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [urlData, setUrlData] = useState(jsonResult);
  let randomNumbers = Math.floor(Math.random() * 100 + 1);
  const [rating, setRating] = useState(randomNumbers);
  function fetchUrlData() {
    // console.log(urlData)
  }
  fetchUrlData();
  const clickHandle = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "url") {
      setUrl(e.target.value);
    } else if (rating !== "") {
      setRating(rating);
    }
  };

  const Submit = async (e) => {
    e.preventDefault();
    let newVideo = {
      title: title,
      rating: rating,
      url: url,
    };
    let updateNewVideo = [...titleAndUrl];
    updateNewVideo.push(newVideo);
    console.log(updateNewVideo);
    setTitleAndUrl(updateNewVideo);
    setTitle("");
    setUrl("");
    await fetch("http://localhost:4000/thevideos", {
      method: "POST",
      body: JSON.stringify(newVideo),
      headers: { "content-type": "application/json" },
    }).then(() => {
      urlData.push(newVideo);
      setUrlData(urlData);
      console.log(urlData);
    });
  };

  return (
    <div className="the-button">
      <div className="form">
        <form className="form-add" onSubmit={Submit}>
          <h3>you can add your videos</h3>
          <label id="firstId">
            <input
              id="lable-1"
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={clickHandle}
              required
            />
          </label>
          <br />
          <label id="secondId">
            <input
              id="lable-2"
              type="text"
              name="url"
              placeholder="url"
              value={url}
              onChange={clickHandle}
              required
            />
          </label>

          <br />
          <button type="submit" className="secondButton btn btn-primary">
            Add Video
          </button>
        </form>
      </div>
      <div className="newPlayer">
        {titleAndUrl.map((elem, index) => {
          return (
            <div key={index} className="newVideoPlayer">
              <NewVideoPlayer
                rating={rating}
                setRating={setRating}
                i={titleAndUrl}
                el={elem.title}
                rl={elem.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderResult;
