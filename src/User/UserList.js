import React from 'react';

import User from './User';

const UserList = props => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{ backgroundColor:'blue', padding:'10px', maxWidth:"80vw", display:'flex', justifyContent:'space-between' }}> 
            <div className="" >
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
            </div>
        </div>
        
       
    );
};

export default UserList;