import {createSlice} from "@reduxjs/toolkit";

let initialState = {
	lang: `eng`,
};

let languageSlice = createSlice({
	name: `lang`,
	initialState,
	reducers: {
		getLang(state, {payload}) {
			state.lang = payload;
		},
	},
});

export let {getLang} = languageSlice.actions;
export default languageSlice.reducer;
