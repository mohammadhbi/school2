import Style from "./uprightside.module.css"
export function Uprightside(){
return(
 <div className={Style.lists}>
  
   <div className={Style.homeli}>
   <a className={Style.titlelink}  href="#">Home</a>
   <ul className={Style.list}>
    <li><a href="#">Features</a></li>
    <li><a href="#">Our Testimonials</a></li>
    <li> <a href="#">FAQ</a></li>
    </ul> 
   </div>

   <div className={Style.aboutus}>
   <a className={Style.titlelink}  href="#">About Us</a>
   <ul className={Style.list}>
    <li><a href="#">Our Mission</a></li>
    <li><a href="#">Our Vission</a></li>
    <li> <a href="#">Awards and Recognitions</a></li>
    <li> <a href="#">History</a></li>
    <li> <a href="#">Teachers</a></li>
    </ul> 
   </div>


   <div className={Style.Academics}>
   <a className={Style.titlelink}  href="#">Academics</a>
   <ul className={Style.list}>
    <li><a href="#">Special Features</a></li>
    <li><a href="#">Gallery</a></li>
    </ul> 
   </div>


   <div className={Style.Academics}>
   <a className={Style.titlelink} href="#">Contact Us</a>
   <ul className={Style.list}>
    <li><a href="#"> Information</a></li>
    <li><a href="#">Map & Direction</a></li>
    </ul> 
   </div>
   
 </div>
)
}