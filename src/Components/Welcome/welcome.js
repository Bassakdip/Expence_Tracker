import React from 'react'

const welcome = () => {
    return (
        <div>
            <h1 className="border-bottom">Welcome to Expense Tracker!!!</h1>
            <div className="d-flex p-3 justify-content-between border-bottom">
                <p>Welcome to Expense Tracker!!!</p>
                <span>Your profile is incomplete. <a href="/updateprofile">Complete Now</a></span>
            </div>
        </div>
    )
}

export default welcome
