import AddUser from "./AddUser"

const NewUser = (props) => {
    
    //Complete handling user data to be put into user card
    const addUserHandler = (enteredUserData) => {
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
        </div>
    )
}

export default NewUser