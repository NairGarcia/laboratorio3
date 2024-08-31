import Table from './components/Table';

const App = () => {
  
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
  const promedioIngreso = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Tabla de Ingresos Netos</h1>
      <Table data={netIncomes} />
      <p>Promedio de ingreso neto: {promedioIngreso.toFixed(2)}</p>
    </div>
  );
};

export default App;