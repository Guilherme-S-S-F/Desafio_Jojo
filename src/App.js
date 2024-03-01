import './App.css';
import StandCard from './components/StandCard';
import { ButtonResult, FormCard } from './components/form-field-card';
import { useState } from 'react';

function App() {
  let arrayInit = [0,0,0];
  const setArray = (index, value) => {
    valuesArray[index] = value;
    setvaluesArray(valuesArray)
  }

  const stands = [{"name":"Star Platinum", "img":"star-platinum.jpg"},
  {"name":"Mago Vermelho", "img":"magicians-red.jpg"},
  {"name":"Silver Chariot", "img":"silver-chariot.jpg"},
  {"name":"The World", "img":"the-world.jpg"},
  {"name":"Hermit Purple", "img":"hermit-purple.jpg"},
  {"name":"Crazy Diamond", "img":"crazy-diamond.jpg"}];

  const [result, setResult] = useState(-1);
  
  const [valuesArray, setvaluesArray] = useState(arrayInit);


  if(!(result === -1)) {

    return (
      <div className="App">
        <h1 className='title'>Seu Stand:</h1>
        <div className='center'><StandCard name={stands[result].name} image={stands[result].img} /></div>        
      </div>
    );
  }

  const onFinished = (val) => {
    switch(val) {
      case "A":
        setResult(0);
        break;
      case "B":
        setResult(1);
        break;
      case "C":
        setResult(2);
        break;
      case "D":
        setResult(3);
        break;
      case "E":
        setResult(4);
        break;
      default:
        setResult(5);
        break;
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

        <ButtonResult onResult={e => onFinished(e)} array={valuesArray} />
        <div>
          
        </div>

      </div>

    </div>
  );
}

export default App;
