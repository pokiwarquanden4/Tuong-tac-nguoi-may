import { createSlice } from '@reduxjs/toolkit'

export interface modeInterface {
    isFamilyMode: boolean
}

const initialState: modeInterface = {
    isFamilyMode: false,
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state, value) => {
            state.isFamilyMode = value.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMode } = modeSlice.actions

export default modeSlice.reducer