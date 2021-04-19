import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from './styles'

const numberToWords = require('number-to-words')

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
  nine: '9'
}

const operators = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
}

const Input = (props) => {
  return (
    <button id={props.id} onClick={props.handler}>
      {props.operation}
    </button>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  handler: PropTypes.string,
  operation: PropTypes.string
}

class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: '',
      data: [],
      display: '',
      res: 0
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (e) {
    const input = e.target.id
    let str = ''
    let res = ''
    let arr = []
    const foo = eval

    switch (input) {
      case 'equals':
        str = this.filterResult(this.state.data.concat(this.state.x))
          .join('')
          .replace(/,/g, '')
        res = foo(str)
        arr = [res]
        this.setState({
          display: res,
          data: arr,
          x: ''
        })

        break
      case 'clear':
        this.setState({
          x: '',
          data: [],
          display: '0'
        })
        break
      case 'decimal':
        if (!this.state.x.includes('.')) {
          this.setState({
            x: this.state.x + '.',
            display: this.state.display + '.'
          })
        }
        break
      default:
        if (inputs[input]) {
          this.handleDigit(input)
        } else {
          this.handleOperator(operators[input])
        }
        break
    }
  }

  // If 2 or more operators are entered consecutively, the operation performed
  // should be the last operator entered (excluding the negative (-) sign.

  filterResult (inpArr) {
    let tmpOprArr = []
    const resArr = []

    for (let i = 0; i < inpArr.length; i++) {
      if (inpArr[i] === '') continue

      if (isNaN(inpArr[i])) {
        // if it's a symbol, filter to a temporary array
        tmpOprArr.push(inpArr[i])
      } else { // If a number is found, filter the opr array to remove the unwanted operators
        if (tmpOprArr.length > 1 && tmpOprArr.slice(-1).toString() === '-') {
          // last operator is a negative
          resArr.push(tmpOprArr.slice(-2))
          tmpOprArr = []
        } else if (tmpOprArr.length > 1) {
          resArr.push(tmpOprArr.slice(-1))
          tmpOprArr = []
        } else {
          resArr.push(tmpOprArr)
          tmpOprArr = []
        }
        resArr.push(inpArr[i])
      }
    }
    return resArr
  }

  setTest () {
    this.setState({
      data: ['5', '*', '-', '+', '5']
    })
  }

  handleDigit (digit) {
    if (this.state.display === '0') {
      this.setState({
        x: inputs[digit],
        display: inputs[digit]
      })
    } else {
      this.setState({
        x: this.state.x + inputs[digit],
        display: this.state.display + inputs[digit]
      })
    }
  }

  handleOperator (operator) {
    const tmpArr = this.state.data

    if (this.state.x !== '') tmpArr.push(this.state.x)

    tmpArr.push(operator)
    this.setState({
      data: tmpArr,
      display: this.state.display + operator,
      x: ''
    })
  }

  render () {
    const pad = []

    for (let i = 0; i < 10; i++) {
      pad.push(
        <Input
          key={numberToWords.toWords(i)}
          id={numberToWords.toWords(i)}
          operation={i}
          handler={this.handleInput}
        >
          {i}
        </Input>
      )
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        {/* <div id='calculator'> */}
        <div id='display'>{this.state.display}</div>
        <Input id='equals' operation='=' handler={this.handleInput} />
        {pad}
        <Input id='add' operation='+' handler={this.handleInput} />
        <Input id='subtract' operation='-' handler={this.handleInput} />
        <Input id='multiply' operation='*' handler={this.handleInput} />
        <Input id='divide' operation='/' handler={this.handleInput} />
        <Input id='decimal' operation='.' handler={this.handleInput} />
        <Input id='clear' operation='CL' handler={this.handleInput} />
        <br />
        {/* </div> */}
      </React.Fragment>
    )
  }
}

export default Calculator
