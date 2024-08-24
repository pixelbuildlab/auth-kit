import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./Header'), { ssr: false })
export { NoSSR as DynamicHeader }
