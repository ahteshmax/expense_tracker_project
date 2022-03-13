import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { useSpeechContext } from '@speechly/react-client';
import Snackbar from '../../Snackbar/Snackbar';
import formatDate from '../../../utils/formatDate';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import useStyles from './styles';


const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
const addCatName = "";


//const incomeCategorieslocalData =  JSON.parse(window.localStorage.getItem('incomeCategorieslocal'));
const incomeCategorieslocalData =  JSON.parse(window.localStorage.getItem('incomeCategorieslocal')) === null ? incomeCategories : JSON.parse(window.localStorage.getItem('incomeCategorieslocal'));
// const incomeCategorieslocalData =  JSON.parse(window.localStorage.getItem('incomeCategorieslocal')) === null ? incomeCategories : JSON.parse(window.localStorage.getItem('incomeCategorieslocal'));
const expenseCategorieslocalData =  JSON.parse(window.localStorage.getItem('expenseCategorieslocal')) === null ? expenseCategories : JSON.parse(window.localStorage.getItem('expenseCategorieslocal'));
//const expenseCategorieslocalData =  JSON.parse(window.localStorage.getItem('expenseCategorieslocal'));
console.log(incomeCategorieslocalData)
const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};


const NewTransactionForm = () => {

 useEffect(() => {
 //  incomeCategorieslocalData =  JSON.parse(window.localStorage.getItem('incomeCategorieslocal')) === null ? incomeCategories : JSON.parse(window.localStorage.getItem('incomeCategorieslocal'));
  // const incomeCategorieslocalData =  JSON.parse(window.localStorage.getItem('incomeCategorieslocal')) === null ? incomeCategories : JSON.parse(window.localStorage.getItem('incomeCategorieslocal'));
 //  expenseCategorieslocalData =  JSON.parse(window.localStorage.getItem('expenseCategorieslocal')) === null ? expenseCategories : JSON.parse(window.localStorage.getItem('expenseCategorieslocal'));

},[incomeCategorieslocalData,expenseCategorieslocalData])

  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const [addCatName, setAddCatName] = useState("");
  const { segment } = useSpeechContext();
  const [open, setOpen] = React.useState(false);

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

    if (incomeCategorieslocalData.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: 'Income' });
    } else if (expenseCategorieslocalData.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: 'Expense' });
    }

    setOpen(true);
    addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setFormData(initialState);
  };



  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' });
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' });
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        return createTransaction();
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        return setFormData(initialState);
      }

      segment.entities.forEach((s) => {
        const category = `${s.value.charAt(0)}${s.value.slice(1).toLowerCase()}`;

        switch (s.type) {
          case 'amount':
            setFormData({ ...formData, amount: s.value });
            break;
          case 'category':
            if (incomeCategorieslocalData.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Income', category });
            } else if (expenseCategorieslocalData.map((iC) => iC.type).includes(category)) {
              setFormData({ ...formData, type: 'Expense', category });
            }
            break;
          case 'date':
            setFormData({ ...formData, date: s.value });
            break;
          default:
            break;
        }
      });

      if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
        createTransaction();
      }
    }
  }, [segment]);



  const selectedCategories = formData.type === 'Income' ? incomeCategorieslocalData : expenseCategorieslocalData;

  const addCategories =() =>{
    // window.localStorage.setItem('incomeCategorieslocal', JSON.stringify(incomeCategories));
    // window.localStorage.setItem('expenseCategorieslocal', JSON.stringify(expenseCategories));
    // incomeCategories.push({ type: addCatName.addCatName, amount: 0, color: incomeColors[0] },)
    formData.type === 'Income' ?    window.localStorage.setItem('incomeCategorieslocal', JSON.stringify([...incomeCategorieslocalData,  { type: `${addCatName}`, amount: 0, color: incomeColors[Math.floor(Math.random() * (7 - 0))] },]))
     :    window.localStorage.setItem('expenseCategorieslocal', JSON.stringify([...expenseCategorieslocalData,  { type: `${addCatName}`, amount: 0, color: expenseColors[Math.floor(Math.random() * (7 - 0))] },]));
  

     window.location.reload();
  }


  return (
    <Grid container spacing={2}>
      <Snackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
        {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
         {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>


      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
      
      {/* <TextField type="text" label="Name Of Category" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth /> */}
        <TextField type="text" label="Category Name"  onChange={(e) => setAddCatName(e.target.value)} fullWidth />
      </Grid>

      {/* <Grid item xs={6}>
      <InputLabel>Pick Color</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem style={{fontSize: 18, color: `${c.color}`,  padding: 1 }} key={c.color} value={c.color}>{c.color}</MenuItem>)}
          </Select>
      </Grid> */}
      
  
      <Button className={classes.buttonAdd} variant="outlined" color="primary" fullWidth onClick={addCategories}>Add Categore</Button>

    </Grid>
  );
};

export default NewTransactionForm;
