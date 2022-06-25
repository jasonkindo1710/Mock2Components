import authReducer from "./Auth/AuthSlice"
import productReducer from "./Products/ProductSlice"
import categoryReducer from "./Categories/reducer"
import { encryptTransform } from "redux-persist-transform-encrypt";
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

  const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
    }),
  ],
};
const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;