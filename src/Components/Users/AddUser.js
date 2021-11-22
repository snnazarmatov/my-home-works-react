import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button/Button';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';




const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 
    || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name'
        })
        return;
    }

    if(+enteredAge < 2){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age'
        })
        return;
    }

    props.onAddUser(enteredUsername,enteredAge)
    setEnteredUsername('');
    setEnteredAge('');
}


    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    {/* 1-input */}
                    <label htmlFor='username'>Username
                    </label>
                    <input
                    id='username'
                    type='text'
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                    />
                    {/* 2-input */}
                    <label htmlFor='age'>Age
                    </label>
                    <input
                    id='age'
                    type='number'
                    value={enteredAge}
                    onChange={ageChangeHandler}
                    />
                    <Button type='submit'>AddUser</Button>
                </form>
            </Card>
            
        </Wrapper>
    )
}

export default AddUser;
