import AddUser from "./AddUser"

const NewUser = () => {
    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };
        console.log(userData)
    }


    return (
        <div>
            <AddUser onSaveUserData={saveUserDataHandler} />
        </div>
    )
}

export default NewUser