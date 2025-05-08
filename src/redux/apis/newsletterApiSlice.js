import apiSlice from '../services/apiSlice'

import { NEWSLETTER_URL } from '../constance';
const newsLetterApiSlice = apiSlice.injectEndpoints({
  endpoints: (buil) => ({
    newsLetterSubscribe: buil.mutation({
      query: (email) => ({
        url: `${NEWSLETTER_URL}/`,
        method: "POST",
        body: {email}
      }),
    }),
  })
})

export const {
  useNewsLetterSubscribeMutation
} = newsLetterApiSlice;