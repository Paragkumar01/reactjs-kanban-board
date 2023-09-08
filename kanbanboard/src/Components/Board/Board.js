import React from 'react';
import "./Board.css";
import { MoreHorizontal, Plus} from 'react-feather';

import Card from '../Card/Card'

const Board = ( props ) => {

    const logoReference = {
        "Backlog": <img src="https://cdn-icons-png.flaticon.com/128/8894/8894120.png" className='logo-pic' alt="Backlog" />,
        "Todo": <img src="https://cdn-icons-png.flaticon.com/128/2387/2387635.png" className='logo-pic' alt="Todo" />,
        "In progress": <img src="https://cdn-icons-png.flaticon.com/128/7154/7154465.png" className='logo-pic' alt="In progress" />,
        "Done": <img src="https://cdn-icons-png.flaticon.com/128/8832/8832119.png" className='logo-pic' alt="Done" />,
        "Cancelled": <img src="https://www.bing.com/th?id=OIP.JsBvuWtHTjBAAV9F3owz2QHaHt&w=150&h=156&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='logo-pic' alt="Cancelled" />
    };

  return (
    <div className='board'>
        <div className='board-top'>
            <div className='board-top-left'>
                {props.groupingOption === "status" && logoReference[props.title]}
                <p className='board-title bold'>{props.title}</p>
                <span className='board-count'>{props.count}</span>
            </div>
            <div className='board-top-right'>
                <MoreHorizontal className='icon'/>
                <Plus className='icon'/>
            </div>
        </div>
        <div className='card-container'>
            {props.tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} groupBy={props.groupingOption} users={props.users} />
            ))}
        </div>
    </div>
  );
};

export default Board