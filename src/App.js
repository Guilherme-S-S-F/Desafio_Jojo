import './App.css';
import StandCard from './components/StandCard';
import { FormField } from './components/form-field';
import { FormCard } from './components/form-field-card';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Quiz Jojo's Stand</h1>
      <div className='form-area'>
        <FormCard answers={["Azul.","Vermelho.","Branco.","Amarelo.","Roxo."]} question="Qual sua Cor favorita?">
        </FormCard>

        <FormCard answers={["Velocidade.","Fogo.","Super Resistência.","Parar o tempo.","Clarividência."]} question="Escolha um poder:">
        </FormCard>

        <FormCard answers={["Pizza","Massa","Croissant","Churrasco","Salada"]} question="Escolha um prato">
        </FormCard>

      </div>

    </div>
  );
}

export default App;
