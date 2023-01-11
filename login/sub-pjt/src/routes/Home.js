import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  // {Greeting}은 스프링에서 가져온다
  const [Greeting, setGreeting] = useState("");

  useEffect(() => {
    axios
      .get("/api/homepage")
      .then((response) => setGreeting(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Home {Greeting}</h2>
    </div>
  );
}

export default Home;
