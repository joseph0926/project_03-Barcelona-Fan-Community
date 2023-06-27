import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/users",
  }),
  endpoints(builder) {
    return {
      signup: builder.mutation({
        query: (user) => {
          return {
            url: "/signup",
            method: "POST",
            body: {
              email: user.email,
              password: user.password,
              name: user.name,
            },
          };
        },
      }),
      signin: builder.mutation({
        query: (user) => {
          return {
            url: "/signin",
            method: "POST",
            body: {
              email: user.email,
              password: user.password,
            },
          };
        },
      }),
      verifyEmail: builder.mutation({
        query: ({ token, email }) => {
          return {
            url: "/verify-email",
            method: "POST",
            body: {
              email,
              verificationToken: token,
            },
          };
        },
      }),
    };
  },
});

export const { useSignupMutation, useSigninMutation, useVerifyEmailMutation } =
  userApi;

export { userApi };
