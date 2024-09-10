import Header from "../module/Header"
import Navbar from "../module/Navbar"


function Layout( { children } ) {
    return (
  
  
  
     <>
  
     {/* Navbar */}
  
  
    {/* <Header/> */}
    <Navbar/>



  
    <div>{children}</div>
  
  
    <footer>
        {/* <Footer/> */}
    </footer>
  
     </>
    )
  }
  
  export default Layout