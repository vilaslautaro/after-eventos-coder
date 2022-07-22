import { useEffect } from 'react';

const ExampleErrors = ({numbers}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const numberData = () => {
      setData(numbers);
    };

    return () => numberData();
  }, []);

  return (
    <div class="container">
      <p>Example</p>
      <h1>Errors</h1>
      {data.lenght < 0 && data.map((number) => {
        <p>number</p>
      })}
    </div>
    <div>Solucionando errores</div>
    <h2>Colores</h2>
    <p>Primario: {colors.primary}</p>
    <p>Secundario: {colors.secondary}</p>
  );
};

export default ExampleErrors;

