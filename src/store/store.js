import { configureStore, combineReducers } from '@reduxjs/toolkit'
import datas from './reducers/data.reducers';

const reducers = combineReducers({
    data:datas
})

const store = configureStore(
{reducer:reducers})
export default store;