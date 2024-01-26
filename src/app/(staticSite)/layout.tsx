import Footer from './components/Footer'
import Header from './components/Header'

async function SiteLayout(props: React.PropsWithChildren) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default SiteLayout
