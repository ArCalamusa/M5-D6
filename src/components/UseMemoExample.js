import React, { useState, useMemo } from 'react'

const UseMemoExample = () => {
    const [count, setCount] = useState(0)
    const [wordIndex, setWordIndex] = useState(0)
    const words = ['ciao', 'useMemo', 'Io', 'assolutissimamente']
    const word = words[wordIndex]
    const expensiveFunction = (word) => {
        let i = 0
        while (i < 2000000000) i++;
        return word.length
    }
    // const letterCount = expensiveFunction(word)
    const letterCount = useMemo(() => expensiveFunction(word), [word]) //usa la funzione solo se la parola cambia
    return (
        <div>
            <h2>Calcolo del numero di lettere</h2>
            <p className='text-dark'>{word} ha {letterCount} lettere</p>
            <button onClick={() => {
                const nextIndex = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
                setWordIndex(nextIndex)
            }}>
                Prossima parola
            </button>
            <hr></hr>
            <h2>Incrementa il counter</h2>
            <p className='text-dark'>Valore counter: {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>incrementa</button>
        </div>
    )
}

export default UseMemoExample