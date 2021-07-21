import { createSlice, configureStore } from '@reduxjs/toolkit'

const intialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: intialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter++
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = {
    isAuthenticed: false
}

const authSlice = createSlice({
    name: 'Authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticed = true
        },
        logout(state) {
            state.isAuthenticed = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store
