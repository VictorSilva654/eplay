import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
  visible: boolean
}

const initialState: CartState = {
  items: [],
  visible: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.visible = true
    },
    close: (state) => {
      state.visible = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
