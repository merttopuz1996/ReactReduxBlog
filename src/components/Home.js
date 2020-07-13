import React, { Component } from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../images.png'
import {connect} from 'react-redux'
class Home extends Component{
  
  // componentDidMount() {
  //   // posts adlı api den sadece ilk 10 veriyi aldık
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(
  //     res =>{console.log(res)
  //     this.setState({
  //       posts:res.data.slice(0,10)
  //       // ilk 10 post datasını aldık
  //     });
  //     }
  //     )

  // }
  
  render(){
    const {posts}=this.props
    const postList = posts.length ? (
      posts.map(post =>{
        return(
          <div className="post card" key ={post.id}>
        <img src={Pokeball} alt =""></img>
          <div className="card-content">
        <Link to={'/'+post.id} >
          {/*başlığa tıkladığında post.id ye git  */}
            <span className="card-title red-text">
             {post.title}
            </span>
            </Link>
        <p>{post.body}</p>
          </div>
        </div>
        )
      })
    ):(
      <div className="center">
        No post to Show
        </div>
    )
    return(

      <div>
      <div className="home container">
             <h4 className="center">Home</h4>
        {postList}
      </div>
      </div>
  )
  
  }
}
const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  }
}
export default connect(mapStateToProps)(Home);
