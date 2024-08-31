import PropTypes from "prop-types";

const Table = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Empresas</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string.isRequired,
        income: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default Table;