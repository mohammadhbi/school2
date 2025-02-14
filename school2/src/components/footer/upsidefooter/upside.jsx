import Style from "./Upside.module.css"
import { Upleftside } from "./upleftside/upleftside"
import { Uprightside } from "./uprightside/uprightside"
export function Upsidefooter(){
    return(
        <div className={Style.Upsidefooter1}>
            <Upleftside/>
            <Uprightside/>
        </div>
        
        
        
    
    )
}