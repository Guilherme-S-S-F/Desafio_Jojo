import StandCard from '../StandCard';
import {useParams} from 'react-router-dom'
import './StandResult.css';

export function StandResult() {
    const stands = [{name:"Star Platinum", img:"star-platinum.jpg"},
    {name:"Mago Vermelho", img:"magicians-red.jpg"},
    {name:"Silver Chariot", img:"silver-chariot.jpg"},
    {name:"The World", img:"the-world.jpg"},
    {name:"Hermit Purple", img:"hermit-purple.jpg"},
    {name:"Crazy Diamond", img:"crazy-diamond.jpg"}];

    let result = useParams()['stand'];

    return(
        <StandCard name= {stands[result].name} image= {stands[result].img}/>
    );
}