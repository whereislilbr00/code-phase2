import './App.css';
import Table from './components/Table';
import Row from './components/Row';
import TransactionForm from './components/Transactionform';

function App() {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">THE BANK OF FLATIRON</a>
  </div>
</nav>
     <Table/>
    </>
  );
}

export default App;
