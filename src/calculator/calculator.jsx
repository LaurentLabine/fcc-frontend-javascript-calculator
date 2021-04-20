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
      data: [], //
      display: '', // displayed Input
    };

    this.handleInput = this.handleInput.bind(this);
  }

  limitReached() {
    let prevMsg = '';
    if (!this.state.display.startsWith('Limit Reached')) {
      prevMsg = this.state.display;
      this.setState({
        display: 'Limit Reached',
      });
      setTimeout(
        function () {
          // Start the timer
          this.setState({ display: prevMsg }); // After 1 second, set render to true
        }.bind(this),
        1000
      );
    }
  }

  handleInput(e) {
    const input = e.target.id;
    let str = '';
    let res = '';
    let arr = [];

    console.log('State : ' + this.state.x);

    const evaluate = eval;
    switch (input) {
      case 'equals':
        str = this.filterResult(this.state.data.concat(this.state.x))
          .join('')
          .replace(/,/g, '');
        try {
          res = evaluate(str);
          arr = [res];
        } catch (error) {
          res = 'ERROR';
        }
        this.setState({
          display: res,
          data: arr,
          x: '',
        });

        break;
      case 'clear':
        this.setState({
          x: '',
          data: [],
          display: '0',
        });
        break;
      case 'decimal':
        if (this.state.display.length < 14) {
          if (!this.state.x.includes('.')) {
            this.setState({
              x: this.state.x + '.',
              display: this.state.display + '.',
            });
          }
        } else {
          this.limitReached();
        }
        break;
      default:
        if (inputs[input]) {
          if (this.state.display.length < 14) {
            this.handleDigit(input);
          } else {
            this.limitReached();
          }
        } else {
          this.handleOperator(operators[input]);
        }

        break;
    }
  }

  // If 2 or more operators are entered consecutively, the operation performed
  // should be the last operator entered (excluding the negative (-) sign.

  filterResult(inpArr) {
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

  setTest() {
    this.setState({
      data: ['5', '*', '-', '+', '5'],
    });
  }

  handleDigit(digit) {
    if (this.state.display === '0') {
      this.setState({
        x: inputs[digit],
        display: inputs[digit],
      });
    } else {
      this.setState({
        x: this.state.x + inputs[digit],
        display: this.state.display + inputs[digit],
      });
    }
  }

  handleOperator(operator) {
    const tmpArr = this.state.data;

    if (this.state.x !== '') tmpArr.push(this.state.x);

    tmpArr.push(operator);
    this.setState({
      data: tmpArr,
      display: operator,
      x: '',
    });
  }

  render() {
    return (
      <div id="calculator">
        <GlobalStyle />
        <div id="outer">
          <div id="display" className="grid-item">
            <div id="memory">{this.state.display}</div>
            <div id="current">{this.state.display}</div>
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
