'use client';

import { useLocale } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';


type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
  };

export const LangSwitcherSelect = ({
    children,
    defaultValue,
    label
  }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

   const locale = useLocale();


  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      const nextLocale = e.target.value;
      router.push(pathname.replace(locale, nextLocale).toString());
    })
  };
  return (
    <label
  >
    <p>{label}</p>
    <select
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
    <span>⌄</span>
  </label>
  );
}