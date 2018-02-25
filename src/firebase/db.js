import { db } from './firebase'

// Add new user's displayName
export const doCreateUser = (id, displayName) =>
  db.ref(`users/${id}`).set({
    displayName,
  })

// Get the userData
export const getUserData = id =>
  db.ref(`users/${id}`).once('value')

// set the current budget year
export const doSetBudgetYear = (id, budgetYear) =>
  db.ref(`users/${id}`).child('budgetYear').set(budgetYear)

// set the current budget month
export const doSetBudgetMonth = (id, budgetMonth) =>
  db.ref(`users/${id}`).child('budgetMonth').set(budgetMonth)

// get a budget
export const doGetBudgetInformation = (id, budgetMonth, budgetYear) =>
  db.ref(`users/${id}/budget/${budgetYear}${budgetMonth}`).once('value')

// init a budget
export const doInitBudgetInformation = (id, budgetMonth, budgetYear, struct) =>
  db.ref(`users/${id}/budget`).child(budgetYear + budgetMonth).set(struct)
