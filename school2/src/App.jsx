import {Navbar} from "./components/navbar/Navbar"
import { Header } from "./components/header/header";
import { Mainsection } from "./components/mainsections/mainsections";
import {Footer} from "./components/footer/footer"
function App(){
  return(
   <div>
     <Navbar/>
     <Header/>
    <Mainsection/>
    <Footer/>
   </div>
  )
}
export default App;
