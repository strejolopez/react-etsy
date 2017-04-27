import {createStore} from 'redux'
import etsyReducer from './reducers/etsyReducer'

const store = createStore(etsyReducer)

export default store