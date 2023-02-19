import React from 'react'
import wtp from './images/WTP.mov'

const WTP = () => {

    let currentPoke

    const newPoke = () => {
        console.log("running newPoke");
        const rng = Math.floor(Math.random() * 152);
        const response = fetch("https://pokeapi.co/api/v2/pokemon/"+rng);
        const pokeData = response.json();
        const pokeImg = document.querySelector(".js img");
        const pokeText = document.querySelector(".js p");
        pokeText.innerText = "Who's that Pokemon?"
        pokeImg.classList.add("sillhouette")
        pokeText.style.textTransform = "";
        // console.log(pokeData);
        pokeImg.src = pokeData.sprites.front_default
        currentPoke = rng;
        console.log(currentPoke);
        return currentPoke;
    }

    const revealPoke = () => {
        console.log("running revealPoke");
        let currentPoke = {newPoke};
        const response = fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
        const pokeData = response.json();
        const pokeImg = document.querySelector(".js img");
        const pokeText = document.querySelector(".js p");
        pokeText.innerText = `It's ${pokeData.name}!`;
        // console.log(pokeImg.classList);
        pokeImg.classList.remove("sillhouette")
        pokeText.style.textTransform = "Capitalize";
    }

    const shinyPoke = () => {
        console.log("running shinyPoke");
        let currentPoke = {newPoke};
        const response =  fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
        const pokeData =  response.json();
        const pokeImg = document.querySelector(".js img");
        if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_default) {
            pokeImg.src = pokeData.sprites.front_shiny;
        }else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_default) {
            pokeImg.src = pokeData.sprites.back_shiny;
        }
    }
    const defaultPoke = () => {
        console.log("running defaultPoke");
        let currentPoke = {newPoke};
        const response =  fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
        const pokeData =  response.json();
        const pokeImg = document.querySelector(".js img");
        if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_shiny) {
            pokeImg.src = pokeData.sprites.front_default;
        }else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_shiny) {
            pokeImg.src = pokeData.sprites.back_default;
        }
    }
    
    const frontPoke = () => {
        console.log("running frontPoke");
        let currentPoke = {newPoke};
        const response =  fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
        const pokeData =  response.json();
        const pokeImg = document.querySelector(".js img");
        if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_default) {
            pokeImg.src = pokeData.sprites.front_default;
        }else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.back_shiny){
            pokeImg.src = pokeData.sprites.front_shiny
        }
    }
    const backPoke = () => {
        console.log("running backPoke");
        let currentPoke = {newPoke};
        const response =  fetch("https://pokeapi.co/api/v2/pokemon/"+currentPoke);
        const pokeData =  response.json();
        const pokeImg = document.querySelector(".js img");
        if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_default) {
            pokeImg.src = pokeData.sprites.back_default;
        }else if (pokeImg.classList.length === 0 && pokeImg.src === pokeData.sprites.front_shiny){
            pokeImg.src = pokeData.sprites.back_shiny
        }
    }

    return (
        <div>
            <h4>Who's That Pokemon?</h4>
            <br/>
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
                        <div class="sqBtn activeBtn" onClick={shinyPoke}>^</div>
                        <div class="sqBtn"></div>
                        <div class="sqBtn activeBtn" onClick={frontPoke}>&lt;</div>
                        <div class="sqBtn dot">•</div>
                        <div class="sqBtn activeBtn" onClick={backPoke}>&gt;</div>
                        <div class="sqBtn"></div>
                        <div class="sqBtn activeBtn" onClick={defaultPoke}>v</div>
                        <div class="sqBtn"></div>
                    </div>
                    <div class="AB">
                        <div class="cirBtn" onClick={newPoke}>B</div>
                        <div class="cirBtn A" onClick={revealPoke}>A</div>
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
    )
}

export default WTP