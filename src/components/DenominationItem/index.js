// Write your code here

import './index.css'

const Withdraw = props => {
  const {denomination, substract} = props
  const {value} = denomination

  const substracts = () => {
    substract(value)
  }

  return (
    <li className="listItem">
      <button onClick={substracts} className="button" type="button">
        {denomination.value}
      </button>
    </li>
  )
}

export default Withdraw
