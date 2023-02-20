import React from 'react'
import home from './images/Home-DSG.svg'
import about from './images/About-DSG.svg'
import projects from './images/Projects-DSG.svg'
import education from './images/Education-DSG.svg'
import contact from './images/Contact-DSG.svg'
import homeH from './images/Home-LG.svg'
import aboutH from './images/About-LG.svg'
import projectsH from './images/Projects-LG.svg'
import educationH from './images/Education-LG.svg'
import contactH from './images/Contact-LG.svg'

const nav = () => {

  const hover = (e) => {
    console.log("Hover running");
    const img = e.target.children[0]
    const span = e.target.children[1]
    const text = e.target.children[1].outerText
    const imgN = ["home", "about", "projects", "education", "contact"]
    const imgH = [homeH, aboutH, projectsH, educationH, contactH]
    const imgNH = [home, about, projects, education, contact]
    console.log(text)
    // e.stopPropogation();
    for (let i=0; i<5; i++){
      if (img.alt===(imgN[i])&&e.target.className===('hover')) {
        e.target.className=('shadow')
        img.src = `${imgH[i]}`
        span.style.color="lightgrey"
        e.target.style.backgroundColor="seagreen"
        // img.src = "{{img.alt}+H}"
      }else if (img.alt===(imgN[i])&&e.target.className===('shadow')){
        e.target.className=('hover')
        img.src = `${imgNH[i]}`
        span.style.color="darkslategrey"
        e.target.style.backgroundColor=""
      }
    }
  }
  return (
    <nav>
        <h1><a href="#home">Tyler Wertman Developments</a></h1>
            <div id="navLinksL">
              {/* <img src="" alt="" /> */}
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#home"><img src={home} alt="home"/><span class="hidden">&nbsp;Home</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#about"><img src={about} alt="about"/><span class="hidden">&nbsp;About</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#projects"><img src={projects} alt="projects"/><span class="hidden">&nbsp;Projects</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#education"><img src={education} alt="education"/><span class="hidden">&nbsp;Education</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#contact"><img src={contact} alt="contact"/><span class="hidden">&nbsp;Contact</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#null" class="icon"><i class="fa fa-bars"></i></a>
            </div>
            <div id="navLinksS">
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#null" class="icon"><i class="fa fa-bars"></i></a>
            </div>
            <div id="navLinksSE" class="toggle">
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#home"><img src="./images/Home-DSG.svg" alt="home"/></a>
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#about"><img src="./images/About-DSG.svg" alt="about"/></a>
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#projects"><img src="./images/Projects-DSG.svg" alt="projects"/></a>
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#education"><img src="./images/Education-DSG.svg" alt="education"/></a>
                <a className="hover" onMouseEnter={hover} onMouseOut={hover} href="#contact"><img src="./images/Contact-DSG.svg" alt="contact"/></a>
            </div>
    </nav>
  )
}

export default nav