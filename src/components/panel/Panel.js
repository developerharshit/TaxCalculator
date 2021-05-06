import React, { Component } from 'react'

import Switch from './Switch';
import EditText from './EditText';
import Table from './Table'

import calculateTax from '../../utils/calculateTax';
import calculateGross from '../../utils/calculateGross';

import './panel.css'
export class Panel extends Component {

    state = {
        type:"taxes",
        taxData:null,
        grossIncomeData:null,
        changer:1,
        amount:0
        

    }

    typeChanged = (type)=>{
        this.setState({type});
    }
    calcHandler = async (amount)=>{
        if(this.state.type==="taxes"){
            const taxData = calculateTax(amount);
            //console.log(taxData);
            await this.setState({taxData:taxData,amount:amount});
           // alert(this.state.taxData.totalTax);

        }else{
            const grossIncomeData = calculateGross(amount);
            await this.setState({grossIncomeData:grossIncomeData,amount:amount});
            console.log(this.state.grossIncomeData);
        }


    }
    render() {
        return (

            <div>
                <Switch typeChanged={this.typeChanged}/>
                <EditText typeName={this.state.type} calculate={(amount)=>this.calcHandler(amount)}/>
                <Table amount={this.state.amount} type={this.state.type} data={this.state.type==="taxes"?this.state.taxData:this.state.grossIncomeData}/>
            
            </div>
        );
    }
}

export default Panel;
