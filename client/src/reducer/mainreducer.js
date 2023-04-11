const mainreducer=(state,action)=>{
    const {type,payload}=action
    switch(type)
    {
        case 'ADD_MOVIE':{

        }
        default:return state;
    }
}
export default mainreducer;