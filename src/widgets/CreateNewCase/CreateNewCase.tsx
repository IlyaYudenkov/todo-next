import Button from '@/shared/UI/Button/Button'
import Input from '@/shared/UI/Input/Input'
import { createCase } from './lib/serverActions';

export default function CreateNewCase() {
  return (
    <form action={createCase}>
        <Input type='text' placeholder='Enter the text' name='text' label=''/>
        <Button type='submit' text='Create'/>
    </form>

  )
}

