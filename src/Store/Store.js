import { configureStore, createSlice } from "@reduxjs/toolkit"

const firstState={counter:0,showCounter:true}
const counterSlice=createSlice({
    name:'counter',
    initialState:firstState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter
        }
    }
})
const authInitialState={login:false}
const authSlice=createSlice({
    name:'authentication',
    initialState:authInitialState,
    reducers:{
        loginHandler(state){
            state.login=true
        },
        logoutHandler(state){
            state.login=false
        }
    }
})
const Store=configureStore({reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}})
export const counterActions=counterSlice.actions
export const authActions=authSlice.actions
export default Store;