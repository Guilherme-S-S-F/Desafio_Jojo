import './App.css';
import { FormField } from './components/form-field';
import { FormCard } from './components/form-field-card';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Quiz Jojo's Stand</h1>
      <div className='form-area'>
        <FormCard question="teste de pergunta e tamanho do p no cardteste de pergunta e tamanho do p no cardteste de pergunta e tamanho do p no cardteste de pergunta e tamanho do p no card">
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
        </FormCard>

        <FormCard question="teste de pergunta e tamanho do p no card">
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
        </FormCard>

        <FormCard question="teste de pergunta e tamanho do p no card">
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
        </FormCard>

        <FormCard question="teste de pergunta e tamanho do p no card">
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
          <FormField text="teste" index="A"/>
        </FormCard>
      </div>

    </div>
  );
}

export default App;
