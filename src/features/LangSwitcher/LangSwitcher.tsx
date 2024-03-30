import {useLocale, useTranslations} from 'next-intl';
import {locales} from './lib/langSwitcher.lib';
import {LangSwitcherSelect} from './ui/LangSwitcherSelect';

export default function LangSwitcher() {
  const t = useTranslations('Common');
  const locale = useLocale();
  

  return (
    <LangSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LangSwitcherSelect>
  );
}