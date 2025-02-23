import { useState } from 'react';
import './App.css';

import Profile from './components/Profile/Profile';
import userData from './assets/userData.json';

import FriendList from './components/Friendlist/FriendList';
import friends from './assets/friends.json';

import TransactionHistory from './components/Transaction/TransactionHistory';
import transactions from './assets/transactions.json';

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
