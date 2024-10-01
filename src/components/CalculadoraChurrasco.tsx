import { useNavigate } from "react-router-dom";

import { nomesAlimentos } from "../types";

import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

import styles from "./CalculadoraChurrasco.module.css";


const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number().min(1, "Número de pessoas é obrigatório!"),   
  selecaoAlimentos: Yup.array().of(Yup.string()).test("check-selecaoAlimentos","Selecione pelo menos 1 Alimento!", (array) => array !== null && array!.length > 0 )
})

const CalculadoraChurrasco = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>

      <Formik initialValues={{pessoas: 0, selecaoAlimentos: [] }} 
              onSubmit={(values) => { navigate("/resultado", { state: {
                  pessoas: values.pessoas, 
                  alimentosSelecionados: values.selecaoAlimentos 
                }}); 
              }}
              validationSchema={esquemaValidacao}>

        {({ errors, touched }) => (
          <Form>          
            <div className={styles.inputGroup}>
              <label htmlFor="pessoas" className={styles.inputLabel}>Número de Pessoas:</label>
              <Field name="pessoas" type="number" className={styles.inputField} />
              {errors.pessoas && touched.pessoas ? (<p className={styles.error}>{errors.pessoas}</p>) : null}
            </div>        

            <h2>Selecione os alimentos desejado:</h2>             
            {Object.keys(nomesAlimentos).map((alimento) =>(
              <div>
                <Field type="checkbox" name="selecaoAlimentos" value={alimento} className={styles.inputCheckbox} />
                <label htmlFor="selecaoAlimentos">{nomesAlimentos[alimento]}</label>
              </div>            
            ))}             
            {errors.selecaoAlimentos ? (<p className={styles.error}>{ errors.selecaoAlimentos}</p>) : null}
            <button type="submit" className={styles.calcButton}>Calcular</button>
          </Form>
        )}       

      </Formik>
    </div>
  )
}

export default CalculadoraChurrasco