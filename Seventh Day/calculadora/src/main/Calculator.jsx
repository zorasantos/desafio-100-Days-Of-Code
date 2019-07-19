import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

//Estado inicial do display da calculadora
const initialState = {
    displayValue: '0',
    clearDisplay: false, //Para quando for necessario limpar o display
    operation: null, //Propriedade que vai armazenar as operações + - / *
    values: [0, 0], //Propriedade para armazenar um valor para fazer uma operação com outro valor.
    current: 0 //vai dizer em qual valor do indice do array estou digitando
}

export default class Calculator extends Component {

    state = { ...initialState} //usado para startar o objeto initialState.

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState}) //caso o clearMemory seja invocado, volta ao estado inicial do objeto que e 0
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        if ( n === '.' && this.state.displayValue.includes('.')) {
            return //Essa validação impede que seja incluido dois pontos na operação.
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        );
    }
}