import React from 'react'
import me from './images/me.png'
import linkedin from './images/Linkedin-fill-DSG.svg'
import github from './images/Github-fill-DSG.svg'
import file from './images/File-fill-DSG.svg'
import linkedinH from './images/Linkedin-fill-SG.svg'
import githubH from './images/Github-fill-SG.svg'
import fileH from './images/File-fill-SG.svg'

const Home = () => {

    const hover = (element) => {
        console.log("Hover running");
        // element.stopPropogation()
        // console.log(element.target.children[0].src)
        if (element.target.children[0].alt===('linkedin')&&element.target.className===('')) {
            element.target.className=('shadow hover')
            element.target.children[0].src = `${linkedinH}`
            // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
        }else if (element.target.children[0].alt===('linkedin')&&element.target.className===('shadow hover')){
            // console.log(element.target.children[0].src)
            element.target.className=('')
            element.target.children[0].src = `${linkedin}`
        }else if (element.target.children[0].alt===('github')&&element.target.className===('')) {
            element.target.className=('shadow hover')
            element.target.children[0].src = `${githubH}`
            // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
        }else if (element.target.children[0].alt===('github')&&element.target.className===('shadow hover')){
            // console.log(element.target.children[0].src)
            element.target.className=('')
            element.target.children[0].src = `${github}`
        }else if (element.target.children[0].alt===('file')&&element.target.className===('')) {
            element.target.className=('shadow hover')
            element.target.children[0].src = `${fileH}`
            // element.target.children[0].src = "{{element.target.children[0].alt}+H}"
        }else if (element.target.children[0].alt===('file')&&element.target.className===('shadow hover')){
            // console.log(element.target.children[0].src)
            element.target.className=('')
            element.target.children[0].src = `${file}`
        }
    }
    return (
        <div class="section" id="introZero">
            <div id="introOne">
                <img src={me} alt="tyler, website owner"/>
                <h2>Tyler Wertman</h2><br/>
                <h4>Developer & Entrepreneur</h4>
            </div>
            <div id="introTwo">
                <br/><h2>Hello, I am Tyler and I am a full-stack web developer</h2><br/>
                <div id="icons">
                    <a className="" onMouseOver={hover} onMouseOut={hover} href="https://www.linkedin.com/in/tyler-wertman/" target="_blank" rel="noreferrer"><img class="" src={linkedin} alt="linkedin"/></a>
                    <a className="" onMouseOver={hover} onMouseOut={hover} href="https://github.com/tylerwertman" target="_blank" rel="noreferrer"><img class="" src={github} alt="github"/></a>
                    <a className="" onMouseOver={hover} onMouseOut={hover} href="./resume.pdf" target="_blank" download="Tyler Wertman Resume"><img class="" src={file} alt="file"/></a>
                    {/* <a href="#" target="_blank"><img src="./images/Medium-fill-DSG.svg" alt="Medium"/></a> */}
                    {/* <a href="https://www.etsy.com/shop/TylersTechSpace" target="_blank"><img src="./images/Etsy-fill-DSG.svg" alt="Etsy"/></a> */}
                    {/* <a href="https://www.youtube.com/@synergystyles" target="_blank"><img src="./images/Youtube-fill-DSG.svg" alt="Youtube"/></a> */}
                    {/* <a href="#" target="_blank"><img src="./images/Spotify-fill-DSG.svg" alt="Spotify"/></a> */}
                    {/* <a href="https://ko-fi.com/tyler510" target="_blank"><img src="./images/Kofi-fill-DSG.svg" alt="Kofi"/></a> */}
                </div>
            </div>
        </div>
    )
}

export default Home