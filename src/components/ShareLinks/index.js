import './ShareLinks.css';

function ShareLinks(props) {
    let site = "http://localhost:3000/index.html?stand="+ props.stand;
    let facebook = "https://www.facebook.com/sharer/sharer.php?u=" + site;
    let whatsapp = "https://api.whatsapp.com/send?text=" + site;
    let test = site;
    return (
        <section className='share-container'>
            <div><a href={facebook}><img src='../imgs/Icons/square-facebook.svg' alt='facebook logo' /></a></div>
            <div><a href={test}><img src='../imgs/Icons/square-instagram.svg' alt='instagram logo' /></a></div>
            <div><a href={whatsapp}><img src='../imgs/Icons/square-whatsapp.svg' alt='whatsapp logo' /></a></div>
            
        </section>
    );
}

export default ShareLinks;