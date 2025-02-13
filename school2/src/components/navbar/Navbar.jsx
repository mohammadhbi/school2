import { Downside } from "./downsidenav/DownSide"
import { Upside } from "./upsidenav/upside"
import styles from "./Navbar.module.css";
export function Navbar(){
    return(
        <nav className={styles.Navbar}>
            <Upside />
           <Downside />
           
        </nav>
    )
}
