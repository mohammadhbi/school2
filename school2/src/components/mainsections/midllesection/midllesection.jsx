import style from "./midllesection.module.css"
import teacher from "../../../assets/teacher.svg"
// import steam from "../../../assets/steam.svg"
// import art from "../../../assets/art.svg"
// import pazulle from "../../../assets/pazulle.svg"
// import sun from "../../../assets/sun.svg"
// import star from "../../../assets/star.svg"
export function Midllesection(){
    return(
        <section className={style.sectionmidlle}>
           <div className={style.cards}>
            <div className={style.upcards}>
             <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
                </div> 
            
                <div className={style.upcards}>
             <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
                </div> 
            
            </div>     
        </section>
    )
}