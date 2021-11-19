import React from 'react';
import Card from '../UI/Card/Card';
import classes from './UsersList.module.css';
import RenderList from './RenderList';

const UsersList = (props) => {
    return (
        <>
        <Card className={classes.users}>
            <ul>
                {/* how? */}
      {/* props.OnDelete 2 */}
                {props.users.map(user => 
                <RenderList key={user.id} onDelete={() => props.onDelete(user.id)}>
                {user.name} ({user.age} years old)
                </RenderList>
                )}
            </ul>
        </Card>
            
        </>
    )
}

export default UsersList
