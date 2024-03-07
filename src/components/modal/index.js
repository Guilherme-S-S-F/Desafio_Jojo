import './style.css';

export function Modal(props){

    return(
        <div id="modal" className={props.state? 'see': 'hide'}>
            <h3>Atenção</h3>
            <p>Preencha todos os campos!</p>
            <button className='modal-button' onClick={props.exit}>OK</button>
        </div>
    );
}