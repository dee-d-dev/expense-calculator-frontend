import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transaction) => (
          <Transaction id={transaction.id} text={transaction.text} amount={transaction.amount} key={transaction.id}/>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
