import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { isRejectedWithValue } from '@reduxjs/toolkit';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    register: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    login: builder.mutation({
      query: userInfo => ({
        url: '/users/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
        headers: {
          authorization: '',
        },
      }),
    }),
    fetchCurrentUser: builder.query({
      async queryFn(_arg, { getState }, _extraOptions, baseQuery) {
        const persistedState = getState().auth.token;

        if (persistedState === null) {
          console.log('Токена нет');
          return persistedState;
        }

        const result = await baseQuery({
          url: '/users/current',
          method: 'GET',
          headers: { authorization: `Bearer ${persistedState}` },
        });

        return result;
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
} = authApi;
