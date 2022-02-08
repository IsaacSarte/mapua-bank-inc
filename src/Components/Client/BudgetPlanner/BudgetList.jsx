import React from 'react';

// CSS

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
        <li>
            <strong>Php {cost}</strong>
            <strong>{title}</strong>
            <button onClick={handleRemove}>Remove</button>
        </li>
    )
}
export default BudgetList;