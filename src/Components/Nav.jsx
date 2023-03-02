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
import {Link} from 'react-router-dom'

const nav = () => {

  const hover = (e) => {
    console.log("Hover running");
    const imgTag = e.target.children[0]
    const span = e.target.children[1]
    const text = e.target.children[1].outerText
    const imgName = ["home", "about", "projects", "education", "contact"]
    const imgHover = [homeH, aboutH, projectsH, educationH, contactH]
    const img = [home, about, projects, education, contact]
    console.log(text)
    // e.stopPropogation();
    for (let i=0; i<5; i++){
      if (imgTag.alt===(imgName[i])&&e.target.className===('hover')) {
        e.target.className=('shadow')
        imgTag.src = `${imgHover[i]}`
        span.style.color="lightgrey"
        e.target.style.backgroundColor="seagreen"
      }else if (imgTag.alt===(imgName[i])&&e.target.className===('shadow')){
        e.target.className=('hover')
        imgTag.src = `${img[i]}`
        span.style.color="darkslategrey"
        e.target.style.backgroundColor=""
      }
    }
  }
  return (
    <nav>
        <h1><a href="#home">Tyler Wertman Developments</a></h1>
            <div id="navLinksL">
              <img src="" alt="" />
              <Link className="hover" onMouseOver={hover} onMouseLeave={hover} to={"/#home"}><img src={home} alt="home"/><span className="hidden">&nbsp;Home</span></Link>&nbsp;
              <Link className="hover" onMouseEnter={hover} onMouseLeave={hover} to={"/#about"}><img src={about} alt="about"/><span className="hidden">&nbsp;About</span></Link>&nbsp;
              <Link className="hover" onMouseOver={hover} onMouseOut={hover} to={"/#projects"}><img src={projects} alt="projects"/><span className="hidden">&nbsp;Projects</span></Link>&nbsp;
              <Link className="hover" onMouseEnter={hover} onMouseOut={hover} to={"/#education"}><img src={education} alt="education"/><span className="hidden">&nbsp;Education</span></Link>&nbsp;
              <Link className="hover" onMouseEnter={hover} onMouseOut={hover} to={"/#contact"}><img src={contact} alt="contact"/><span className="hidden">&nbsp;Contact</span></Link>&nbsp;
              <Link className="icon hover" onMouseEnter={hover} onMouseOut={hover} to={"#null"}><i className="fa fa-bars"></i></Link>&nbsp;
            </div>
            <div id="navLinksS">
              <Link className="icon hover" onMouseEnter={hover} onMouseOut={hover} to={"#null"}><i className="fa fa-bars"></i></Link>&nbsp;
            </div>
    </nav>
  )
}

export default nav