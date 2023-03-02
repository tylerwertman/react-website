import React from 'react'
import wtp from './images/WTP.mov'
import axios from 'axios'
import { useEffect, useRef } from 'react'

const WTP = () => {
    useEffect(() => {
        const rng = Math.floor(Math.random() * 152)
        console.log(rng)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rng}`)
            .then(response => {
                console.log(response.data.sprites)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // let currentPoke

    const newPoke = () => {
        console.log("running newPoke");
    //     const rng = Math.floor(Math.random() * 152);
    //     const pokeImg = document.querySelector(".js img");
    //     const pokeText = document.querySelector(".js p");
    //     pokeText.innerText = "Who's that Pokemon?"
    //     pokeImg.classList.add("sillhouette")
    //     pokeText.style.textTransform = "";
    //     // console.log(pokeData);
    //     // pokeImg.src = pokeData.sprites.front_default
    //     currentPoke = rng;
    //     console.log(currentPoke);
    //     return currentPoke;
    }

    const revealPoke = () => {
        console.log("running revealPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     const pokeText = document.querySelector(".js p");
    //     pokeText.innerText = `It's ${pokeData.name}!`;
    //     // console.log(pokeImg.classList);
    //     pokeImg.classList.remove("sillhouette")
    //     pokeText.style.textTransform = "Capitalize";
    }

    const shinyPoke = () => {
        console.log("running shinyPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_default) {
    //         pokeImg.src = pokeData.sprites.front_shiny;
    //     } else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_default) {
    //         pokeImg.src = pokeData.sprites.back_shiny;
    //     }
    }

    const defaultPoke = () => {
        console.log("running defaultPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_shiny) {
    //         pokeImg.src = pokeData.sprites.front_default;
    //     } else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_shiny) {
    //         pokeImg.src = pokeData.sprites.back_default;
    //     }
    }

    const frontPoke = () => {
        console.log("running frontPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_default) {
    //         pokeImg.src = pokeData.sprites.front_default;
    //     } else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_shiny) {
    //         pokeImg.src = pokeData.sprites.front_shiny
    //     }
    }

    const backPoke = () => {
        console.log("running backPoke");
    //     let currentPoke = { newPoke };
    //     const response = fetch("https://pokeapi.co/api/v2/pokemon/" + currentPoke);
    //     const pokeData = response.json();
    //     const pokeImg = document.querySelector(".js img");
    //     if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_default) {
    //         pokeImg.src = pokeData.sprites.back_default;
    //     } else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_shiny) {
    //         pokeImg.src = pokeData.sprites.back_shiny
    //     }
    }

    return (
        <div>
            <h4>Who's That Pokemon?</h4>
            <br />
            <div className="gameboy">
                <div className="gameboyScr">
                    <div className="js" >
                        <img className="sillhouette" alt="sillhouette" />
                        <p id="textBox">Who's that Pokemon?</p>
                    </div>
                    <br />
                    <p>GAMEBOY <span className="C">C</span><span className="O">O</span><span className="L">L</span><span className="O2">O</span><span className="R">R</span></p>
                </div>
                <span className="nintendo">Nintendo</span>
                <div className="gameboyCtrl">
                    <div className="dpad">
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={shinyPoke}>^</div>
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={frontPoke}>&lt;</div>
                        <div className="sqBtn dot">•</div>
                        <div className="sqBtn activeBtn" onClick={backPoke}>&gt;</div>
                        <div className="sqBtn"></div>
                        <div className="sqBtn activeBtn" onClick={defaultPoke}>v</div>
                        <div className="sqBtn"></div>
                    </div>
                    <div className="AB">
                        <div className="cirBtn" onClick={newPoke}>B</div>
                        <div className="cirBtn A" onClick={revealPoke}>A</div>
                    </div>
                </div>
                <div className="ss">
                    <div className="start">
                        <div className="ssBtn"></div>
                        <div className="ssText">Start</div>
                    </div>
                    <div className="select">
                        <div className="ssBtn"></div>
                        <div className="ssText">Select</div>
                    </div>
                </div>
            </div>
            <video controls="controls" width="300">
                <source src={wtp} />
                {/* <source src={WTP}/> */}
            </video>
        </div>
    )
}

export default WTP