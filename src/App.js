import './App.css';
import StandCard from './components/StandCard';
import { ButtonResult, FormCard } from './components/form-field-card';
import { useState } from 'react';
import { Modal } from './components/modal';


function App() {
  let arrayInit = ['', '', '', '', ''];
  const setArray = (index, value) => {
    if(value === '') {

    } else {
      valuesArray[index] = value;
      setvaluesArray(valuesArray)
    }
  }

  const stands = [{name:"Star Platinum", img:"star-platinum.jpg"},
  {name:"Mago Vermelho", img:"magicians-red.jpg"},
  {name:"Silver Chariot", img:"silver-chariot.jpg"},
  {name:"The World", img:"the-world.jpg"},
  {name:"Hermit Purple", img:"hermit-purple.jpg"},
  {name:"Crazy Diamond", img:"crazy-diamond.jpg"}];

  const [result, setResult] = useState(-1);
  
  const [valuesArray, setvaluesArray] = useState(arrayInit);

  const[modal, setModal] = useState(false);

  const[restarPage,setRestartPage] = useState(false);

  function enableModal(){
    setModal(true);
  }

  function disableModal() {
    setModal(false)
  }

  function resetArray(){
    setvaluesArray(['','','','','']);
    console.log(valuesArray)
    setResult(-1)
  }

  const onFinished = (val) => {
    if(valuesArray.indexOf('') >=0){
      enableModal()
      
    } else {
      setResult(val);
      if(val == null) {
        setResult(5)
      }
    }
  }

  if(!(result === -1)) {
    return (
      <div className="App">
        <div className=''>
          <h1 className='title'>Seu Stand:</h1>
          <div className='center'><StandCard name={stands[result].name} image={stands[result].img} /></div>
        </div>
        <div>
          <button className='button-restart' onClick={resetArray}>REFAZER TESTE</button>
        </div>
        
      </div>
    );
  } else {
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
  
          <FormCard
          answers={["Verão","Primavera","Outono","Inverno","Todas"]}
          question="Escolha uma estação"
          selected={(e) => {
            setArray(3, e)
            console.log(valuesArray)
          }}>
          </FormCard>
  
          <FormCard
          answers={["Calma","Estressada","Ansiosa","Quieta","Falante"]}
          question="Você se considera uma pessoa mais:"
          selected={(e) => {
            setArray(4, e)
            console.log(valuesArray)
          }}>
          </FormCard>
          <Modal exit={disableModal} state={modal}/>
          <ButtonResult onResult={e => onFinished(e)} array={valuesArray} />
          
  
        </div>
  
      </div>
    );
  }

 
  

 
}

export default App;
