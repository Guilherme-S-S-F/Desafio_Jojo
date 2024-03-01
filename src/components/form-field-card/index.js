import { FormField } from '../form-field';
import { useState } from 'react';
import './style.css';

function FormCard(props) {

    const [selected, setSelected] = useState('');
    let falses = [false,false,false,false,false]

    const [states, setStates] = useState(falses)
    let valor = "";
    const selectField = () => {
        props.selected(valor);
    }

    const onSelected = (element) => {
        setSelected(element);
        cleanSelection();
        let num = Number(element) -1;
        states[num] = true;
        setStates(states);
        

        if (num === 0) {
            valor = "A"
        } else if (num === 1) {
            valor = "B"
        } else if (num === 2) {
            valor = "C" 
        } else if (num === 3) {
            valor = "D"
        } else if (num === 4) {
            valor = "E"
        }
        console.log(valor)
        //console.log(states);
    }

    const cleanSelection = () => {
        for(let i in states) {
            states[i] = false;
            setStates(states)
        }
    }

    return(
        <div className="card" onClick={selectField}>
            <p className="question">{props.question}</p>

            <div className="fields">
                <FormField selected={e => onSelected(e)} text={props.answers[0]} check={states[0]} index="1"/>
                <FormField selected={e => onSelected(e)} text={props.answers[1]} check={states[1]} index="2"/>
                <FormField selected={e => onSelected(e)} text={props.answers[2]} check={states[2]} index="3"/>
                <FormField selected={e => onSelected(e)} text={props.answers[3]} check={states[3]} index="4"/>
                <FormField selected={e => onSelected(e)} text={props.answers[4]} check={states[4]} index="5"/>
            </div>
        </div>
    );
}

function ButtonResult(props) {

    const [cardImage, setCardImage] = useState();

    function Calculate() {
        //calcula qual foi o elemento que mais se repetiu e armazena na variavel maxEl
        if(props.array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = props.array[0], maxCount = 1;
        for(var i = 0; i < props.array.length; i++){
            var el = props.array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
    
        console.log(`O elemento mais repetido foi ${maxEl}`)
        props.onResult(maxEl);
    }

    return(
        <button className='btn-result' onClick={Calculate}>Ver resultado</button>
    );
}


export {FormCard, ButtonResult};