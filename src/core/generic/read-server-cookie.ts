import type { cookies as CookiesType } from 'next/headers'

type Cookie = {
  value?: string
}

type CookiesWithGetMethod = {
  get(key: string): Cookie | undefined
}

type StringObject = {
  [key: string]: string | undefined
}

export type AnyCookies = CookiesWithGetMethod | StringObject

async function readServerCookie(cookies: AnyCookies, key: string): Promise<string | undefined> {
  if ('get' in cookies && typeof cookies.get === 'function') {
    const cookie = cookies.get(key)
    return cookie?.value
  }

  return (cookies as StringObject)[key]
}

export default readServerCookie
