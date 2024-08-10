import Scroll from "react-scroll";
const Link = Scroll.Link;

export default function Navbar(data) {
  
  return (
    <div class="sidebar">
      <ul class="list-styled sidelist">
          <ul >
            {data.filedata.topics.map((topic, index) => (
              <div key={index}>
                {topic.content &&
                  topic.content.map((subheading, subIndex) => (
                    <li >
                      <Link
                        to={subheading.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={subheading.id}
                        activeClass={subheading.id}
                        key={subheading.id}
                        >
                        {subheading.title}
                      </Link>
                    </li>
                  ))}
                  {topic.qa &&
                  topic.qa.map((subheading, subIndex) => (
                    <li >
                      <Link
                        to={subheading.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={subheading.id}
                        activeClass={subheading.id}
                        key={subheading.id}
                        >
                        {subheading.id}
                      </Link>
                    </li>
                  ))}
              </div>
            ))}
          </ul>
      </ul>
    </div>
  );
}
