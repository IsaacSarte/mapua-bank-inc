import React, { useState, useEffect } from 'react'

// CSS
import './budget.css';

// Components
import BudgetList from './BudgetList'

const BudgetPlanner = (props) => {

    // Destructured Properties
    const { clientUser, setUpdate } = props;
    const memberList = JSON.parse(localStorage.getItem("memberList"));

    // States
    const [budget, setBudget] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");
    const [filter, setFilter] = useState([]);
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        setBudget(parseInt(clientUser.balance));
        setExpense(clientUser.expense);
    }, [clientUser]);

    useEffect(() => {
        let total = 0;
        expense.forEach(obj => total += parseInt(obj.cost));
        setTotalCost(total);
    }, [expense]);

    useEffect(() => {
        setFilter(memberList.filter(obj => obj.accountNo !== clientUser.accountNo));
    }, [title, cost])

    // Event Handlers
    const handleAddExpense = (e) => {
        e.preventDefault();
        clientUser.expense.unshift({
            title: title,
            cost: cost
        });
        filter.push(clientUser);
        localStorage.setItem("memberList", JSON.stringify(filter));
        setExpense(clientUser.expense);
        // setExpense(obj => [{title: title, cost: cost},...obj,]);
        setUpdate(state => state + ".");
        setTitle("");
        setCost("");
    }

    return (
        <div className="bplanner">
            <section>
                <h2>Budget: </h2>
                <h2>Php {budget - totalCost}.00 </h2>
            </section>

            <form onSubmit={(e) => handleAddExpense(e)}>
                <h2>Budget Planner</h2>
                <label>
                    Title
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        required />
                </label>
                <label>
                    Cost
                    <input
                        type="text"
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}
                        required />
                </label>

                <button
                    type="submit">
                    Add to Budget Planner
                </button>
            </form>

            <section>
                <h2>Budget Planner List</h2>
                <div>
                    {expense.map(obj =>
                        <BudgetList
                            title={obj.title}
                            cost={obj.cost}
                            expense={expense}
                            setExpense={setExpense}
                            clientUser={clientUser} />)}
                </div>
            </section>
        </div>
    )
}

export default BudgetPlanner;