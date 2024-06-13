
import Header from './Header'
import Footer from './Footer'

function LayOut({children}) {
 
  return (
    <>
  
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default LayOut
