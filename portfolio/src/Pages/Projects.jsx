import Navbar from "../Components/Navbar";

const Projects = () => {

  const projectInfo = [
    // { title: "Phobos", description: "An educational space themed web app built using React.", img: "/phobos.png", link: "https://github.com/MattHammond94/Phobos" },
    { title: "Java-Gram", description: "An instagram clone built using the MERN stack.", img: "/JavaGramHomePage.png", link: "https://github.com/MattHammond94/Java-Gram" },
    { title: "Fours Garden", description: "A portfolio website to showcase an artists work - Built using React.", img: "/fours-garden.jpg", link: "https://fours-garden.netlify.app/" },
    { title: "Flock", description: "A multiplatform mobile app built using React Native.", img: "/flock.png", link: "https://github.com/ev-th/Flock" },
    { title: "The Trelloship Of The String", description: "A LOTR themed facebook clone built using the MERN stack.", img: "/trelloship-landing-page.png", link: "https://github.com/georgebarrett/trelloship_of_the_string/tree/main" }
  ]

  return (
    <>
      <Navbar className="navbar" />
      <div className="projects-container">
        {projectInfo.map((project, index) => (
          <div key={ index }>
            <a target="_blank" rel="noreferrer" href={project.link}>
              <div className="img-container" style={{ background: `url(${project.img}) no-repeat center center/cover` }}>
                <h1>{ project.title }</h1>
                <p>{ project.description }</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects