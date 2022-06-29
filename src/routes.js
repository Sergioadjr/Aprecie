import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import DataGridColaborador from './components/DataGridColaborador';
import FormularioCadastroColaborador from './components/FormularioCadastroColaborador';
import token from './data/token.json';

export default function AprecieRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<DataGridColaborador />} />
        <Route path="/cadastro" element ={<FormularioCadastroColaborador token={token}/>} />
      </Routes>
    </Router>
  );
}