import React from 'react';
import UserList from '../User/UserList';

const DUMMY_IMAGE = 'https://www.sampsoniaway.org/wp-content/uploads/2021/02/Bewketu-credit-Teake-Zuidema-1-scaled-e1614208610362-564x564.jpg';
const DUMMY_USERS = [
    {
        id: 1,
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        id: 2,
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        id: 3,
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        id: 4,
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        id: 5,
        userName: 'Mikiyas Daniel',
        uploads: '4',
        userImg: DUMMY_IMAGE
    },
    {
        id: 6,
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