import { Upsidefooter } from "./upsidefooter/upside"
import style from "./footer.module.css"
import { Midllefooter } from "./midllefooter/midllefooter"
import { Bottomfooter } from "./bottom footer/bottomfooter"
export function Footer(){
    return(
        <footer className={style.footer}>
            <Upsidefooter/>
            <Midllefooter/>
            <Bottomfooter/>
        </footer>
    )
}