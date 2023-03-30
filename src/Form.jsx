function Form(){
    <div className="inputsFields">
            <input value={weight} onChange={handleValueWeight} placeholder="Digite seu peso(kg)" id="field1" type="text" />
            
            <input value={height} onChange={handleValueHeight} placeholder="Digite sua altura(m)" type="text" name="" id="field2" />

            <button onClick={ValueCalculator} id="calculatorButton">Calcular</button>
            {valueFinal && <p>{valueFinal}</p>}
          </div>
}
