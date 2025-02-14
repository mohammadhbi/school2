 import style from "./bottomsection.module.css"
 import classroom from "../../../assets/classroom.svg"
 import container from "../../../assets/container.svg"
 import library from "../../../assets/library.svg"
 import lab from "../../../assets/lab.svg"
 import pclab from "../../../assets/pclab.svg"
 import garden from "../../../assets/garden.svg"
export function Bottomsection(){
    return(
      <section className={style.bottomsection}>
         <h3 className={style.title}>Our Gallery</h3>
                              <h2 className={style.benefits}>Our Rooms Gallery</h2>
                                <p className={style.paragraph}>Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</p>
                                <div className={style.menubar}>  
                                     <button className={style.all}>All</button>
                                     <button>Classrooms</button>
                                     <button>Library</button>
                                     <button>Science Lab</button>
                                     <button>Computer Lab</button>
                                     <button>Garden and Nature Area</button>
                                       </div>
                                       <div className={style.classroom}>
                                         <img src={classroom} alt="" />
                                         <div className={style.titlebar}>
                                            <span>Class Rooms</span>
                                            <img src={container} alt="" />
                                         </div>
                                          <p>Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                                       </div>
                                       <div className={style.classroom}>
                                         <img src={library} alt="" />
                                         <div className={style.titlebar}>
                                            <span>Library</span>
                                            <img src={container} alt="" />
                                         </div>
                                          <p>Our expansive library is a treasure trove of books, fostering a love for reading and supporting students literacy development.</p>
                                       </div>
                                       <div className={style.classroom}>
                                         <img src={lab} alt="" />
                                         <div className={style.titlebar}>
                                            <span>Science Lab</span>
                                            <img src={container} alt="" />
                                         </div>
                                          <p>Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.</p>
                                       </div>
                                       <div className={style.classroom}>
                                         <img src={pclab} alt="" />
                                         <div className={style.titlebar}>
                                            <span>Computer Lab</span>
                                            <img src={container} alt="" />
                                         </div>
                                          <p>Equipped with age-appropriate technology, the computer lab enhances students digital literacy and computational skills</p>
                                       </div>
                                       <div className={style.classroom}>
                                         <img src={garden} alt="" />
                                         <div className={style.titlebar}>
                                            <span>Garden and Nature Area</span>
                                            <img src={container} alt="" />
                                         </div>
                                          <p>Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.</p>
                                       </div>
      </section>
    )
}