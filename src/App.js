import './App.css';
import Table from './components/Table';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Search from './components/Search';
import TransactionForm from './components/Transactionform';

function App() {
  return (
    <>
    <Navbar/>
    <Search />
    <Form />
     <Table/>
    </>
  );
}

export default App;
