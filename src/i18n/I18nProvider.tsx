'use client'

import { getCookie } from '@/core/generic/cookies'
import isBrowser from '@/core/generic/is-browser'
import type { i18n } from 'i18next'

let client: i18n

function I18nProvider({
  lang,
  children
}: React.PropsWithChildren<{
  lang?: string
}>) {
  if (!client) {
    throw withI18nClient(lang)
  }

  return children
}

export default I18nProvider

async function withI18nClient(lang?: string) {
  if (isBrowser()) {
    client = await loadClientI18n(lang)
  } else {
    const { default: initialize18n } = await import('@/i18n/i18n.server')

    client = await initialize18n(lang)
  }
}

async function loadClientI18n(lang: string | undefined): Promise<any> {
  const language = lang ?? getCookie('lang')
  const { default: initializeI18n } = await import('@/i18n/i18n.client')

  return initializeI18n(language)
}
