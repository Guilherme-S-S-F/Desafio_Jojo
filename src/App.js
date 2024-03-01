import './App.css';
import StandCard from './components/StandCard';
import { FormField } from './components/form-field';
import { ButtonResult, FormCard } from './components/form-field-card';
import { useState } from 'react';

function App() {
  let arrayInit = [0,0,0];
  const setArray = (index, value) => {
    valuesArray[index] = value;
    setvaluesArray(valuesArray)
  }

  
  
  const [valuesArray, setvaluesArray] = useState(arrayInit);

  return (
    <div className="App">
      <h1 className='title'>Quiz Jojo's Stand</h1>
      <div className='form-area'>
        <FormCard
          answers={["Azul.","Vermelho.","Branco.","Amarelo.","Roxo."]}
          question="Qual sua Cor favorita?"
          selected={(e) => {
            setArray(0, e)
            console.log(valuesArray)
          }}>
        </FormCard>

        <FormCard
          answers={["Velocidade.","Fogo.","Super Resistência.","Parar o tempo.","Clarividência."]}
          question="Escolha um poder:"
          selected={(e) => {
            setArray(1, e)
            console.log(valuesArray)
          }}>
        </FormCard>

        <FormCard
        answers={["Pizza","Massa","Croissant","Churrasco","Salada"]}
        question="Escolha um prato"
        selected={(e) => {
          setArray(2, e)
          console.log(valuesArray)
        }}>
        </FormCard>

        <ButtonResult array={valuesArray} />
        <div>
          
        </div>

      </div>

    </div>
  );
}

export default App;
