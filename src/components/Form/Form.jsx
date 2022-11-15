import "./Form.css"
import { useState } from "react"
const Form = ()=>{
   
    const [inputs, setInputs]=useState({})

    const inputsHandler =(e)=>{
        inputs[e.target.name] = e.target.value
        setInputs(inputs)
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputs)  // Cuando tenga que subir el form a FireBase lo que se hace es hacer un post en el handle submit, en vez de un console.log

    }

    return(
        <div className="shopOrderForm">
            <form onSubmit={handleSubmit} action="">
                <input value={inputs.name} onChange={inputsHandler} type="text" name="name" placeholder="Nombre"/>
                <input value={inputs.lastName} onChange={inputsHandler} type="text" name="lastName" placeholder="Apellido" />
                <input value={inputs.email} onChange={inputsHandler} type="email" name="email" placeholder="E-Mail" />
                <input value={inputs.address} onChange={inputsHandler} type="text" name="address" placeholder="Dirección" />
                <input value={inputs.zipCode} onChange={inputsHandler} type="text" name="zipCode" placeholder="Código Postal" />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form;