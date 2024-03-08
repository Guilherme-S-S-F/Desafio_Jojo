import './App.css';
import StandCard from './components/StandCard';
import { ButtonResult, FormCard } from './components/form-field-card';
import { useState } from 'react';
import { Modal } from './components/modal';

function App() {
  let arrayInit = ['', '', '', '', ''];
  const setArray = (index, value) => {
    if(value === '') {
      //caso o valor retorne vazio (quando clica dentro do container e ativa o onclick) ele não substitui
    } else {
      valuesArray[index] = value;
      setvaluesArray(valuesArray)
    }
  }

  const [result, setResult] = useState(-1);
  
  const [valuesArray, setvaluesArray] = useState(arrayInit);

  const[modal, setModal] = useState(false);

  function enableModal(){
    setModal(true);
  }

  function disableModal() {
    setModal(false)
  }

  const onFinished = (val) => {
    if(valuesArray.indexOf('') >=0){
      enableModal()
      
    } else {
      setResult(val);
      
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Quiz Jojo's Stand</h1>
      <div className='form-area'>
        <FormCard
          answers={["Azul.","Vermelho.","Branco.","Amarelo.","Roxo."]}
          question="Qual sua Cor favorita?"
          selected={(e) => {
            setArray(0, e)
          }}>
        </FormCard>
  
        <FormCard
          answers={["Velocidade.","Fogo.","Super Resistência.","Parar o tempo.","Clarividência."]}
          question="Escolha um poder:"
          selected={(e) => {
            setArray(1, e)
          }}>
        </FormCard>
  
        <FormCard
          answers={["Pizza","Massa","Croissant","Churrasco","Salada"]}
          question="Escolha um prato"
          selected={(e) => {
            setArray(2, e)
          }}>
        </FormCard>
  
        <FormCard
        answers={["Verão","Primavera","Outono","Inverno","Todas"]}
        question="Escolha uma estação"
        selected={(e) => {
          setArray(3, e)
        }}>
        </FormCard>
  
        <FormCard
        answers={["Calma","Estressada","Ansiosa","Quieta","Falante"]}
        question="Você se considera uma pessoa mais:"
        selected={(e) => {
          setArray(4, e)
        }}>
        </FormCard>
        <Modal exit={disableModal} state={modal}/>
        <ButtonResult onResult={e => onFinished(e)} array={valuesArray} />          
  
      </div>
  
    </div>
  );
}

export default App;
