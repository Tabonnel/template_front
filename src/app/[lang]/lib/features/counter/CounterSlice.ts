// reducer TEST

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
export interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

// Exemple d'utilisation du reducer :

// "use client";
// import React from "react";
// import { increment, decrement } from "@lib/features/counter/CounterSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";

// type Props = {};

// export default function Esport({}: Props) {
//   const dispatch = useAppDispatch();
//   // Récupération directe de la valeur numérique du compteur
//   const count = useAppSelector((state) => state.counter.value);
//   console.log(count); // Cette ligne affichera désormais un nombre

//   const handleIncrement = () => {
//     dispatch(increment());
//   };

//   const handleDecrement = () => {
//     dispatch(decrement());
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }
