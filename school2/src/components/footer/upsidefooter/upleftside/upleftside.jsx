import footerimage from "../../../../assets/footerimage.svg"
import style from "./upleft.module.css"
import email from "../../../../assets/email.svg"
import call from "../../../../assets/call.svg"
import location from "../../../../assets/location.svg"
export function Upleftside(){
    return(
        <div className={Upleftside}>
               <img src={footerimage} alt="" />
               <p className={style.belive}>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
               <div className={style.community}>
                <div className={style.email}>
                    <img src={email} alt="email" />
                    <span>hello@littlelearners.com</span>
                </div>
                <div className={style.call}>
                    <img src={call} alt="call" />
                    <span>+91 91813 23 2309</span>
                </div>
                <div className={style.location}>
                    <img src={location} alt="location" />
                    <span>Somewhere in the World</span>
                </div>
               </div>
        </div>
     
        
        
       
    )
}