import { ChangeEvent, useState } from "react";

//export function useForm<T>(initState: T){
  // T extends Object
  // T extends Array
  // ...
export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);
  // handleChange recibe un evento como argumento, se desestructura del mismo su target
  // el evento que cambia cuando un input cambia es ChangeEvent pero si no se especifica, seria generico
  // y debemos especificarlo para que nos deje acceder a sus miembros, 
  // HTMLInputElement como tipo, para decir que eso es lo que esta cambiando
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    //console.log(name, value);    
    setFormulario({
      ...formulario,
      [name]: value
    });
  }
  return { formulario, handleChange }
}