import LangSwitcher from '@/features/LangSwitcher/LangSwitcher';
import cl from './_Header.module.scss';
import LinkButton from '@/shared/UI/LinkButton/LinkButton';
import { useTranslations } from 'next-intl';

const Header = () => {

  const t = useTranslations('Common')

  return (
    <header className={cl.header}>
            <LinkButton text={t('logOutButton')} path='/signin'/>
            <LinkButton text={t('toCasesButton')} path='/cases'/>
            <LinkButton text={t('toNewButton')} path='/new'/>
            <LangSwitcher/>
     
    </header>
  )
}

export default Header