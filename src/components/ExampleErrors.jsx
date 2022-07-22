import { useEffect, useState } from 'react';
import { colors } from '../constants/colors';

const ExampleErrors = ({ numbers }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const numberData = () => {
      setData(numbers);
    };

    return () => numberData();
  }, []);

  return (
    <>
      <div className="container">
        <p>Example</p>
        <h1>Errors</h1>
        {data.length > 0 &&
          data.map(number => {
            return <p>{number}</p>;
          })}
      </div>
      <div>Solucionando errores</div>
      <h2>Colores</h2>
      <p>Primario: {colors.primary}</p>
      <p>Secundario: {colors.secondary}</p>
    </>
  );
};

export default ExampleErrors;
