import style from "./midllesection.module.css"
import teacher from "../../../assets/teacher.svg"
import boy from "../../../assets/boy.svg"
import kids from "../../../assets/kids.svg"
import gril from "../../../assets/gril.svg"
import arts from "../../../assets/arts.svg"
import sport from "../../../assets/sport.svg"
export function Midllesection(){
    return(
        <section className={style.sectionmidlle}>
          <h3 className={style.title}>Our Features</h3>
                      <h2 className={style.benefits}>Our Special Features</h2>
                        <p className={style.paragraph}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                       
           <div className={style.cards}>
            <div className={style.upcards}>
             <div className={style.servicescard}>   
              <img src={teacher} alt="" />
              <h4>Language Arts</h4>
              <p>Reading, writing, storytelling, and communication skills.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={boy} alt="boy" />
              <h4>Mathematics</h4>
              <p>Number sense, basic operations, problem-solving, and logic.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={kids} alt="kids" />
              <h4>Science</h4>
              <p>Exploring the natural world through hands-on experiments and investigations.</p>  
        </div> 
                </div> 
            
                <div className={style.upcards}>
             <div className={style.servicescard}>   
              <img src={gril} alt="gril" />
              <h4>Social Studies</h4>
              <p>Cultivating an understanding of diverse cultures and communities.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={arts} alt="arts" />
              <h4>Arts and Crafts</h4>
              <p>Encouraging creativity through various art forms and crafts.</p>  
        </div> 
        <div className={style.servicescard}>   
              <img src={sport} alt="sport" />
              <h4>Physical Education</h4>
              <p>Promoting physical fitness, coordination, and teamwork.</p>  
        </div> 
                </div> 
            
            </div>     
        </section>
    )
}