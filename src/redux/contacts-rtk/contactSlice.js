import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    tagTypes: ['contacts'],
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,

      providesTags: ['contacts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
} = contactsApi;
