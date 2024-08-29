import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./ThemeManager'), { ssr: false })
export { NoSSR as NoSSThemeManager }
