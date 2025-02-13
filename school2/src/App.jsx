import {Navbar} from "./components/navbar/Navbar"
import { Header } from "./components/header/header";
import { Mainsection } from "./components/mainsections/mainsections";
function App(){
  return(
   <div>
     <Navbar/>
     <Header/>
    <Mainsection/>
   </div>
  )
}
export default App;
