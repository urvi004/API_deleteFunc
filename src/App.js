import React, {useEffect, useState} from "react";
import './App.css';

function App(){
  const [users,setUsers]= useState([])
  useEffect(() => {
    getUsers()
  },[])

  function getUsers()
    {
    
      fetch("https://jsonplaceholder.typicode.com/posts").then((result) =>{
        result.json().then((resp)=>{
          //console.warn("result",resp)
          setUsers(resp)
        })
      })
    }
  


  console.warn(users)

  function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/posts ${id}`,{
      method: "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getUsers()
       
      })
    })
    }
  
  return(
    <div className="App">
      <h1>users data</h1>
      <table border = "1">
        <tbody>
        <tr>
          <td>userId</td>
          <td>ID</td>
          <td>Title</td>
          <td>Body</td>
          <td>operations</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
          <td>{ item.userId }</td>
          <td>{ item.id }</td>
          <td>{ item.title }</td>
          <td>{ item.body }</td>
          <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
        </tr>

          )
        }
        </tbody>
      </table>
    </div>
  )
}
//hi



export default App;




