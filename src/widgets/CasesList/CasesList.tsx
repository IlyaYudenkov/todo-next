
import React, { FC } from 'react'
import cl from './_CasesList.module.scss'
import { ICase } from '@/shared/types/interfaces'
import CaseItem from '@/entities/CaseItem/CaseItem'



const CasesList: FC = () => {
    const cases: ICase[] = [
        {
            id: 1,
            userId: 1,
            text: 'wash the dishes',
            status: 'false'
        },
        {
            id: 2,
            userId: 1,
            text: 'do the workout',
            status: 'true'
        }
    ]

    return (
        <ul className={cl.caseList}>
            {cases.map(caseItem => (
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