import { useState, useEffect } from "react";

export default function JoesApi() {
  let apiUrl = "https://official-joke-api.appspot.com/random_joke";
  let [joke, setJoke] = useState({});
  let getJokes = async () => {
    let response = await fetch(apiUrl);
    response = await response.json();
    console.log(response);
    setJoke({ setup: response.setup, punchline: response.punchline });
  };
  useEffect(() => {
    getJokes();
  }, []); 
  return (
    <>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getJokes}>Get New One</button>
    </>
  );
}
