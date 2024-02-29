import './StandCard.css';

function StandCard(props) {
    let path = "./imgs/Stands/" + props.image;
    return (
        <section className="stand-card">
            <div className="image">
                <img src={path}></img>
            </div>
            <div className="name">
                <h2>{props.name}</h2>
            </div>
        </section>
    );
}

export default StandCard; 