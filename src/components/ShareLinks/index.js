import { getDomain } from '../Utils';
import './style.css';

function ShareLinks(props) {
    let site = "Olhe meu resultado no quiz de Jojo!!! " + getDomain() + props.stand;
    let facebook = "https://www.facebook.com/sharer/sharer.php?u=" + site;
    let whatsapp = "https://api.whatsapp.com/send?text=" + site;
    let twitter = "https://twitter.com/intent/tweet?url=" +site;
    return (
        <div className='share'>
            <p>Compartilhe seu resultado nas redes sociais!</p>
            <div className='share-container'>
                <div><a href={facebook}><img src='../imgs/Icons/square-facebook.svg' alt='facebook logo' /></a></div>
                <div><a href={twitter}><img src='../imgs/Icons/square-twitter.svg' alt='twitter logo' /></a></div>
                <div><a href={whatsapp}><img src='../imgs/Icons/square-whatsapp.svg' alt='whatsapp logo' /></a></div>
            </div>
        </div>
    );
}

export default ShareLinks;