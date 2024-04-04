//import { $host, $translateHost } from "../../../../http";
import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import { ITranslateRequest, ITranslateResponse } from "../../../../lib/store/features/translate/translateApi.model";


export const translateAPI = createApi({
    reducerPath: 'translateAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bbplace.ru' + '/translate/Translation'
    }),
    endpoints: (build) => ({
        translate: build.mutation<ITranslateResponse, ITranslateRequest>({
            query: (body) => ({
                url: '/TranslateText',
                method: 'POST',
                body,
            })
        })
    })
})

