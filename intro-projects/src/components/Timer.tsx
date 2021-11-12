import { useEffect, useRef, useState } from "react"

type TimerArgs = {
  milisegundos: number,
  segundos?: number // OPCIONAL
}

export const Timer = ({milisegundos}: TimerArgs) => {

  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // el tener milisegundos como arreglo de dependencia, cada vez que se cambia ese valor
    // se reinicializa otro intervalo, haciendo modificaciones erraticas en el estado
    // para evitarlo, se necesita mantener la referencia al setInterval y limpiarlo
    ref.current && clearInterval(ref.current); // chequeo si ref.current existe, porque en primer momento es undefined
    ref.current = setInterval(() => setSegundos(segs => segs+1), milisegundos);       
  }, [milisegundos])

  return (
    <>
      <h4>Timer: <small>{segundos}</small></h4>
    </>
  )
}
