import { FormField } from '../form-field';
import { useState } from 'react';
import './style.css';

export function FormCard(props) {

    const [selected, setSelected] = useState('');
    let falses = [false,false,false,false,false]

    const [states, setStates] = useState(falses)

    

    const onSelected = (element) => {
        setSelected(element);
        cleanSelection();
        let num = Number(element) -1;
        states[num] = true;
        setStates(states);
        console.log(states);
    }

    const cleanSelection = () => {
        for(let i in states) {
            states[i] = false;
            setStates(states)
        }
    }

    return(
        <div className="card">
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