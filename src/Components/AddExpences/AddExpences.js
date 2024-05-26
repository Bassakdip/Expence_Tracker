import React from 'react'

const AddExpences = () => {

    const handleSubmit = async e => {

        e.preventDefault();
        const id = Math.random();
        const data = {
            moneySpent,
            expenseDescription,
            category,
            id

        };

        dispatch(addExpense(data));
        dispatch(clearInputValue())
    };

    const toggleThemeHandler = () => {
        dispatch(toggleTheme()); // Dispatch toggleTheme action
        console.log(Theme)
    };

    return (
        <>
            <div className={`${Theme}`}>
                {TotalMoneyExpense > 1000 ?
                    <button onClick={toggleThemeHandler} className="toggle-button" style={{ marginLeft: "70rem", marginTop: "30px" }}>
                        Toggle Theme
                    </button> : null}

                <div className={`form-container ${Theme}`}>
                    <h2 style={{ color: "black" }}>Expense Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="money-spent" style={{ color: "black" }}>Money Spent</label>
                            <input
                                type="text"
                                id="money-spent"
                                value={moneySpent}
                                onChange={e => dispatch(setMoneySpent(e.target.value))}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expense-description" style={{ color: "black" }}>Expense Description</label>
                            <input
                                type="text"
                                id="expense-description"
                                value={expenseDescription}
                                onChange={e => dispatch(setExpenseDescription(e.target.value))} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category" style={{ color: "black" }}>Category</label>
                            <select
                                id="category"
                                value={category}
                                onChange={e => dispatch(setCategory(e.target.value))}
                            >
                                <option value="">Select a category</option>
                                <option value="Food">Food</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Salary">Salary</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                {Loading ? <p style={{ display: "auto" }}>`Loading</p> : userData.length > 0 ? <DisplayExpense /> : <h2>No Expense please add your Expense</h2>}

            </div>

        </>
    )
}

export default AddExpences
