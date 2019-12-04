import React from 'react';

class Button extends React.Component {

    
         handleClick = (e) => {
            e.preventDefault();
            console.log(`You have a new date! ${new Date()}`)
        }
    

    render() {
        return(
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}

export default Button;