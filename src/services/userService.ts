import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({ 
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3030/api/v1', 
  
  }), 
  endpoints: (builder) => ({ 
    login: builder.mutation({ 
      query: (credentials) => ({ 
        url: '/login', 
        method: 'POST', 
        body: credentials, 
      }), 
    }), 
  }), 
}); 
 
export const { useLoginMutation } = api; 
 
export default api;