import './App.css';
import StandCard from './components/StandCard';
import { FormField } from './components/form-field';
import { FormCard } from './components/form-field-card';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Quiz Jojo's Stand</h1>
      <div className='form-area'>
        <FormCard answers={["1","2","3","4","5"]} question="teste de pergunta e tamanho do p no cardteste de pergunta e tamanho do p no cardteste de pergunta e tamanho do p no cardteste de pergunta e tamanho do p no card">
        </FormCard>

        <FormCard answers={["1","2","3","4","5"]} question="teste de pergunta e tamanho do p no card">
        </FormCard>

        <FormCard answers={["1","2","3","4","5"]} question="teste de pergunta e tamanho do p no card">
        </FormCard>

        <FormCard answers={["1","2","3","4","5"]} question="teste de pergunta e tamanho do p no card">
        </FormCard>
      </div>

    </div>
  );
}

export default App;
