import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
import RenderList from './RenderList';

const UsersList = (props) => {

    return (
      <>
        <Card className={classes.users}> 
            <ul>
                {props.users.map(user => 
                    <RenderList key={user.id} id={user.id} onDelete={props.onDelete}>
                        {user.name} ({user.age} years old)
                    </RenderList>
                    )}
            </ul>
        </Card>
        </>
    )
}


export default UsersList;