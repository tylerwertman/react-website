import React from 'react'
import wtp from './images/WTP.mov'

const Projects = () => {
    return (
        <div class="section" id="projects">
                <h2>Projects</h2>
                <div class="content">
                    <h4>Who's That Pokemon?</h4><br/>
                    <div class="gameboy">
                        <div class="gameboyScr">
                            <div class="js" >
                                <img class = "sillhouette" alt = "sillhouette"/>
                                <p id="textBox">Who's that Pokemon?</p>
                            </div>
                            <br/>
                            <p>GAMEBOY <span class="C">C</span><span class="O">O</span><span class="L">L</span><span class="O2">O</span><span class="R">R</span></p>
                        </div>  
                        <span class="nintendo">Nintendo</span>
                        <div class="gameboyCtrl">
                            <div class="dpad">
                                <div class="sqBtn"></div>
                                <div class="sqBtn activeBtn" onClick="shinyPoke()">^</div>
                                <div class="sqBtn"></div>
                                <div class="sqBtn activeBtn" onClick="frontPoke()">&lt;</div>
                                <div class="sqBtn dot">•</div>
                                <div class="sqBtn activeBtn" onClick="backPoke()">&gt;</div>
                                <div class="sqBtn"></div>
                                <div class="sqBtn activeBtn" onClick="defaultPoke()">v</div>
                                <div class="sqBtn"></div>
                            </div>
                            <div class="AB">
                                <div class="cirBtn" onClick="newPoke()">B</div>
                                <div class="cirBtn A" onClick="revealPoke()">A</div>
                            </div>
                        </div>
                        <div class="ss">
                            <div class="start">
                                <div class="ssBtn"></div>
                                <div class="ssText">Start</div>
                            </div>
                            <div class="select">
                                <div class="ssBtn"></div>
                                <div class="ssText">Select</div>
                            </div>
                        </div>
                    </div>
                    <video controls="controls" width="300">
                        <source src={wtp}/>
                        {/* <source src={WTP}/> */}
                    </video>
                </div>
            </div>
    )
}

export default Projects