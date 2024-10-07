import {combineReducers, configureStore} from '@reduxjs/toolkit';
import messageReducer from './features/messageSlice'

const rootReducer = combineReducers({
    message: messageReducer,
});

export const store = configureStore({
    reducer: rootReducer
})