import CreateNewCase from '@/widgets/CreateNewCase/CreateNewCase';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: 'TodoNext | CreateNewCase',
    description: 'Generated by create next app',
}


export default function CreateNewCasePage () {
  const t = useTranslations('NewPage')


  return (
    <div>
        <h1>{t('newTitle')}</h1>
        <CreateNewCase/>
    </div>
  )
}
