import React, { Component } from 'react'

export class EditText extends Component {


    state = {
        amount: ""
    }
    formHandler = (event) => {
        event.preventDefault();
        if (isNaN(this.state.amount)) alert("Please enter valid amount");
        else this.props.calculate(this.state.amount);


    }
    inputHandler = (event) => {
        this.setState({ amount: event.target.value });

    }
    render() {
        return (
            <form className="ui form" onSubmit={this.formHandler}>
                <div style={{ marginTop: "2rem", textAlign: "center", marginLeft: "-5rem" }}>

                    <div className="ui right labeled input">
                        <div className="ui basic label">₹</div>
                        <input type="number" placeholder="Amount" onChange={this.inputHandler}
                            value={this.state.amount} />
                        <div className="ui label">.00</div></div>
                    <br></br>
                    <button
                        className="positive ui button"
                        style={{ marginTop: "1rem", marginLeft: "5rem" }}
                        type="submit">
                        Calculate {this.props.calcType}
                    </button>
                </div>

            </form>

        )
    }
}

export default EditText;


