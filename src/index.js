// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click Me!';
}
// Create a react component
const App = () => {
    const buttonText = {
        text: 'Click Me!'
    }
    const style = {
        backgroundColor: 'blue',
        color: '#fff'
    }
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    )
}

// Take the react component and show it on screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);