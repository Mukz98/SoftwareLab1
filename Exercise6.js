'use strict'

const Account = {
  Balance: 500
}

const withdraw = function (theAccount, amount) {
  theAccount.Balance = theAccount.Balance - amount
  theAccount.Withdrawal = amount
}

const deposit = function (theAccount, amount) {
  theAccount.Balance = theAccount.Balance + amount
  theAccount.Deposit = amount
}

const AccountSummary = function (theAccount) {
  console.log(`This account has a balance of R${Account.Balance}. There have been deposits totalling R${Account.Deposit} and withdrawals totalling ${Account.Withdrawal}.`)
}

deposit(Account, 500)
withdraw(Account, 250)
AccountSummary(Account)
