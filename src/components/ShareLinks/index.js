import './ShareLinks.css';

function ShareLinks(props) {
    let site = "Olhe meu resultado no quiz de Jojo!!! http://localhost:3000/result/"+ props.stand;
    let facebook = "https://www.facebook.com/sharer/sharer.php?u=" + site;
    let whatsapp = "https://api.whatsapp.com/send?text=" + site;
    let twitter = "https://twitter.com/intent/tweet?url=" +site;
    return (
        <section className='share-container'>
            <div><a href={facebook}><img src='../imgs/Icons/square-facebook.svg' alt='facebook logo' /></a></div>
            <div><a href={twitter}><img src='../imgs/Icons/square-twitter.svg' alt='twitter logo' /></a></div>
            <div><a href={whatsapp}><img src='../imgs/Icons/square-whatsapp.svg' alt='whatsapp logo' /></a></div>
            
        </section>
    );
}

export default ShareLinks;