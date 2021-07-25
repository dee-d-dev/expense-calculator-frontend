import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({text, amount, id, key}) => {
    const {deleteTransaction} = useContext(GlobalContext)
      const sign = amount < 0 ? "-" : "+";
      const classSign = amount < 0 ? "minus" : "plus";

    return (
      <div>
        <li class={classSign} key={key}>
          {text} <span>{sign}₦{Math.abs(amount)}</span>
          <button onClick={()=>deleteTransaction(id)} class="delete-btn">x</button>
        </li>
      </div>
    );
}

export default Transaction
