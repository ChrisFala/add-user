import { useState } from "react";
import styles from './AddUser.module.css'

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

        const userData = {
            username: enteredUsername,
            age: enteredAge
        };

        props.onSaveUserData(userData);
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <form onSubmit={addUserHandler}>
            <label className={styles.label} htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
            />
            <label className={styles.label} htmlFor="age">Age (Years)</label>
            <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
            />
            <button
                className={styles.button}
                type="submit"
            >Add User</button>
        </form>
    );
};

export default AddUser