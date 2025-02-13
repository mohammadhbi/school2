import style from "./header.module.css"
import { Leftsideheader } from "./leftsideheader/Leftsideheader"
import {Rightsideheader} from "./rightsideheader/Rightsideheader"
export function Header(){
    return(
        <header className={style.headercontainer}>
            <Leftsideheader/>
            <Rightsideheader/>
        </header>
    )
}