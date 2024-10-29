import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Classes
export const fetchClasses = createAsyncThunk(
    'class/fetchClasses',
    async () => {
        const response = await axios.get('http://localhost:8000/classes');
        return response.data;
    }
);

// Create Class
export const createClass = createAsyncThunk(
  'class/createClasses',
  async (classData) => {
      
          const response = await axios.post('http://localhost:8000/classes', classData,{
            headers: {
                'Content-Type': 'application/json',
            }})
          return response; 
     
  }
);

const initialState = {
    allClass: [],
    singleClass:undefined,
    loading: false,
    error: null,
};

const ClassSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {
        // Change this to match your intention
        setSingleClass: (state, action) => {
            state.singleClass=action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClasses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClasses.fulfilled, (state, action) => {
                state.loading = false; 
                console.log(action.payload);
                
                state.allClass = action.payload;
            })
            .addCase(fetchClasses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })



            .addCase(createClass.pending, (state) => {
                state.loading = true; // Set loading to true when creating a class
            })
            .addCase(createClass.fulfilled, (state, action) => {
                state.loading = false;                
                state.allClass.push(action.payload); // Assuming action.payload is the new class
            })
            .addCase(createClass.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                
                state.error = action.error.message; 
            });


    }
});

export const { setSingleClass } = ClassSlice.actions;
export default ClassSlice.reducer;
