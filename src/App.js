import React, { useState } from "react";
import ExpenseList from "./Components/expenses/ExpenseList";
import NewExpense from "./Components/NewExpense/NewExpense";

const expenseData = [
  {
    tittle: "cable recharge",
    amount: "$120",
    date: "15 / 12 / 2021",
    id: "1",
  },
  {
    tittle: "cable recharge",
    amount: "$120",
    date: "15 / 12 / 2021",
    id: "1",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);

  const addExpenseDataHandler = (newdata) => {
    console.log(newdata);
    setExpenses([newdata, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <ExpenseList item={expenseData} />
    </div>
  );
};

export default App;
