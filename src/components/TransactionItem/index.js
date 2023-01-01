// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransaction, transactionTypeOptions} = props
  const {id, titleInput, amountInput, optionId} = transaction

  const optionType =
    optionId === 'INCOME'
      ? transactionTypeOptions[0].displayText
      : transactionTypeOptions[1].displayText

  const onDeleteBtn = () => {
    onDeleteTransaction(id, amountInput, optionId)
  }
  return (
    <li className="transaction-history">
      <p className="history">{titleInput}</p>
      <p className="history">Rs {amountInput}</p>
      <p className="history">{optionType}</p>
      <button
        type="button"
        className="delete-btn"
        testid="delete"
        onClick={onDeleteBtn}
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
