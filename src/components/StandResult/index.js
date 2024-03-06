import StandCard from '../StandCard';
import {Link, useParams} from 'react-router-dom'
import { useState } from 'react';
import './StandResult.css';
import ShareLinks from '../ShareLinks';

export function StandResult() {
    const stands = [{name:"Star Platinum", img:"star-platinum.jpg"},
    {name:"Mago Vermelho", img:"magicians-red.jpg"},
    {name:"Silver Chariot", img:"silver-chariot.jpg"},
    {name:"The World", img:"the-world.jpg"},
    {name:"Hermit Purple", img:"hermit-purple.jpg"},
    {name:"Crazy Diamond", img:"crazy-diamond.jpg"}];

    let result = useParams()['stand'];

    return(
        <div className="Result">
        <div className=''>
          <h1 className='title'>Seu Stand:</h1>
          <div className='center'><StandCard name= {stands[result].name} image= {stands[result].img}/></div>
        </div>
        <div>
          <Link to={"/"}><button className='button-restart' >REFAZER TESTE</button></Link>
        </div>
        <ShareLinks stand={result}/>
      </div>
        
    );
}