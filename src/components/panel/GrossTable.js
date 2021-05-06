import React, { Component } from 'react'


export class GrossTable extends Component {

    render() {

        if (this.props.data === null) return null;
        const data = this.props.data;
        return (
            <table className="ui celled fixed single line table ">
                <thead className="">
                    <tr className="">
                        <th className="">Row</th>
                        <th className="">Gross Income Slab</th>
                        <th className="">Tax Rate</th>
                        <th className="">Tax Amount</th>
                        <th className="">Net Income</th>
                    </tr>
                </thead>

                <tbody className="">
                    {data.row.map((cv, index) => {

                        return (
                            <tr className="" key={index}>
                                <td className="">{cv}</td>
                                <td className="">{data.slabRange[cv]}</td>
                                <td className="">{data.taxRates[index] * 100}%</td>
                                <td className="">{Math.ceil(data.tax[index])}</td>
                                <td className="">{data.netIncome[index]}</td>
                            </tr>
                        );

                    })}

                </tbody>

            </table>
        )
    }
}

export default GrossTable
