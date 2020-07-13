const initState =
{
    posts:[
        {id:'1',title:'mert topuz şdjfd', body:'lorem şaşossj şskdşasdasşafjafa'},
        {id:'2',title:'mert topuz şdjfd', body:'lorem şaşossj şskdşasdasşafjafa'},
        {id:'3',title:'mert topuz şdjfd', body:'lorem şaşossj şskdşasdasşafjafa'}
    ]
}

const rootReducer =(state=initState,action) =>
{
    // console.log(action);
    if(action.type === 'DELETE_POST'){
       let newPost =state.posts.filter(post =>{
           return post.id !==action.id
        //    post id si aciton id ye eşit olmayanları geri dön
       });
       return {
        ...state,   
        posts:newPost

       }
    }
 return state;


}
export default rootReducer;