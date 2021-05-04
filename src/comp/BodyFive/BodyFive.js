import style from './BodyFive.module.css'
import pic21 from '../assets/pic21.jpg'
import pic22 from '../assets/pic22.jpg'
import pic23 from '../assets/pic23.jpg'
import pic24 from '../assets/pic24.jpg'



function BodyFive(){
    return(
        <div className={style.main}>
            <div className={style.Sideitems}>
                <div>
                    <img src={pic21} />
                    <h4>Start Developing</h4>
                </div>
                <div>
                    <img src={pic24} />
                    <h4>Partner Up</h4>
                </div><div>
                    <img src={pic23} />
                    <h4>White Papers</h4>
                </div><div>
                    <img src={pic22} />
                    <h4>Github</h4>
                </div>

            </div>
        </div>
    )
}

export default BodyFive;