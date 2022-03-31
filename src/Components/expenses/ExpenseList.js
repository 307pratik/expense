import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseList(props) {
  const getYearHandler = (year) => {
    console.log(year);
  };

  return (
    <div className="expenses">
      <ExpensesFilter onGetYear={getYearHandler}></ExpensesFilter>
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          tittle={expense.tittle}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
