import React, { useState } from "react";
import axios from "axios";

export default function Section3(props) {
  const [load, setLoad] = useState(true);
  const [newWord, setNewWord] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  let apiKey = `563492ad6f9170000100000155dd01e856784fe490761bd7b7179477`;

  if (load === true && props.dictionary !== null) {
    function showPhoto(response) {
      console.log(props.dictionary.word);
      console.log(response.data.photos);
      setLoad(false);
      setNewWord(props.dictionary.word);
      setImgSrc(response.data.photos);
    }
    let url = `https://api.pexels.com/v1/search?query=${props.dictionary.word}&per_page=9`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(showPhoto);

    return <footer className="part">Loading</footer>;
  } else if (newWord !== null && newWord !== props.dictionary.word) {
    setLoad(true);
  } else if (imgSrc !== null) {
    return (
      <footer className="part">
        <div className="space">
          {imgSrc.map((element, index) => {
            return (
              <img
                key={index}
                alt={props.dictionary.word}
                src={element.src.landscape}
              ></img>
            );
          })}
        </div>
      </footer>
    );
  } else {
    return <footer className="part">Loading</footer>;
  }
}