import { useLocation, useNavigate } from "react-router-dom";

import { Alimento, nomesAlimentos, quantidadePorPessoas } from "../types";

import styles from "./ResultadoChurrasco.module.css";

type Resultado_Churrasco = {
  pessoas:number;
  alimentosSelecionados: Alimento[];
}

const ResultadoChurrasco = () => {

  const location = useLocation();
  const navegate = useNavigate();

  const state = location.state as Resultado_Churrasco;

  const reiniciar = () => {
    navegate("/");
  }

  const totalPorAlimewntos = state.alimentosSelecionados.reduce((acc, alimento) => {
      acc[alimento] = (quantidadePorPessoas[alimento] * state.pessoas) / 1000;
      return acc;    
    }, {} as Record<Alimento, number> 
  ) 

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Quantidade(s) para {state.pessoas} pessoa(s):</h2>

      {state.alimentosSelecionados.map((alimento) => (
        <p key={alimento} className={styles.alimentosDesc}>{nomesAlimentos[alimento]} (Kg): {totalPorAlimewntos[alimento]} </p>
      ))}

      <button className={styles.reiniciarButton} onClick={reiniciar}>Reiniciar</button>

    </div>
  )
}

export default ResultadoChurrasco