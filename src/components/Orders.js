import React, { Component } from 'react';


class App extends Component {
  state = {
    todos: [],
    
  }
  componentDidMount() {
    fetch('https://groc-api.herokuapp.com/orders')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  // [...]
  
  
 List(ordered_items){
  // var tbody ='';   
                       var data =[];
                      for(var i=0 ; i<ordered_items.length ; i++){
                        data.push(<ol><li>NAME :${ordered_items[i].name}</li><li>NO OF ITEMS :${ordered_items[i].quantity}</li><li>PRICE :${ordered_items[i].price}</li></ol>);
                        
                      }
                      return({data});
                   
                    }

  render() {
     

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My orders</h1>
        {this.state.todos.map((todo) => (
            (() => {
               
                if (todo.shop_id === "5f392e2a7b25630017007fec") {
                  var ordered_items = todo.ordered_items;
                  return (
                    <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{todo.user_name}</h5>
                  <p>{todo.estimated_price}</p>
                  <div id="tbody">
                  {ordered_items.map((data,index) =>
                        <ol>
                          <li key={index}>{data.name}</li>
                          <li key={index}>{data.quantity}</li>
                          <li key={index}>{data.price}</li>
                        </ol>
                        
                    )}
                     </div>
                   
                     
                    </div>
                  </div>
                
                  
                   ) }  
            })()
         
        ))}
         
        </div>
       
       </div>
    );
  }
}
export default App;