import { useState } from "react";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        setEnteredUsername('')
        setEnteredAge('')
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser