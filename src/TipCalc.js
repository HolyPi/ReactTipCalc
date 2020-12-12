import react, { Component } from 'react'
import './TipCalc.css';

class Calc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: 0,
            tipam: 0,
            split: 2
        }
    }
    render() {
        const tamount = this.state.bill * this.state.tipam / 100
        const total = tamount + this.state.bill;
        const tip = tamount / this.state.split;
        const totalper = total / this.state.split;
        return (
        <div className="container">
        <div className="amounts">
            <h1>Tip amount: ${tamount.toFixed(2)}</h1>
            <h1>Total: ${total.toFixed(2)}</h1>
            <h1>Tip Per Person: ${tip.toFixed(2)}</h1>
            <h1>Total Per Person: ${totalper.toFixed(2)}</h1>
        </div>
        <div className="input">
        <h2>Bill</h2>
        <input value= {this.state.bill} type='number' onChange={(e) => { this.setState( { bill: parseFloat(e.target.value)})}}/>
        <h2>Tip</h2>
        <input value= {this.state.tipam} type='number' onChange={(e) => { this.setState( { tipam: parseFloat(e.target.value)})}}/>
        <h2>How many people?</h2>
        <input value= {this.state.split} type='number' onChange={(e) => { this.setState( { split: parseFloat(e.target.value)})}}/>
        </div>
         </div>
        )
    }
}

export default Calc