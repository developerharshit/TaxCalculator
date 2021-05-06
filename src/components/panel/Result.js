import React, { Component } from 'react'

export class Result extends Component {
  render() {

    if (!this.props.data) return null;

    return (
      <div className="ui large header" style={{ textAlign: "center", marginTop: "1rem" }}>
        For the given {this.props.type === "taxes" ? "Gross Income " : "Net Income "}
            : ₹{this.props.data.amount}<p></p>
        {this.props.type === "taxes" ? "Taxes are " : "Gross Income is "}
            ₹{this.props.type === "taxes" ? this.props.data.totalTax : this.props.data.totalGross}.
      </div>
    );
  }
}

export default Result
