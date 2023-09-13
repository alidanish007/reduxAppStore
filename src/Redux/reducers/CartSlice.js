import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {AsyncStorage} from 'react-native';
const cartSlice = createSlice({
  name: 'cartSlice',

  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.orderQuantity++;
      } else {
        state.cart.push({...action.payload, orderQuantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      item.orderQuantity++;
      // console.log('price cart slice', item.price * item.orderQuantity);
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item.orderQuantity === 0) {
        item.orderQuantity = 0;
      } else {
        item.orderQuantity--;
      }
      // console.log('dec price cart slice', item.price * item.orderQuantity);
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(item => item.id !== action.payload);
      state.cart = removeItem;
    },
    emptyCart: state => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  emptyCart,
} = cartSlice.actions;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

// const cartReducer = persistReducer(persistConfig, cartSlice);
export default persistReducer(persistConfig, cartSlice.reducer);
