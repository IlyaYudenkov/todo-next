import React, { FC, RefObject } from 'react'
import cl from './_Input.module.scss'

interface IInput {
    type: string,
    label: string,
    name: string,
    placeholder: string,
    defaultValue?: string
}


const Input: FC<IInput> = ({ type, label, name, placeholder, defaultValue  }) => {
    return (
        <>
            <label className={cl.label}>{label}</label>
            <input
                type={type}
                name={name}
                className={cl.input}
                placeholder={placeholder} 
                defaultValue={defaultValue}/>
        </>

    )
}

export default Input