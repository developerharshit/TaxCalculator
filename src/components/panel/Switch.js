import React, { Component } from 'react'

export class Switch extends Component {
    state = {
        changer: 0
    }
    grossStyle = null;
    taxStyle = 'green';

    clickHandler = (type) => {
        this.setState({ changer: 1 });
        if (type === "taxes") {
            this.taxStyle = 'green';
            this.grossStyle = null;
        }
        else {
            this.taxStyle = null;
            this.grossStyle = 'green';
        }
        this.props.typeChanged(type);

    }
    render() {
        return (
            <div className="panel-switch">
                <div className="ui buttons">
                    <button className={`ui button big compact ${this.taxStyle}`}
                        onClick={() => this.clickHandler("taxes")}>
                        Calculate Taxes
                    </button>
                    <div className="or">
                    </div>
                    <button className={`ui  button big compact ${this.grossStyle}`}
                        onClick={() => this.clickHandler("gross")}>
                        Calculate Net Income
                    </button>
                </div>
            </div>
        )
    }
}

export default Switch
