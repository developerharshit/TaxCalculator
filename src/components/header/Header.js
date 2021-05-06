import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "center" }}>
                <button className="positive ui button massive compact">TAX CALCULTOR</button>
            </div>
        )
    }
}

export default Header
