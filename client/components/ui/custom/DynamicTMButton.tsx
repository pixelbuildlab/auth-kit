import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./ThemeManager'), { ssr: false })

function ThemeManagerContainer() {
  return (
    <>
      <div className='h-11 w-full'>
        <NoSSR />
      </div>
    </>
  )
}
export { ThemeManagerContainer as NoSSThemeManager }
