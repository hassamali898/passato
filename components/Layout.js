
import Footer from './Footer';
import NavBar from './Navbar';
const layout =({children})=>{
  return(
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  );
}
export default layout;