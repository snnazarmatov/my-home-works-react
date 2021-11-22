import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
import DeleteList from './DeleteList';


const UsersList = (props) => {
    return (
        <>
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => 
                <DeleteList key={user.id}
                id={user.id} onDelete={props.onDelete}>
                    {user.name} ({user.age}years old)
                    </DeleteList>
                    )}
            </ul>

        </Card>
            
        </>
    )
}

export default UsersList
