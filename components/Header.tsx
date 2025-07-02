// components/Header.tsx
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Header() {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <header className="text-center py-5 border-b border-gray-700 bg-gray-900">
      <h1 className="text-2xl font-bold text-primary">𝐋𝐨𝐤𝐥𝐞𝐚𝐤𝐬 𝐄𝐧𝐠𝐢𝐧𝐞</h1>
      <nav className="mt-3 flex justify-center gap-5 text-sm text-gray-400">
        <Link href="/submit">{t('submit')}</Link>
        <Link href="/dashboard">{t('dashboard')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/faq">{t('faq')}</Link>
        <Link href="/disclaimer">{t('disclaimer')}</Link>
        <span className="text-primary">Filed: 1356</span>
      </nav>
    </header>
  )
}