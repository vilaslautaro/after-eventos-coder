import { useEffect, useState } from 'react';

export const ExampleForm = () => {
  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log('formulario enviado');
  };

  useEffect(() => {
    const mensaje = () => {
      console.log('Hola mundo');
    };

    window.addEventListener('mousemove', mensaje);

    return () => {
      window.removeEventListener('mousemove', mensaje);
    };
  }, []);

  /*   useEffect(() => {
    //creamos la funcion
    const interval = setInterval(() => {
      console.log('El nombre es: ' + name);
    }, 2000);

    // si no limpiamos el interval, en cada cambio que se vuelva a renderizar el componente
    //  se va a volver a crear un nuevo intervalo sin borrarse el anterior
    // return () => {
    //  clearInterval(interval);
    };
  }, [name]); */

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={e => setName(e.target.value)} />
        <button type="submit">Enviar formulario</button>
      </form>
      <p>{name}</p>
    </>
  );
};
