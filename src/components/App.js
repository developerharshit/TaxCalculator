import React from 'react';
import Header from './header/Header';
import Panel from './panel/Panel';
class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Header />
                <Panel />
            </div>
        );
    }
}
export default App;