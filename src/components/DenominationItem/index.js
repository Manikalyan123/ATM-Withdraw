// Write your code here

import './index.css'

const Withdraw = props => {
  const {denomination, substractValue} = props
  const {value} = denomination

  const substract = () => {
    substractValue(value)
  }

  return (
    <button onClick={substract} className="button" type="button">
      {denomination.value}
    </button>
  )
}

export default Withdraw
