import React from 'react'
import home from './images/Home-DSG.svg'
import about from './images/About-DSG.svg'
import projects from './images/Projects-DSG.svg'
import education from './images/Education-DSG.svg'
import contact from './images/Contact-DSG.svg'
import homeH from './images/Home-fill-SG.svg'
import aboutH from './images/About-fill-SG.svg'
import projectsH from './images/Projects-fill-SG.svg'
import educationH from './images/Education-fill-SG.svg'
import contactH from './images/Contact-fill-SG.svg'

const nav = () => {

  const hover = (element) => {
    console.log("Hover running");
    // element.stopPropogation()
    // console.log(element.target.children[0].src)
    if (element.target.children[0].alt===('home')&&element.target.className===('hover')) {
        element.target.className=('')
        element.target.children[0].src = `${homeH}`
        // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
    }else if (element.target.children[0].alt===('home')&&element.target.className===('')){
        // console.log(element.target.children[0].src)
        element.target.className=('hover')
        element.target.children[0].src = `${home}`
    }else if (element.target.children[0].alt===('about')&&element.target.className===('hover')) {
        element.target.className=('')
        element.target.children[0].src = `${aboutH}`
        // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
    }else if (element.target.children[0].alt===('about')&&element.target.className===('')){
        // console.log(element.target.children[0].src)
        element.target.className=('hover')
        element.target.children[0].src = `${about}`
    }else if (element.target.children[0].alt===('projects')&&element.target.className===('hover')) {
        element.target.className=('')
        element.target.children[0].src = `${projectsH}`
        // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
    }else if (element.target.children[0].alt===('projects')&&element.target.className===('')){
        // console.log(element.target.children[0].src)
        element.target.className=('hover')
        element.target.children[0].src = `${projects}`
    }else if (element.target.children[0].alt===('education')&&element.target.className===('hover')) {
      element.target.className=('')
      element.target.children[0].src = `${educationH}`
      // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
    }else if (element.target.children[0].alt===('education')&&element.target.className===('')){
        // console.log(element.target.children[0].src)
        element.target.className=('hover')
        element.target.children[0].src = `${education}`
    }else if (element.target.children[0].alt===('contact')&&element.target.className===('hover')) {
      element.target.className=('')
      element.target.children[0].src = `${contactH}`
      // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
    }else if (element.target.children[0].alt===('contact')&&element.target.className===('')){
        // console.log(element.target.children[0].src)
        element.target.className=('hover')
        element.target.children[0].src = `${contact}`
    }
  }
  return (
    <nav>
        <h1><a href="#null">Tyler Wertman Developments</a></h1>
            <div id="navLinksL">
              <img src="" alt="" />
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#home"><img src={home} alt="home"/><span class="hidden">&nbsp;Home</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#about"><img src={about} alt="about"/><span class="hidden">&nbsp;About</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#projects"><img src={projects} alt="projects"/><span class="hidden">&nbsp;Projects</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#education"><img src={education} alt="education"/><span class="hidden">&nbsp;Education</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#contact"><img src={contact} alt="contact"/><span class="hidden">&nbsp;Contact</span></a>&nbsp;
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#null" class="icon"><i class="fa fa-bars"></i></a>
            </div>
            <div id="navLinksS">
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#null" class="icon"><i class="fa fa-bars"></i></a>
            </div>
            <div id="navLinksSE" class="toggle">
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#home"><img src="./images/Home-DSG.svg" alt="home"/></a>
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#about"><img src="./images/About-DSG.svg" alt="about"/></a>
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#projects"><img src="./images/Projects-DSG.svg" alt="projects"/></a>
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#education"><img src="./images/Education-DSG.svg" alt="education"/></a>
                <a className="hover" onMouseEnter={hover} onMouseLeave={hover} href="#contact"><img src="./images/Contact-DSG.svg" alt="contact"/></a>
            </div>
    </nav>
  )
}

export default nav