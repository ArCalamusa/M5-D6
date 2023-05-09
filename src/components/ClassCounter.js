import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        //ogni classe che fa rif a una classe padre e far ereditare le caratteristiche si usa super
        super(props);
        //this fa riferimento all'oggetto in cui siamo
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState((prev) => ({
            //il prev si usa per tenere traccia dei cambiamenti di stato prima di essere aggiornato fa riferimento a this.
            count: prev.count + 1
        }))
    }

    decrementCount = () =>
        this.setState((prev) => ({
            count: prev.count - 1
        }))

    render() {
        return (
            <div>
                {/* con set imposti con state leggi */}
                <p className="text-dark">Conto:{this.state.count}</p>
                <button onClick={this.incrementCount}>Icrementa</button>
                <button onClick={this.decrementCount}>Decrementa</button>
            </div>
        )
    }
}

export default ClassCounter;