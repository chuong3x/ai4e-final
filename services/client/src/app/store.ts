import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../rtk/slices/counter.slice";
import { submitDataApi } from "../rtk/queries/submit.api";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [submitDataApi.reducerPath]: submitDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([submitDataApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
