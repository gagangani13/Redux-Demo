const redux=require('redux');
const reducerFunction=(state={counter:0},action)=>{
    if(action.type==='increment'){
        return {counter:state.counter+2}
    }
    if(action.type==='decrement'){
        return {counter:state.counter-2}
    }
};
const store=redux.createStore(reducerFunction);
const subscriptionFunction=()=>{
    const latestState=store.getState()
    console.log(latestState);
}
store.subscribe(subscriptionFunction)
store.dispatch({type:'decrement'})
