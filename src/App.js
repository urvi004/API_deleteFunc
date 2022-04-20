import React from 'react';  
    
import axios from 'axios';  
    
export default class App extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`https://jsonplaceholder.typicode.com/posts`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div className="App">  
        <h1> Fetched Data from APi</h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>UserID</th>
				  <th>ID</th>    
                  <th>Title</th>  
                  <th>Body</th>  
                  <th>Action</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.userId}</td> 
				  <td>{post.id}</td>  
                  <td>{post.title}</td>  
                  <td>{post.body}</td>  
                  <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
 