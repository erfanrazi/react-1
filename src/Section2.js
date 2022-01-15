import React from "react";
import Synonyms from "./Synonyms";

export default function Section1(props) {
  if (props.dictionary !== null) {
    return (
      <div>
        {props.dictionary.meanings.map((element, index) => {
          return (
            <section key={index} className="part">
              <div className="space">
                <h3>{element.partOfSpeech}</h3>
                <br />
                <p>{element.definitions[0].definition}</p>
                <br />
                <em>{element.definitions[0].example}</em>
                <br />
                <br />

                <Synonyms words={element.definitions[0].synonyms} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}