import React from 'react';

import User from './User';

const UserList = props => {
    return (
            <div className="container" >
            {
                props.users.map(user=>(
                    <User 
                        key = {user.id}
                        uploads={user.uploads}
                        userName={user.userName}
                        userImg={user.userImg}
                    />
                ))
            } 
        </div>        
    );
};

export default UserList;