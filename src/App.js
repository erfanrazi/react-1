import React, { useState } from "react";
import axios from "axios";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import "./App.css";

function App(props) {
  const [word, setWord] = useState(props.word);
  const [dictionary, setDictionary] = useState(null);
  const [load, setLoad] = useState(true);
  function showWord(response) {
    setDictionary(response.data[0]);
  }

  function changeWord(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showWord);
  }

  if (load) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
    axios.get(url).then(showWord);
    setLoad(false);
  } else {
    return (
      <div className="container">
        <a href="https://www.shecodes.io/" title="shecodes">
          <img
            alt="shecodes"
            src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
          />
        </a>
        <header className="part">
          <div className="space">
            <h2>What word do you want to look up?</h2>
            <form onSubmit={search}>
              <input
                onChange={changeWord}
                type="search"
                placeholder="Search for a word"
              ></input>
            </form>
            <small>i.e. paris, wine, yoga, coding</small>
          </div>
        </header>

        <Section1 dictionary={dictionary} />
        <Section2 dictionary={dictionary} />
        <Section3 dictionary={dictionary} />
        <p className="sign">
          This project was coded by{" "}
          <a href="https://www.shecodes.io/">SheCodes</a> and is open-sourced on{" "}
          <a href="https://github.com/elhamiakbari/homework1-react/dic">GitHub</a> and hosted
          on <a href="https://www.netlify.com/">Netlify</a>
        </p>
      </div>
    );
  }
}

export default App;