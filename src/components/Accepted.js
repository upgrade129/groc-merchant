import React, { Component } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



class App extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    fetch("https://groc-api.herokuapp.com/orders?order_status=Approved")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ todos: data });
        console.log(this.state.todos);
      })
      .catch(console.log);
  }
  // [...]

  useStyles = makeStyles({
    root: {
      minWidth: 500,
      
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

  

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>Accepted List</h1>
          {this.state.todos.map((todo) =>
            (() => {
              if (todo.shop_id === "5f3630a5fee41a005ff2d047") {
                var ordered_items = todo.ordered_items;
                return (
                  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >
          <Card className={this.useStyles.root} >
                    <CardContent>
                      
                      <Typography variant="h5" component="h2">
                        User Name &emsp;:: &emsp;{todo.user_name}
                      </Typography>
                      
                      <Typography variant="body2" component="p">
                        Number of items &emsp;:: &emsp;{ordered_items.length}  &emsp;&emsp;
                         Estimated Price &emsp;:: &emsp;{todo.estimated_price} 
                        
                        
                      </Typography>
                    </CardContent>
                    
                  </Card>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <p>{todo.estimated_price}</p>
        
        </Typography>
        <Divider variant="middle" />
        <Typography>
         
         <TableContainer component={Paper}>
         <Table className={Table} aria-label="customized table">
           <TableHead>
             <TableRow>
               <StyledTableCell>Product Name</StyledTableCell>
               <StyledTableCell align="right">Quantity</StyledTableCell>
               <StyledTableCell align="right">Unit</StyledTableCell>
               <StyledTableCell align="right">Price</StyledTableCell>

             </TableRow>
           </TableHead>
           {ordered_items.map((data, index) => (
           <TableBody>

               <StyledTableRow >
                 <StyledTableCell component="th" scope="row">
                 {data.name}
                 </StyledTableCell>
                 <StyledTableCell align="right">{data.quantity}</StyledTableCell>
                 <StyledTableCell align="right">{data.unit}</StyledTableCell>
                 <StyledTableCell align="right">{data.price}</StyledTableCell>

               </StyledTableRow>

           </TableBody>
           ))}
           <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{todo.estimated_price}</TableCell>
            </TableRow>
         </Table>
         </TableContainer>
   
   </Typography>
        </AccordionDetails>
      </Accordion>
                );
              }
            })()
          )}
        </div>
      </div>
    );
  }
}
export default App;
