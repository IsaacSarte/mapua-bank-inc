import React from 'react';

// CSS
import './budget.css';

const BudgetList = (props) => {

    // Destructured Properties
    const { title, cost, expense, setExpense, clientUser } = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));
    let filter = memberList.filter(obj => obj.accountNo !== clientUser.accountNo);


    // Event Handlers
    const handleRemove = () => {
        let newExpense = expense.filter(obj => obj.title !== title);
        clientUser.expense = newExpense;
        filter.push(clientUser);
        localStorage.setItem("memberList", JSON.stringify(filter));
        setExpense(newExpense);
    }

    return (
        <ul className="budget-list-container">
            <li className="budget-list">
                <strong> - Php {cost}.00 </strong> || {""}
                <strong className="budget-list-title">{title}</strong><br />
                <button onClick={handleRemove} className="btn solid bg">Remove</button>
            </li>
            <br />
        </ul>

    )
}
export default BudgetList;