import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
// import { green, purple } from '@material-ui/core/colors';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      pendingOrders: [],
      count: 0,
    };
  } 
  // state = {
    
  // };

  checkForUpdatesPeriodically=()=>{
    const count=this.state.count;
    fetch("https://groc-api.herokuapp.com/orders/count")
      .then((res) => res.json())
      .then((data) => {
        if (data > count) {
          this.setState({ count: data });
          fetch("https://groc-api.herokuapp.com/orders?order_status=Pending")
            .then((res) => res.json())
            .then((data) => {
              this.setState({ pendingOrders: data });
            })
            .catch((e) => {
              console.log(e);
            });
          console.log("Data is updated");
        }else{
          console.log("Data is same");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  setOrderCount=()=>{
    fetch("https://groc-api.herokuapp.com/orders/count")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ count: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  fetchData() {
    fetch("https://groc-api.herokuapp.com/orders?order_status=Pending")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pendingOrders: data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.setOrderCount();
    this.fetchData();
    setInterval(this.checkForUpdatesPeriodically, 5000);
  }

  List(ordered_items) {
    var data = [];
    for (var i = 0; i < ordered_items.length; i++) {
      data.push(
        <ol>
          <li>NAME :${ordered_items[i].name}</li>
          <li>NO OF ITEMS :${ordered_items[i].quantity}</li>
          <li>PRICE :${ordered_items[i].price}</li>
        </ol>
      );
    }
    return { data };
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>My orders</h1>
          {this.state.pendingOrders.map((todo) =>
            (() => {
              if (todo.shop_id === "5f392e2a7b25630017007fec") {
                var ordered_items = todo.ordered_items;
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        User Name:{todo.user_name}
                        ## Estimated Price: {todo.estimated_price}
                        ## Total Items: {ordered_items.length}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p>{todo.estimated_price}</p>
                      </Typography>
                      <Divider variant="middle" />
                      <Typography>
                        {ordered_items.map((data, index) => (
                          <p>
                            Item Name:{data.name}
                            <Divider orientation="vertical" flexItem />
                            Item Quantity{data.quantity}
                            <Divider orientation="vertical" flexItem />
                            Item Price:{data.price}
                          </p>
                        ))}
                      </Typography>
                    </AccordionDetails>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        console.log(todo);
                      }}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        console.log(todo);
                      }}
                    >
                      Reject
                    </Button>
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
