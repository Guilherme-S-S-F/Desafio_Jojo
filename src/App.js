import './App.css';
import { FormField } from './components/form-field';
import { FormCard } from './components/form-field-card';

function App() {
  return (
    <div className="App">
      <FormCard>
      <FormField texto="teste de alternativa" indice="A" />
      <FormField texto="outro de alternativa" indice="B" />
      <FormField texto="ultimo de alternativa" indice="C" />
      </FormCard>
    </div>
  );
}

export default App;
