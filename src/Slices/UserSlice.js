import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users:
    null
//    {
//     name:'shijo'
//    }
    
}

export const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        setUsers:(state,action)=>{
          state.users=action.payload
        },
        removeUser:(state,action)=>{
            state.users=null
        }
    }
    
})

export const {setUsers,removeUser} = userSlice.actions
export default userSlice.reducer