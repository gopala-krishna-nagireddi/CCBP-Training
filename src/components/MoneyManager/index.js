import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  onAddTransaction = event => {
    event.preventDefault()

    const titleInputEl = document.getElementById('titleInput')
    const amountInputEl = document.getElementById('amountInput')
    const optionInputEl = document.getElementById('optionId')

    const newTransaction = {
      id: uuidv4(),
      titleInput: titleInputEl.value,
      amountInput: parseInt(amountInputEl.value),
      optionId: optionInputEl.value,
    }

    if (optionInputEl.value === 'INCOME') {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        totalBalance: prevState.totalBalance + newTransaction.amountInput,
        totalIncome: prevState.totalIncome + newTransaction.amountInput,
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        totalBalance: prevState.totalBalance - newTransaction.amountInput,
        totalExpenses: prevState.totalExpenses + newTransaction.amountInput,
      }))
    }

    titleInputEl.value = ''
    amountInputEl.value = ''
    optionInputEl.value = 'INCOME'
  }

  onDeleteTransaction = (id, amountInput, optionId) => {
    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(eachTransaction => {
          if (eachTransaction.id !== id) {
            return eachTransaction
          }
          return null
        }),
        totalIncome: prevState.totalIncome - amountInput,
        totalBalance: prevState.totalBalance - amountInput,
      }))
    } else {
      this.setState(prevState => ({
        transactionsList: prevState.transactionsList.filter(eachTransaction => {
          if (eachTransaction.id !== id) {
            return eachTransaction
          }
          return null
        }),
        totalExpenses: prevState.totalExpenses - amountInput,
        totalBalance: prevState.totalBalance + amountInput,
      }))
    }
  }

  render() {
    const {
      transactionsList,
      totalBalance,
      totalIncome,
      totalExpenses,
    } = this.state

    return (
      <div className="bg-container">
        <div className="acc-details-container">
          <h1 className="acc-holder-name">Hi, Richard</h1>
          <p className="caption">
            Welcome back to your{' '}
            <span className="sub-caption">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          totalBalance={totalBalance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
        <div className="input-output-container">
          <div className="input-container">
            <h2>Add Transaction</h2>
            <form onSubmit={this.onAddTransaction}>
              <label className="label" htmlFor="titleInput">
                TITLE
              </label>
              <br />
              <input
                id="titleInput"
                className="input"
                type="text"
                placeholder="TITLE"
              />
              <label className="label" htmlFor="amountInput">
                AMOUNT
              </label>
              <br />
              <input
                id="amountInput"
                className="input"
                type="text"
                placeholder="AMOUNT"
              />
              <label className="label" htmlFor="optionId">
                TYPE
              </label>
              <br />
              <select id="optionId" className="input">
                <option value={transactionTypeOptions[0].optionId}>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="output-container">
            <h2>History</h2>
            <ul className="transactions-list">
              <li className="transaction-header-item">
                <p className="header">Title</p>
                <p className="header">Amount</p>
                <p className="header">Type</p>
                <p className="header" />
              </li>
              {transactionsList.length !== 0
                ? transactionsList.map(eachTransaction => (
                    <TransactionItem
                      transaction={eachTransaction}
                      transactionTypeOptions={transactionTypeOptions}
                      onDeleteTransaction={this.onDeleteTransaction}
                      key={eachTransaction.id}
                    />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
