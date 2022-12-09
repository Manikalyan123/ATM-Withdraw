// Write your code here

import {Component} from 'react'

import './index.css'

import Withdraw from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  substractValue = value => {
    this.setState(prevState => ({Balance: prevState.Balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {Balance} = this.state
    return (
      <div className="Cont">
        <div className="display">
          <div className="name-box">
            <div className="circle-cont">
              <p>s</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>

          <div className="balance-cont">
            <p className="blue-heading">Your Balance</p>
            <div className="balance-box">
              <p className="name">{Balance}</p>
              <p className="in-rupee">in rupees</p>
            </div>
          </div>
          <p className="name">Withdraw</p>
          <p className="blue-heading">CHOOSE SUM (IN RUPEES)</p>

          {denominationsList.map(each => (
            <ul className="unOrderedList">
              <Withdraw
                denomination={each}
                key={each.id}
                substract={this.substractValue}
              />
            </ul>
          ))}
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
