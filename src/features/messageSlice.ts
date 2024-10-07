import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showContact: false
}
  
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        toggleShowContact: (state: any) => {
            return {
              ...state,
              showContact: !state.showContact
            };
          },
    }
})

export const {toggleShowContact} = messageSlice.actions
export default messageSlice.reducer