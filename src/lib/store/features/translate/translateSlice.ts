import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";
import { GlobalDictionary, WordTranslation } from "./translateApi.model";

const initialState: GlobalDictionary = {};

export const TranslateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setNewWord(state, action: PayloadAction<string>){
            state[action.payload] = {
                ru: action.payload,
                en: ''
            }
        },
        setTranslation(state, action: PayloadAction<WordTranslation>){
            state[action.payload.word].en = action.payload.translation
        },
    }
})

export const TranslateReducer = TranslateSlice.reducer;


