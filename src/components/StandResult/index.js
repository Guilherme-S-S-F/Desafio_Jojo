import StandCard from '../StandCard';
import {Link, useParams} from 'react-router-dom'
import { useState } from 'react';
import './style.css';
import ShareLinks from '../ShareLinks';
import useSound from 'use-sound';

export function StandResult() {
    const stands = [
      {name:"Star Platinum", img:"star-platinum.jpg", sound: "stand_pround.mp3"},
      {name:"Mago Vermelho", img:"magicians-red.jpg", sound: "bloody_stream.mp3"},
      {name:"Silver Chariot", img:"silver-chariot.jpg", sound: "incontrollabile.mp3"},
      {name:"The World", img:"the-world.jpg", sound: "stardust_crusaders.mp3"},
      {name:"Hermit Purple", img:"hermit-purple.jpg", sound: "sono_chino_sadame.mp3"},
      {name:"Crazy Diamond", img:"crazy-diamond.jpg", sound: "crazy_noisy_bizarre_town.mp3"}
    ];
    let result = useParams()['stand'];

    const sound = "../../sounds/" + stands[result].sound;

    const [play, {stop}] = useSound(sound, {volume: 0.05});

    const handleStop = () => {
      stop();
    };

    play()
    return(
      
      <div className="Result">
        <div className=''>
          <h1 className='title'>Seu Stand:</h1>
          <div className='center'><StandCard name= {stands[result].name} image= {stands[result].img}/></div>
        </div>
        <div>
          <Link to={"/"}><button className='button-restart' onClick={handleStop}>REFAZER TESTE</button></Link>
        </div>
        <ShareLinks stand={result}/>
      </div>
        
    );
}