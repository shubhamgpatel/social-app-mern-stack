import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import {  persistStore,  persistReducer,  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

const persistConfig = {
  key: 'root',  storage,
  whitelist: ['auth'], // only persist auth slice (name should be the same we write in createSlice)
};
const rootReducer = combineReducers({ auth: authReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);
//persistReducer(configObject, expects a root reducer, not a slice)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]   } }),
});
const persistor = persistStore(store);

export  {store, persistor };
//❌ Incorrect: if we directly pass authReducer in persisReducer parameters e.g(persistConfig, authReducer), which leads to this structure:
// store.getState() => {
//   user: null,
//   loading: false,
//   error: null
// }
//in your actual app, you access state like this
// const user = useSelector((state) => state.auth.user);
//------------------------------------------
// ✅ Correct Way: Use combineReducers and wrap the root reducer [like above]
//const persistedReducer = persistReducer(persistConfig, rootReducer);
//results in correct shape:
// store.getState() => {
//   auth: {
//     user: null,
//     loading: false,
//     error: null,
//   }
// }