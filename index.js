const redux = require("redux")
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE" 
const BUY_ICECREAM = "BUY ICECREAM"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}

const initalState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const store =  createStore(reducer)
console.log("Inital state", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()