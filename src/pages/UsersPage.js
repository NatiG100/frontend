import React from 'react';
import UserList from '../User/UserList';

const DUMMY_IMAGE = 'https://www.sampsoniaway.org/wp-content/uploads/2021/02/Bewketu-credit-Teake-Zuidema-1-scaled-e1614208610362-564x564.jpg';
const DUMMY_USERS = [
    {
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        userName: 'Nahom H/Michael',
        uploads: '7',
        userImg: DUMMY_IMAGE
    }
];
const UsersPage = () => {
    return (
        <UserList users={DUMMY_USERS}/>
    );
};
export default UsersPage;