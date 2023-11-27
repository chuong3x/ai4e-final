// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const submitDataApi = createApi({
  reducerPath: "submitDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    submitData: builder.mutation<IServerResponse<number[]>, IPredictPayload>({
      query: (payload) => ({
        url: `predict`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSubmitDataMutation } = submitDataApi;
