import React, { Component } from 'react'


export class taxesTable extends Component {






    render() {

        if (this.props.data === null) return null;
        const data = this.props.data;
        return (
            <table className="ui celled fixed single line table ">
                <thead className="">
                    <tr className="">
                        <th className="">Row</th>
                        <th className="">Slab</th>
                        <th className="">Tax Rate</th>
                        <th className="">Taxable Income</th>
                        <th className="">Tax</th>
                        <th className="">Description</th>
                    </tr>
                </thead>

                <tbody className="">
                    {data.row.map((cv, index) => {

                        return (
                            <tr className="" key={index}>
                                <td className="">{cv}</td>
                                <td className="">{data.slabRange[cv]}</td>
                                <td className="">{data.taxRates[index] * 100}%</td>
                                <td className="">{data.taxableIncome[index]}</td>
                                <td className="">{data.tax[index]}</td>
                                <td className="">({data.taxableIncome[index]})*{data.taxRates[index] * 100}%</td>
                            </tr>
                        );

                    })}

                </tbody>

            </table>
        )
    }
}

export default taxesTable
