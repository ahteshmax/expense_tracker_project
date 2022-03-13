import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "../../useTransactions";

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  const dataInfo = [];

  //chartData.datasets.map((data1) => <div> {data1.data[0]+chartData.labels[0]}</div>);

  const dataFun =()=>{
    const str = []
    for(let i = 0; i < chartData.labels.length; i++){
      dataInfo.push(chartData.labels[i] + " = " + chartData.datasets[0].data[i])
    }
    return dataInfo
  }

  dataFun()
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
        <Typography variant="h5">{dataInfo.map(d => <li key={d.index} style={{fontSize: 18, color: 'black', lineHeight : 1.5, padding: 1 }} > {d} </li>)}</Typography>

    
        {console.log(chartData.labels)}
        {console.log(chartData.datasets)}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
