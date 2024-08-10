import "./home.css";
import config from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [topics, settopics] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${config.backendUrl}/api/readfolder`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error in reading the folder");
        }
        return response.json();
      })
      .then((data) => {
        settopics(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  const passbuttonname = (event) => {
    let filename = event.target.name;
    navigate("/document", { state: { filename } });
  };

  const topicButton = (topics) => {
    let buttonColour = ["purpul", "blue", "green", "yellow", "red"];
    if (topics) {
      return topics.map((val, i) => {
        let convertname = val.replace(".json", "").replace("-", " ");
        return (
          <button
            class={`btn-grad ${
              buttonColour[(i + 0) % buttonColour.length]
            } ${i}`}
            key={i}
            onClick={passbuttonname}
            name={val}
          >
            {" "}
            {convertname}{" "}
          </button>
        );
      });
    }
  };

  return (
    <div>
      <div class="home-grid">
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {topicButton(topics)}
      </div>
    </div>
  );
}
