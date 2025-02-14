import style from "./midllefooter.module.css"
import socialmedia from "../../../assets/socialmedia.svg"
export function Midllefooter(){
    return(
        <div className={style.midllefooter}>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
            <img src={socialmedia} alt="socialmedia" />
        </div>
    )
}