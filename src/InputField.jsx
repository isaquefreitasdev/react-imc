function InputsField(props){
    return(
        <div className="inputsFields">
            <input value={props.weight} onChange={props.handleValueWeight} placeholder="Digite seu peso(kg)" id="field1" type="text" />
            
            <input value={props.height} onChange={props.handleValueHeight} placeholder="Digite sua altura(m)" type="text" name="" id="field2" />

            <button onClick={props.ValueCalculator} id="calculatorButton">Calcular</button>
            {props.valueFinal && <p>{props.valueFinal}</p>}
            {props.imcStatus && <p>Status:{props.imcStatus}</p>}
          </div>
    )
}
export default InputsField