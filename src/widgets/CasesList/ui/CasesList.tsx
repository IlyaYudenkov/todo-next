import React, { FC } from 'react'
import cl from './_CasesList.module.scss'
import CaseItem from '@/entities/CaseItem/CaseItem'
import { ICase } from '@/shared/types/interfaces'


interface ICasesList{
    casesList: ICase[]
}

const CasesList: FC<ICasesList> = ({casesList}) => {

    return (
        <ul className={cl.caseList}>
            {casesList && casesList.map(caseItem => (
                <CaseItem key={caseItem.id}
                    id={caseItem.id}
                    text={caseItem.text}
                    userId={caseItem.userId}
                    status={caseItem.status} />
            ))}
        </ul>
    )
}

export default CasesList