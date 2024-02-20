import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	mode: 'dark',
}

export const globalState = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === 'dark' ? 'dark' : 'light'
		},
	},
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer
