export interface ITranslateRequest {
    text: string[]
    targetLanguage: string
}


export type ITranslateResponse = {
    translations: {
        text: string
        detectedLanguageCode: string
    }[]
}

//TRANSLATE SLICE

interface WordTranslations {
    ru: string
    en: string
}

export type GlobalDictionary = Record<string, WordTranslations>

export type WordTranslation = {
    word: string
    translation: string
}