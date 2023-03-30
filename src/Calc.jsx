import { useState } from "react";
import "./App.css";

function Calc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [valueFinal, setValueFinal] = useState('');
  const [imcStatus, setImcStatus] = useState('');

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
      setImcStatus('');
      alert("Preencha os campos");
      return;
    }
    const calc = eval(weight / (height * height));
    setWeight('');
    setHeight('');
    setValueFinal(Number(calc.toFixed(2)));
    writeImcStatus(calc);
  }

  function writeImcStatus(imcValue){
    if (imcValue < 18.5) {
      setImcStatus("Abaixo do peso");
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setImcStatus("Peso normal");
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setImcStatus("Sobrepeso");
    } else if (imcValue >= 30 && imcValue <= 34.9) {
      setImcStatus("Obesidade grau 1");
    } else if (imcValue >= 35 && imcValue <= 39.9) {
      setImcStatus("Obesidade grau 2");
    } else if (imcValue >= 40) {
      setImcStatus("Obesidade grau 3");
    } else {
      setImcStatus('');
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
            {valueFinal && <p>IMC: {valueFinal}</p> }
            {imcStatus && <p>Status: {imcStatus}</p>}
          </div>
        </div>
      </main>
    </>
  );
}

export default Calc;
