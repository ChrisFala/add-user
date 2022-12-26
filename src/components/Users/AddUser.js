import { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [inputError, setInputError] = useState(false)

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setInputError(true)         
            return
        }
        if (+enteredAge < 1) {
            setInputError(true)
            return
        }

        const userData = {
            username: enteredUsername,
            age: enteredAge
        };

        props.onSaveUserData(userData);
        setEnteredUsername('');
        setEnteredAge('');
    }


    return (
        <div>
            {inputError && <ErrorModal title="An error occured" message="User Input is Invalid" />}
            <Card>
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
            </Card>
        </div>
    );
};

export default AddUser