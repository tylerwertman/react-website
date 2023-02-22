import React from 'react'
import me from './images/me.png'
import linkedin from './images/Linkedin-fill-DSG.svg'
import github from './images/Github-fill-DSG.svg'
import file from './images/File-fill-DSG.svg'
import linkedinH from './images/Linkedin-fill-SG.svg'
import githubH from './images/Github-fill-SG.svg'
import fileH from './images/File-fill-SG.svg'

const Home = () => {

    const hover = (e) => {
        console.log("Hover running");
        console.log(e.target)
        e.stopPropogation()
        const img = e.target
        if (img.alt===('linkedin')&&img.className===('')) {
            img.className=('shadow hover')
            img.src = `${linkedinH}`
            // img.src = "{{img.alt}+H}"
        }else if (img.alt===('linkedin')&&img.className===('shadow hover')){
            // console.log(img.src)
            img.className=('')
            img.src = `${linkedin}`
        }else if (img.alt===('github')&&img.className===('')) {
            img.className=('shadow hover')
            img.src = `${githubH}`
            // img.src = "{{img.alt}+H}"
        }else if (img.alt===('github')&&img.className===('shadow hover')){
            // console.log(img.src)
            img.className=('')
            img.src = `${github}`
        }else if (img.alt===('file')&&img.className===('')) {
            img.className=('shadow hover')
            img.src = `${fileH}`
            // img.src = "{{img.alt}+H}"
        }else if (img.alt===('file')&&img.className===('shadow hover')){
            // console.log(img.src)
            img.className=('')
            img.src = `${file}`
        }
    }
    return (
        <div class="section" id="home">
            <div id="introOne">
                <img src={me} alt="tyler, website owner"/>
                <h2>Tyler Wertman</h2><br/>
                <h4>Developer & Entrepreneur</h4>
            </div>
            <div id="introTwo">
                <br/><h2>Hello, I am Tyler and I am a full-stack web developer</h2><br/>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/tyler-wertman/" target="_blank" rel="noreferrer"><img className="" onMouseOver={hover} onMouseOut={hover} src={linkedin} alt="linkedin"/></a>
                    <a href="https://github.com/tylerwertman" target="_blank" rel="noreferrer"><img className="" onMouseOver={hover} onMouseOut={hover} src={github} alt="github"/></a>
                    <a href="./resume.pdf" target="_blank" download="Tyler Wertman Resume"><img className="" onMouseOver={hover} onMouseOut={hover} src={file} alt="file"/></a>
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