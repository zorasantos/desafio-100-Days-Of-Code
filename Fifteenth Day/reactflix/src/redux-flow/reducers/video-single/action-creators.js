import { SELECT_VIDEO_SINGLE } from "./action";

export const selectVideoSingle = (id) => ({
    type: SELECT_VIDEO_SINGLE,
    payload: { id }
})