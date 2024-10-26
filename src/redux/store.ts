import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

import searchProductReducer from "./features/products/searchProduct.slice";
import productSortReducer from "./features/products/productSort.slice";
import categoryfilterReducer from "./features/products/categoryFilter.slice";
import productCardReducer from "./features/myCart/myCart.slice";
import resetSliceReducer from "./features/products/resetFilter.slice"
import adminInfoReducer from "./features/auth/AdminAuthSlice"
import priceRangeReducer from "./features/products/priceRange.slice"
import userInFoReducer from "./features/auth/User/userAuthSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const myCartpersistConfig = {
  key: "myCart",
  storage,
};
const adminInfoConfig = {
  key: "admin",
  storage,
};
const userInfoConfig = {
  key: "user",
  storage,
};

const persistedmyCart = persistReducer(myCartpersistConfig, productCardReducer);
//persistedadmin
const persistedmyadmin = persistReducer(adminInfoConfig, adminInfoReducer);
const persistedUser = persistReducer(userInfoConfig, userInFoReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    productCard: persistedmyCart,
    searchProduct: searchProductReducer,
    sortProduct: productSortReducer,
    priceRange:priceRangeReducer,
    categoryFilter: categoryfilterReducer,
    resetFilter: resetSliceReducer,
    adminLoginInfo:persistedmyadmin,
    userLoginInfo:persistedUser
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
