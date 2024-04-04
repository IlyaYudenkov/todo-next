'use client'

import { FC, ReactNode, useEffect, useState } from "react"
import cl from './_T.module.scss'
import { translateAPI } from "../api/TranslateApi"
import { useLocale } from "next-intl"
import { LOCALES } from "../model/locales.model"

interface IT {
    children: ReactNode,
}

export const T: FC<IT> = ({ children }) => {

    const [fetchTranslate] = translateAPI.useTranslateMutation()

    const [word, setWord] = useState<string>(String(children))
    
    const [translation, setTranslation] = useState<string>('')

    const locale = useLocale();

    useEffect(() => {
        if (locale === LOCALES.ENGLISH) {
            translate(word);
        } else {
            setTranslation('');
        }
    }, [locale, word])

    const translate = async (word: string) => {
        try {
            const newTranslation = await fetchTranslate({ targetLanguage: locale, text: [word] }).unwrap()

            if (newTranslation.translations && newTranslation.translations.length > 0 && newTranslation.translations[0].text) {
                setTranslation(newTranslation.translations[0].text);

            } else {
                setTranslation(''); 
            }
        } catch (error) {
            console.error("Translation failed:", error);
            setTranslation('');
        }
    }

    return (
        <div className={cl.T}>
            {translation || word}
        </div>
    )
}
