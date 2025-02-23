import React from 'react';
import './App.css';



import FriendList from './FriendList';
import friends from '../assets/friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../assets/transactions.json';

export default function App() {
  return (
    <>
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
