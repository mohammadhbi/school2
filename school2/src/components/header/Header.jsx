import style from "./header.module.css"
import { Leftsideheader } from "./leftsideheader/Leftsideheader"
export function Header(){
    return(
        <header className={style.headercontainer}>
            <Leftsideheader/>
        </header>
    )
}