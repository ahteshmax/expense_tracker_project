import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const deleteCategories = () => {

  localStorage.removeItem("incomeCategorieslocal");
  localStorage.removeItem("expenseCategorieslocal");
  console.log(" cate deleted called")
  window.location.reload(true);
}


const List = () => {
  const classes = useStyles();
  const { transactions, deleteTransaction, deleteAllTransaction} = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem >
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
      <p style={{fontSize: 18, color: 'red',  padding: 1, border: "1px solid red" }}>DELETE_ALL_TRANSACTION<IconButton edge="end" aria-label="delete All" onClick={() => deleteAllTransaction()}>
                <Delete />
              </IconButton></p>
    
              <p style={{fontSize: 18, color: 'red',  padding: 1 , border: "1px solid red" }}>DELETE_Categories <IconButton edge="end" aria-label="delete All" onClick={() => deleteCategories()}>
                <Delete />
              </IconButton></p>
      


    </MUIList>
    
  );
};

export default List;
