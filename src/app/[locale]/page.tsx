import { useTranslations } from "next-intl"

  export default function Home() {

    const t = useTranslations('MainPage')

  return (
    <h1>{t('mainTitle')}</h1>
  )
}

