import { FormField } from '../form-field';
import { useState } from 'react';
import { letterIndexToNumber } from "../Utils";
import './style.css';
import { Link } from 'react-router-dom';

function FormCard(props) {

    const [selected, setSelected] = useState('');
    let falses = [false,false,false,false,false]

    const [states, setStates] = useState(falses)
    let valor = "";
    const selectField = () => {
        props.selected(valor);
    }

    const onSelected = (element) => {
        element = letterIndexToNumber(element);
        setSelected(element);
        cleanSelection();
        let num = element;
        states[num] = true;
        setStates(states);
        console.log(states);
        valor = element;
        
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
                <FormField selected={e => onSelected(e)} text={props.answers[0]} check={states[0]} index="A"/>
                <FormField selected={e => onSelected(e)} text={props.answers[1]} check={states[1]} index="B"/>
                <FormField selected={e => onSelected(e)} text={props.answers[2]} check={states[2]} index="C"/>
                <FormField selected={e => onSelected(e)} text={props.answers[3]} check={states[3]} index="D"/>
                <FormField selected={e => onSelected(e)} text={props.answers[4]} check={states[4]} index="E"/>
            </div>
        </div>
    );
}

function ButtonResult(props) {
    const [stand, setStand] = useState('');

    function Calculate() {
        //calcula qual foi o elemento que mais se repetiu e armazena na variavel maxEl
        if(props.array.length == 0)
            alert("array vazio");
    
        var modeMap = {};
        var maxEl = props.array[0];
        var maxCount = 1;
    
        for(var i = 0; i < props.array.length; i++) {
            var el = props.array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
    
            if(modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        
        if (maxCount === 1) {
            maxEl = null;
            console.log("nenhum elemento se repetiu")
        }
        console.log(maxEl); 
        setStand(maxEl)
    }
    let result = "/result/" + stand;
    return(
        <Link to={result}><button className='btn-result' onClick={Calculate}>Ver resultado</button></Link>
    );
}


export {FormCard, ButtonResult};