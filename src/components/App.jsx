import { useState } from 'react';
import './App.css';



import FriendList from './Friendlist/FriendList';
import friends from '../assets/friends.json';

import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../assets/transactions.json';

export default function App() {
  return (
    <>
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
