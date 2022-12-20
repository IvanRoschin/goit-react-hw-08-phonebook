import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors

export const getFilter = state => state.filter;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const filterApi = createApi({
//   reducerPath: 'filterApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://638f9f3c4bfe20f70ad6291a.mockapi.io',
//     tagTypes: ['filter'],
//   }),
//   endpoints: builder => ({
//     getFilter: builder.query({
//       query: () => `/filter`,
//       transformErrorResponse: response => response.filter.value,
//       providesTags: ['filter'],
//     }),
//     addFilter: builder.mutation({
//       query: value => ({
//         url: '/filter',
//         method: 'POST',
//         body: {
//           filter: value,
//         },
//       }),
//       invalidatesTags: ['filter'],
//     }),
//   }),
// });

// export const { useGetFilterQuery, useAddFilterMutation } = filterApi;
