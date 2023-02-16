import React from 'react'
import home from './images/Home-DSG.svg'
import about from './images/About-DSG.svg'
import projects from './images/Projects-DSG.svg'
import education from './images/Education-DSG.svg'
import contact from './images/Contact-DSG.svg'

const nav = () => {
  return (
    <nav>
        <h1><a href="#null">Tyler Wertman Developments</a></h1>
            <div id="navLinksL">
              <img src="" alt="" />
                <a href="#home"><img src={home} alt="Home"/><span class="hidden">&nbsp;Home</span></a>&nbsp;
                <a href="#about"><img src={about} alt="About"/><span class="hidden">&nbsp;About</span></a>&nbsp;
                <a href="#projects"><img src={projects} alt="Projects"/><span class="hidden">&nbsp;Projects</span></a>&nbsp;
                <a href="#education"><img src={education} alt="Education"/><span class="hidden">&nbsp;Education</span></a>&nbsp;
                <a href="#contact"><img src={contact} alt="Contact"/><span class="hidden">&nbsp;Contact</span></a>&nbsp;
                <a href="#null" class="icon"><i class="fa fa-bars"></i></a>
            </div>
            <div id="navLinksS">
                <a href="#null" class="icon"><i class="fa fa-bars"></i></a>
            </div>
            <div id="navLinksSE" class="toggle">
                <a href="#home"><img src="./images/Home-DSG.svg" alt="Home"/></a>
                <a href="#about"><img src="./images/About-DSG.svg" alt="About"/></a>
                <a href="#projects"><img src="./images/Projects-DSG.svg" alt="Projects"/></a>
                <a href="#education"><img src="./images/Education-DSG.svg" alt="Education"/></a>
                <a href="#contact"><img src="./images/Contact-DSG.svg" alt="Contact"/></a>
            </div>
    </nav>
  )
}

export default nav