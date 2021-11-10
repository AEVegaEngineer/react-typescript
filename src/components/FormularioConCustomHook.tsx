//import { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioConCustomHook = () => {

  // const [formulario, setFormulario] = useState({
  //   email: '',
  //   nombre: ''
  // });
  // // handleChange recibe un evento como argumento, se desestructura del mismo su target
  // // el evento que cambia cuando un input cambia es ChangeEvent pero si no se especifica, seria generico
  // // y debemos especificarlo para que nos deje acceder a sus miembros, 
  // // HTMLInputElement como tipo, para decir que eso es lo que esta cambiando
  // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = target;
  //   console.log(name, value);    
  //   setFormulario({
  //     ...formulario,
  //     [name]: value
  //   });
  // }

  //custom hook

  interface FormData {
    email: string;
    nombre: string;
    edad: number;
  }

  const {formulario, handleChange} = useForm<FormData>({
    email: 'test@test.com',
    nombre: 'name',
    edad: 21
  });
  const { email, nombre, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" placeholder="email" value={email} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input type="nombre" className="form-control" name="nombre" placeholder="nombre" value={nombre} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">Edad:</label>
        <input type="edad" className="form-control" name="edad" placeholder="edad" value={edad} onChange={handleChange}/>
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>    
  )
}
