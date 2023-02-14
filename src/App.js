import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const nayoks = ['Anwar','Alomgir','Salman Sha','Alomgir','Bappi','Suvo'];

 const products = [
  {name:'Photoshop',price:'$90.99'},
  {name:'Illustator',price:'$60.99'},
  {name:'PDF reader',price:'$6.99'}
]

// const productsName = products.map(product => product);
// console.log(productsName);

const nameStyle = {
  margin : '10px',
  padding : '10px',
  border : '1px solid gray',
  borderRadius : '5px',
  backgroundColor : 'lightgray',
  height : '200px',
  width : '200px',
}


const nameStyle2 = {
  width : '550px',
  border : '1px solid red',
  margin : '10px',
  padding : '15px'
}





  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>

        <Counter></Counter>


        <Users></Users>
        <Post></Post>

      <ul >
        {
          nayoks.map(nayok => <div style={nameStyle2}>{nayok}</div>)
        }
      </ul>

      <ul>
        {
          products.map(product => <div style={nameStyle}><h2>{product.name}</h2> <h4>{product.price}</h4> <button>Buy Now</button></div>)
        }
      </ul>

      
    
        
      </header>
    </div>
  );
}

// function Person(props){

//   const nameStyle = {
//     width : '550px',
//     border : '1px solid red',
//     margin : '10px',
//     padding : '15px'
//   }
//   return (
//     <div style={nameStyle}>
//       <h2>My Name : {props.name}</h2>
//       <h3>My Profetion : {props.price}</h3>
//     </div>
//   )
// }
 


// function Products(prop){

//   const productsStyle = {
//     border : '1px solid gray',
//     borderRadius : '5px',
//     backgroundColor : 'lightgray',
//     height : '250px',
//     width : '250px',
//     margin : '5px',
//     float : 'left'

//   }

//   const {name, price} = prop.product;

//   return (
//     <div style={productsStyle}>
//       <h2>{name}</h2>
//       <h3>{price}</h3>
//       <button>Buy Now</button>
//     </div>
//   )
// }

function Counter(){

  const [count, setCount] = useState(10);

  return(

    <div>
      <h2>Count : {count}</h2>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
    </div>
    
  )
}


function Users (){

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    
    <div>
      <h3>DynamicUsers : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Post(){

  const [post, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  

  return(
    <div>
      <h2>Posts : {post.length}</h2>
      {
        post.map(post=> <li>{post.title}</li>)
      }
    </div>
  )
}


export default App;
