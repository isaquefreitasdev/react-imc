import { useState } from "react";
import "./App.css";

function Calc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [valueFinal, setValueFinal] = useState('');
  const [writeImc,setWriteImc] = useState('');
 

  function handleValueWeight(event){
    const w = event.target.value;
    if (isNaN(w)) {
      alert('Digite um peso válido');
    } else {
      setWeight(w);
    }
  }

  function handleValueHeight(event){
    const h = event.target.value.replace(',','.');
    if (isNaN(h)) {
      alert('Digite uma altura válida');
    } else {
      setHeight(h);
    }
  }

  function ValueCalculator(){
    if (!weight || !height) {
      // se algum campo estiver vazio, não calcula e exibe uma mensagem de erro
      setValueFinal('');
    alert("Preecha os campos")
      return;
    }
    const calc = eval(weight / (height * height));
    setWeight('')
    setHeight ('')
    setValueFinal(Number(calc.toFixed(2)))
    writeImcStatus();
    
  }
  function writeImcStatus(){
    let condition = ""
    if(valueFinal < 18){
      condition = "Você está Abaixo do Peso"
      setWriteImc(condition)
      console.log(writeImc)
    }else if(valueFinal >=18 && valueFinal <=24.5){
      condition = "Você está no peso Ideal"
      setWriteImc(condition)

    }else if(valueFinal > 24.5){
      condition = 'Procure um médico'
      setWriteImc(condition)
    }
  }

  return (
    <>
      <header></header>
      <main>
        <div className="container">
          <h1>Calculadora Imc</h1>
          <div className="inputsFields">
            <input value={weight} onChange={handleValueWeight} placeholder="Digite seu peso(kg)" id="field1" type="text" />
            
            <input value={height} onChange={handleValueHeight} placeholder="Digite sua altura(m)" type="text" name="" id="field2" />

            <button onClick={ValueCalculator} id="calculatorButton">Calcular</button>
            {valueFinal && <p>{valueFinal}</p>}
            {writeImcStatus && <p>{writeImc}</p>}
          </div>
        </div>
      </main>
    </>
  );
}
export default Calc;
