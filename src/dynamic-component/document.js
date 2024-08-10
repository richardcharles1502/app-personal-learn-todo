import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import config from "../config";

export default function Document() {
  const [filedata, setfiledata] = useState();
  const [Error, setError] = useState();
  const location = useLocation();
  const { filename } = location.state || { value: "No value passed" };

  useEffect(() => {
    if (!filename) {
      setError("No file name passed");
      return;
    }
    fetch(`${config.backendUrl}/api/readfile?file=${filename}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error in reading a file");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setfiledata(data);
      })
      .catch((error) => setError(error.message));
  }, [Error, filename]);

  return (
    <section class="single section-sm pb-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
            {filedata && filedata.topics ? <Navbar filedata={filedata} /> : "Invalid json data from backend passed (for proper json format refer /json/sample.json)"}
            </div>
            <div class="col-lg-9">
                <div class="p-lg-5 p-4 bg-white">
                     
      
        {filedata && filedata.topics
          ? filedata.topics.map((topic, index) => (
              <div key={index} id={topic.id}>
                <h2>{topic.main_heading}</h2>
                <hr></hr>
                {topic.content &&
                  topic.content.map((subheading, subIndex) => (
                    <div key={subIndex}>
                      <h5 id={subheading.id}>{subheading.title}</h5>
                      <p>{subheading.description}</p>
                      {subheading.url ? <p><Link to={subheading.url} target="blank">{ subheading.url}</Link></p> : ''}
                    </div>
                  ))}
                {topic.list && 
                  (
                    <ul style={{ listStyleType: 'disc'}}>
                      {topic.list.map((subheading, subIndex) => (
                            <li key={subheading.id} id={subheading.id}>
                              {subheading.title}
                            </li>
                          ))}
                    </ul>
                  )
                }
                {topic.video && 
                  (
                    <ul>
                      {topic.video.map((subheading, subIndex) => (
                        <div key={subheading.id} id={subheading.id}>
                           {/* default structure https://www.youtube.com/embed/slug */}
                            <iframe title={subheading.title} height="400" width="650" src={subheading.url} allowfullscreen="allowfullscreen"> 
                            </iframe> 
                        </div>
                           
                          ))}
                    </ul>
                  )
                }

             {topic.qa &&
                  topic.qa.map((subheading, subIndex) => (
                    <div key={subIndex}>
                      <h5 id={subheading.id}>{subheading.question}</h5>
                       <p>{ subheading.answer ? subheading.answer : ''}</p>
                       <p>{ subheading.code_snippet ? subheading.code_snippet : ''}</p>
                    </div>
                  ))}
               
              </div>
            ))
          : Error}
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}
