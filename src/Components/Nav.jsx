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
    console.log(e.target.children[1])
    const img = e.target.children[0]
    const span = e.target.children[1]
    // e.stopPropogation();
    if (img.alt===('home')&&e.target.className===('hover')) {
      e.target.className=('shadow')
      img.src = `${homeH}`
      span.style.color="lightgrey"
      e.target.style.backgroundColor="seagreen"
      // img.src = "{{img.alt}+H}"
    }else if (img.alt===('home')&&e.target.className===('shadow')){
      e.target.className=('hover')
      img.src = `${home}`
      span.style.color="darkslategrey"
      e.target.style.backgroundColor=""
    }else if (img.alt===('about')&&e.target.className===('hover')) {
      e.target.className=('shadow')
      img.src = `${aboutH}`
      span.style.color="lightgrey"
      e.target.style.backgroundColor="seagreen"
    }else if (img.alt===('about')&&e.target.className===('shadow')){
      e.target.className=('hover')
      img.src = `${about}`
      span.style.color="darkslategrey"
      e.target.style.backgroundColor=""
    }else if (img.alt===('projects')&&e.target.className===('hover')) {
      e.target.className=('shadow')
      img.src = `${projectsH}`
      span.style.color="lightgrey"
      e.target.style.backgroundColor="seagreen"
    }else if (img.alt===('projects')&&e.target.className===('shadow')){
      e.target.className=('hover')
      img.src = `${projects}`
      span.style.color="darkslategrey"
      e.target.style.backgroundColor=""
    }else if (img.alt===('education')&&e.target.className===('hover')) {
      e.target.className=('shadow')
      img.src = `${educationH}`
      span.style.color="lightgrey"
      e.target.style.backgroundColor="seagreen"
    }else if (img.alt===('education')&&e.target.className===('shadow')){
      e.target.className=('hover')
      img.src = `${education}`
      span.style.color="darkslategrey"
      e.target.style.backgroundColor=""
    }else if (img.alt===('contact')&&e.target.className===('hover')) {
      e.target.className=('shadow')
      img.src = `${contactH}`
      span.style.color="lightgrey"
      e.target.style.backgroundColor="seagreen"
    }else if (img.alt===('contact')&&e.target.className===('shadow')){
      e.target.className=('hover')
      img.src = `${contact}`
      span.style.color="darkslategrey"
      e.target.style.backgroundColor=""
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