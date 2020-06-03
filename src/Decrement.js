import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component {
    constructor(props){
        super(props);
        this.state = {number: props.start };
    }

    handleDecrement = (state) => {
        if (this.state.number === 0) {
            return alert("Cannot be under zero!");
        }
       this.setState({ number: this.state.number - 1});
    };

  render() {
    return (
        <div> 
            <br></br>
            <button onClick={this.handleDecrement}>Decrement</button>
            {this.state.number}
           
        </div>
    );
  }
}

Decrement.propTypes = {
    start: PropTypes.number.isRequired,
};

export default Decrement;
