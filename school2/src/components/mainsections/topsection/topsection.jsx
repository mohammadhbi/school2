import style from "./topsection.module.css"
import book from "../../../assets/book.svg"
import steam from "../../../assets/steam.svg"
import art from "../../../assets/art.svg"
import pazulle from "../../../assets/pazulle.svg"
import sun from "../../../assets/sun.svg"
import star from "../../../assets/star.svg"
export function Topsection(){
    return(
        <section className={style.sectiontop}>
            <h3 className={style.title}>Our Features</h3>
            <h2 className={style.benefits}>Our Special Features</h2>
              <p className={style.paragraph}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
             <div className={style.cards}>
                <div className={style.upcards}>
                    <div className={style.card}>
                      <img src={book} alt="book" />
                      <span>Thematic Learning</span>
                      <p>Our curriculum is centered around engaging themes that capture childrens imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.</p>
                    </div>
                       <div className={style.card}>
                          <img src={steam} alt="steam" />
                         <span>Experienced Educators</span>
                         <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.
                         </p>
                        </div>
                     <div className={style.card}>
                      <img src={pazulle} alt="pazulle" />
                      <span>Nurturing Environment</span>
                      <p>We prioritize safety and provide a warm and caring atmosphere for every child.</p>
                   </div>
                </div>
                <div className={style.downcards}>
                   <div className={style.card}>
                      <img src={art} alt="art" />
                      <span>Play-Based Learning</span>
                      <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>
                    <div className={style.card}>
                      <img src={sun} alt="sun" />
                      <span>Individualized Attention</span>
                      <p>Our small class sizes enable personalized attention, catering to each childs unique needs.</p>
                    </div>
                    <div className={style.card}>
                      <img src={star} alt="star" />
                      <span>Parent Involvement</span>
                      <p>We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
                    </div>
                </div>
             </div>
        </section>
    )
}