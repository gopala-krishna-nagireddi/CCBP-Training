// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <div className="money-details-contaier">
      <div className="balance-container statement-container">
        <img
          className="statement-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="statement-details">
          <p className="statement">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="income-container statement-container">
        <img
          className="statement-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="statement-details">
          <p className="statement">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="expenses-container statement-container">
        <img
          className="statement-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="statement-details">
          <p className="statement">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
