import {configureStore} from "@reduxjs/toolkit";
import languageSlice from "./language-slice";

export let store = configureStore({
	reducer: {
		languageSlice,
	},
});
