import StandCard from '../StandCard';
import {Link, useParams} from 'react-router-dom'
import './style.css';
import ShareLinks from '../ShareLinks';
import useSound from 'use-sound';
import stands from '../data/arrayStends';

export function StandResult() {
    let result = useParams()['stand'];

    const sound = "sounds/" + stands[result].sound;

    const [play, {stop}] = useSound(sound, {volume: 0.1});

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