import createReducer from '../create-reducer'
import { ADD_VIDEO } from './actions'

const initialState = {}

const videos = createReducer(initialState, {
    [ADD_VIDEO]: (state, action) => ({
        state,
        [action.playload.id]: {
            id: action.playload.id,
            title: action.playload.title
        }
    })
})

export default videos