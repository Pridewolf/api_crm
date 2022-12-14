import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url =`${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        // Esto es lo que se guarda en el STATE
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);

  return  (
    cargando ? <Spinner/>  :
     Object.keys(cliente).length === 0 ?
    <p>No hay Resultados</p>
   : (
    <div>
       
        <>
          <h1 className="font-black text-4xl text-blue-900 text-center">
            Ver Cliente : {cliente.nombre}
          </h1>
          <p className="mt-3">Informacion del Cliente</p>
          {cliente.nombre && (
            <p className="text-gray-700  text-4xl mt-10">
              <span className="text-gray-500 font-bold uppercase">
                Cliente:{" "}
              </span>
              {cliente.nombre}
            </p>
          )}
          {cliente.empresa && (
            <p className="text-gray-700  text-2xl mt-4">
              <span className="text-gray-500 font-bold uppercase">
                Empresa:{" "}
              </span>
              {cliente.empresa}
            </p>
          )}

          {cliente.email && (
            <p className="text-gray-700  text-2xl mt-4">
              <span className="text-gray-500 font-bold uppercase">Email: </span>
              {cliente.email}
            </p>
          )}
          {cliente.telefono && (
            <p className="text-gray-700  text-2xl mt-4">
              <span className="text-gray-500 font-bold uppercase">
                Telefono:{" "}
              </span>
              {cliente.telefono}
            </p>
          )}

          {cliente.notas && (
            <p className="text-gray-700  text-2xl mt-4">
              <span className="text-gray-500 font-bold uppercase">Notas: </span>
              {cliente.notas}
            </p>
          )}
        </>
      
    </div>
  ))
};

export default VerCliente;
