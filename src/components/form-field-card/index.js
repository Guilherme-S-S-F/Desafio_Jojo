import './style.css';

export function FormCard(props) {
    return(
        <div className="card">
            <p className="question">{props.question}</p>

            <div className="fields">
                {props.children}
            </div>
        </div>
    );
}