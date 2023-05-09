import React, { useState } from 'react'
//cambiamenti di stato
//si crea uno stato attuale e settaggi di stato
//si crea funzione per settare lo stato
//il componente viene renderizzato ad ogni cambiamento di stato
//fondamentale la funzione useState()
//al suo interno si inserisce uno stato iniziale (oppure array vuoti, oggetti, Null o Undefined)che deve possedere come tipo un primitivo di js (boolean, Number, String)

const Counter = () => {

    const [counter, setCounter] = useState(0); //restituisce lo stato e una funzione per cambiare stato sotto forma di array

    const [formState, setFormState] = useState({}); //oggetto vuoto

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div>
            <h1>il Conteggio è: {counter}</h1>
            <button onClick={increment}>Incrementa</button>
            <button onClick={decrement}>Decrementa</button>
            <button onClick={reset}>Resetta</button>
            <form>
                <input
                    type='text'
                    name='firstName'
                    onChange={(event) => setFormState({
                        ...formState,
                        firstName: event.target.value
                    })}
                />
                <input
                    type='text'
                    name='lastName'
                    onChange={(event) => setFormState({
                        ...formState,
                        lastName: event.target.value
                    })}
                />
                <button type='submit'>Invia</button>
            </form>
        </div>
    )
}

export default Counter;