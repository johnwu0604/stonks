import './App.css'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import data from './data/data.json'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const content = data.map( data => {
  return (
    <h1>{data.symbol}</h1>
  )
})

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const App = () => {

  const classes = useStyles()

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Current Price ($)</TableCell>
              <TableCell align="right">52-Week High</TableCell>
              <TableCell align="right">52-Week Low</TableCell>
              <TableCell align="right">5-Yr Avg Dividend</TableCell>
              <TableCell align="right">Avg Daily Volume</TableCell>
              <TableCell align="right">Quick Ratio</TableCell>
              <TableCell align="right">Revenue Per Share</TableCell>
              <TableCell align="right">Recommendation Key</TableCell>
              <TableCell align="right">Forward PE</TableCell>
              <TableCell align="right">Forward EPS</TableCell>
              <TableCell align="right">Dividend Yield</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.symbol}>
                <TableCell component="th" scope="row">
                  {row.symbol}
                </TableCell>
                <TableCell align="right">{row.shortName}</TableCell>
                <TableCell align="right">{row.currentPrice}</TableCell>
                <TableCell align="right">{row.fiftyTwoWeekHigh}</TableCell>
                <TableCell align="right">{row.fiftyTwoWeekLow}</TableCell>
                <TableCell align="right">{row.fiveYearAvgDividendYield}</TableCell>
                <TableCell align="right">{row.averageDailyVolume10Day}</TableCell>
                <TableCell align="right">{row.quickRatio}</TableCell>
                <TableCell align="right">{row.revenuePerShare}</TableCell>
                <TableCell align="right">{row.recommendationKey}</TableCell>
                <TableCell align="right">{row.forwardPE}</TableCell>
                <TableCell align="right">{row.forwardEps}</TableCell>
                <TableCell align="right">{row.dividendYield}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
