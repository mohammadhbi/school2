import {Topsection} from "./topsection/topsection"
import { Midllesection } from "./midllesection/midllesection"
import { Bottomsection } from "./bottomsection/bottomsection"
export function Mainsection(){
    return(
        <main>
        <Topsection/>
        <Midllesection/>
        <Bottomsection/>
        </main>
    )
}