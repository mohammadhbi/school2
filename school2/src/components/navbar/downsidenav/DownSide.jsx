import style from "./downside.module.css"
export function Downside(){
return( <div className={style.downside}>
    <img src="../src/assets/logo.svg" alt="" />
    <ul className={style.ullist}>
        <li className={style.lilist}>Home</li>
        <li className={style.lilist}>About Us</li>
        <li className={`${style.lilist} ${style.bghome}`}>Academics</li>
        <li className={style.lilist}>Admissions</li>
        <li className={style.lilist}>Student Life</li>
        <li className={`${style.lilist} ${style.bgcontactus}`}>Contact</li>
    </ul>
</div>)
}
