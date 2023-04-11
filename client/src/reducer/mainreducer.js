let initialState = [];


if (typeof window !== "undefined") {
  if (localStorage.getItem("movie")) {
    initialState = JSON.parse(localStorage.getItem("movie"));
  } else {
    initialState = [];
  }
}
const mainreducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(action.type)
    {
        case 'ADD_MOVIE':{
        //     console.log([...state.movie])
        //   let movies=[...state]
        //   let index= movies && movies.findIndex(movies=> movies &&movies._id === payload.movie._id)
        //   if(index>-1)
        //   {

        //   }
        //    console.log(movies)
        //    movies.push(...payload.movie)
        //    movies.push("hello")
        
// movies.push({...payload.movie})
        
           
           return action.payload
        }
        default:return state;
    }
}
export default mainreducer;