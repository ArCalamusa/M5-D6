import React, { useState, useCallback } from "react";

const ParentComponent = () => {
    const [click, setClick] = useState(0)

    // const increment = () => {
    //     setClick(click + 1)
    // }

    const increment = useCallback(() => {
        setClick(click + 1)
    }, [click]) //funzione ricreata solo se il click cambia

    return (
        <div>
            <p>Numero di click è {click}</p>
            <button onClick={increment}>Cliccami</button>
            <childComponent increment={increment}/>
        </div>
    )
}

const childComponent = ({increment}) => {
    return(
        <button onClick={increment}>Cliccami</button>
    )
}

//2 componenti separati la funzione padre verrà riutilizzata, per non richiamarla su usa lo useCallback permette di utilizzare il medesimo riferimento
