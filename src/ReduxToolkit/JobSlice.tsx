import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Job} from '../components/Jobs'

interface JobState {
  jobs: Job[];
  searchFilter: string;
  isLoading: boolean;
}

const initialState: JobState = {
  jobs: [],
  searchFilter: '',
  isLoading: true,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
      state.isLoading = false;
    },

    setSearchFilter(state, action: PayloadAction<string>) {
      state.searchFilter = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
        state.isLoading = action.payload
    }
  },
});

export const { setJobs, setSearchFilter, setLoading } = jobSlice.actions;
export default jobSlice.reducer;
