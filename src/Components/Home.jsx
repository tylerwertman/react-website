import React from 'react'
import me from './images/me.png'
import linkedin from './images/Linkedin-fill-DSG.svg'
import github from './images/Github-fill-DSG.svg'
import file from './images/File-fill-DSG.svg'

const Home = () => {
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
                    <a href="https://www.linkedin.com/in/tyler-wertman-8506237b/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin"/></a>
                    <a href="https://github.com/tylerwertman" target="_blank" rel="noreferrer"><img src={github} alt="Github"/></a>
                    <a href="./resume.pdf" target="_blank" download="Tyler Wertman Resume"><img src={file} alt="File"/></a>
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