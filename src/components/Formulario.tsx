import { ChangeEvent, useState } from 'react'

export const Formulario = () => {

  const [formulario, setFormulario] = useState({
    email: '',
    nombre: ''
  });
  // handleChange recibe un evento como argumento, se desestructura del mismo su target
  // el evento que cambia cuando un input cambia es ChangeEvent pero si no se especifica, seria generico
  // y debemos especificarlo para que nos deje acceder a sus miembros, 
  // HTMLInputElement como tipo, para decir que eso es lo que esta cambiando
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    console.log(name, value);    
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" placeholder="email" onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input type="nombre" className="form-control" name="nombre" placeholder="nombre" onChange={handleChange}/>
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>    
  )
}
