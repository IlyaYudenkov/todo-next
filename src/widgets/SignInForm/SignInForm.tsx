'use client'

import Button from '@/shared/UI/Button/Button';
import React, { useRef } from 'react';
import cl from './_SignInForm.module.scss'
import Input from '@/shared/UI/Input/Input';

const SignInForm = () => {
   
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)


    const logIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const emailValue = formData.get('email') as string;
            const passwordValue = formData.get('password') as string;
      
            console.log('Email:', emailValue);
            console.log('Password:', passwordValue);
          }        
        

        
    }
  return (
    <form className={cl.signIn} onSubmit={logIn} ref={formRef}>
        <Input type='email' label='Enter your email' name='email' placeholder='Email' />
        <Input type='password' label='Enter your password' name='password' placeholder='Enter your password' />
        <Button text='SignIn'/>
    </form>
  )
}

export default SignInForm