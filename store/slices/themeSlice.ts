import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type State = { mode: 'dark' | 'light' }
const initialState: State = { mode: 'dark' }


const slice = createSlice({
name: 'theme',
initialState,
reducers: {
toggle(state) { state.mode = state.mode === 'dark' ? 'light' : 'dark' },
setMode(state, action: PayloadAction<'dark'|'light'>) { state.mode = action.payload }
}
})


export const { toggle, setMode } = slice.actions
export default slice.reducer