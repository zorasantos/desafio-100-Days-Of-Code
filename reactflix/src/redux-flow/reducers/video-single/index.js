import createReducer from '../create-reducer'
import { SELECT_VIDEO_SINGLE } from '../video-single/action'

const initialState = ''

const videoSingle = createReducer(initialState, {
    [SELECT_VIDEO_SINGLE]: (state, action) => action.payload.id
})

export default videoSingle