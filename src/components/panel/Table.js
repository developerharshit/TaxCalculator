import React, { Component } from 'react'

import Result from './Result';
import TaxesTable from './TaxesTable';
import GrossTable from './GrossTable';
export class Table extends Component {

    render() {
        return (
            <div>
                <Result type={this.props.type} data={this.props.data} amount={this.props.amount} />
                {this.props.type === "taxes" ?

                    <TaxesTable data={this.props.data} />
                    :
                    <GrossTable data={this.props.data} />}
            </div>
        )
    }
}

export default Table
