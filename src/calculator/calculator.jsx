import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from './styles';

const numberToWords = require('number-to-words');

const inputs = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const operators = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

const Input = (props) => {
  return (
    <button id={props.id} onClick={props.handler}>
      {props.operation}
    </button>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  handler: PropTypes.string,
  operation: PropTypes.string,
};

const Digit = (props) => {
  return (
    <button
      className="grid-item"
      key={numberToWords.toWords(props.value)}
      id={numberToWords.toWords(props.value)}
      operation={props.value}
      onClick={props.handler}
    >
      {props.value}
    </button>
  );
};

Digit.propTypes = {
  value: PropTypes.number,
  handler: PropTypes.func,
};

const Operator = (props) => {
  return (
    <button
      className="grid-item"
      id={props.id}
      operation={props.operation}
      onClick={props.handler}
    >
      {props.operation}
    </button>
  );
};

Operator.propTypes = {
  id: PropTypes.string,
  operation: PropTypes.string,
  handler: PropTypes.func,
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '', // Current Number Being treated
      data: [], // Formula
      display: '0', // displayed Input
      memory: '', // Upper Display
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const input = e.target.id;
    let str = '';
    let res = '';
    let arr = [];

    const evaluate = eval;
    switch (input) {
      case 'equals':
        str = this.filterInput(this.state.data.concat(this.state.x))
          .join('')
          .replace(/,/g, '');
        try {
          res = evaluate(str);
        } catch (error) {
          res = '0';
        }

        if (!res) res = '0';

        arr = [res];
        this.setState({
          display: res,
          data: arr,
          x: '',
          memory: str + '=' + res,
        });

        break;
      case 'clear':
        this.setState({
          x: '',
          data: [],
          display: '0',
          memory: '',
        });
        break;
      case 'decimal':
        if (this.state.display.length < 16) {
          if (!this.state.x.includes('.')) {
            this.setState({
              x: this.state.x + '.',
              display: this.state.display + '.',
              memory: this.state.memory + '.',
            });
          }
        } else {
          this.limitReached();
        }
        break;
      default:
        if (inputs[input]) {
          this.handleDigit(input);
        } else {
          this.handleOperator(operators[input]);
        }

        break;
    }
  }

  // If 2 or more operators are entered consecutively, the operation performed
  // should be the last operator entered (excluding the negative (-) sign.

  filterInput(inpArr) {
    let tmpOprArr = [];
    const resArr = [];

    for (let i = 0; i < inpArr.length; i++) {
      if (inpArr[i] === '') continue;

      if (isNaN(inpArr[i])) {
        // if it's a symbol, filter to a temporary array
        tmpOprArr.push(inpArr[i]);
      } else {
        // If a number is found, filter the opr array to remove the unwanted operators
        if (tmpOprArr.length > 1 && tmpOprArr.slice(-1).toString() === '-') {
          // last operator is a negative
          resArr.push(tmpOprArr.slice(-2));
          tmpOprArr = [];
        } else if (tmpOprArr.length > 1) {
          resArr.push(tmpOprArr.slice(-1));
          tmpOprArr = [];
        } else {
          resArr.push(tmpOprArr);
          tmpOprArr = [];
        }
        resArr.push(inpArr[i]);
      }
    }
    return resArr;
  }

  handleDigit(digit) {
    let newX;
    let newDisplay;
    let newMemory;

    if (this.state.display === '0') {
      newX = inputs[digit];
      newDisplay = inputs[digit];
      newMemory = this.state.memory + inputs[digit];
    } else {
      newX = this.state.x + inputs[digit];
      newDisplay = this.state.display + inputs[digit];
      newMemory = this.state.memory + inputs[digit];
    }

    const firstDigit = newDisplay[0];

    if (!(firstDigit >= '0' && firstDigit <= '9')) {
      newDisplay = newDisplay.slice(1);
    }

    this.setState({
      x: newX,
      display: newDisplay,
      memory: newMemory,
    });
  }

  handleOperator(operator) {
    const tmpArr = this.state.data;
    let memory = '';

    if (this.state.x !== '') tmpArr.push(this.state.x);

    // If the display already contains a full airthmetic operation, Refresh it.  Otherwise keep adding.
    if (this.state.memory.includes('=')) {
      memory = this.state.display + operator;
    } else {
      memory = this.state.memory + operator;
    }

    tmpArr.push(operator);
    this.setState({
      data: tmpArr,
      display: operator,
      x: '',
      memory: memory,
    });
  }

  render() {
    return (
      <div id="calculator">
        <GlobalStyle />
        <div id="outer">
          <div id="outerDisplay" className="display-grid-item">
            <div id="upperDisplay">{this.state.memory}</div>
            <div id="display">{this.state.display}</div>
          </div>
          <Operator id="clear" operation="CL" handler={this.handleInput} />
          <Operator id="divide" operation="/" handler={this.handleInput} />
          <Operator id="multiply" operation="*" handler={this.handleInput} />
          <Digit value={7} handler={this.handleInput} />
          <Digit value={8} handler={this.handleInput} />
          <Digit value={9} handler={this.handleInput} />
          <Operator id="subtract" operation="-" handler={this.handleInput} />
          <Digit value={4} handler={this.handleInput} />
          <Digit value={5} handler={this.handleInput} />
          <Digit value={6} handler={this.handleInput} />
          <Operator id="add" operation="+" handler={this.handleInput} />
          <Digit value={1} handler={this.handleInput} />
          <Digit value={2} handler={this.handleInput} />
          <Digit value={3} handler={this.handleInput} />
          <Operator id="equals" operation="=" handler={this.handleInput} />
          <Digit value={0} handler={this.handleInput} />
          <Operator id="decimal" operation="." handler={this.handleInput} />
        </div>
        <br />
      </div>
    );
  }
}

export default Calculator;
