import React from 'react';
import './App.css';

import Profile from "./Profile/Profile";
import userData from '../assets/userData.json';

import FriendList from './FriendList/FriendList';
import friends from '../assets/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../assets/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
