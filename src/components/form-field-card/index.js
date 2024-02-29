import { FormField } from '../form-field';
import './style.css';

export function FormCard(props) {

    


    return(
        <div className="card">
            <p className="question">{props.question}</p>

            <div className="fields">
                <FormField text={props.answers[0]} index="A"/>
                <FormField text={props.answers[1]} index="B"/>
                <FormField text={props.answers[2]} index="C"/>
                <FormField text={props.answers[3]} index="D"/>
                <FormField text={props.answers[4]} index="E"/>
            </div>
        </div>
    );
}