import I18nProvider from '@/i18n/I18nProvider'
import Footer from './components/Footer'
import Header from './components/SiteHeader'

async function SiteLayout(props: React.PropsWithChildren) {
  return (
    <>
      <I18nProvider lang={'en'}>
        <Header />
        {props.children}
        <Footer />
      </I18nProvider>
    </>
  )
}

export default SiteLayout
