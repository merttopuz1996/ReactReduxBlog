import React, { Component } from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {deletePost} from '../aciton/deleteAction'
 class Post extends Component {
    //  props={
    //  post:null
//  id:null
    //  }
    //  componentDidMount() {
                
    //          let id =this.props.match.params.post_id;
    //          axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //          .then(
    //            res =>{
    //             //    console.log(res)
    //            this.setprops({
    //              post:res.data
    //              // propsdeki post artık dönen data
    //            });
    //            }
    //            )

    //     //   this.setprops({
    //     //       id:id
    //     //   })
            

    //  }
     
    handleClick =()=>{
        this.props.deletePost(this.props.post.id)
    // anasayfaya force etme anasayfaya gider sildiğimiz an
    this.props.history.push('/');
    }
    render() {
        const post=this.props.post ? (
            <div className="post">
            <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
            <button onClick={this.handleClick} className="btn grey">DELETE</button>
        </div>
        </div>
        ):(
            <div className="center">
            Loading Post
        </div>
       
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps =(state,ownProps)=>
{
    // id ye eriştik
   let id = ownProps.match.params.post_id;
   return{
    //    id yi dönmesi için
       post:state.posts.find(post=>post.id ===id)
   }
}
const mapDispatchToProps =(dispatch)=>
{
    
   return{
       deletePost :  (id) =>dispatch(deletePost(id))
    //    dispatch({type:'DELETE_POST',id:id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);