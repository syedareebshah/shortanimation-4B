import style from './BodyTwo.module.css'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic11 from '../assets/pic11.jpg'
import pic12 from '../assets/pic12.jpg'
import pic13 from '../assets/pic13.jpg'
import pic14 from '../assets/pic14.jpg'
import pic15 from '../assets/pic15.jpg'
import pic16 from '../assets/pic16.jpg'
import pic17 from '../assets/pic17.jpg'
import pic18 from '../assets/pic18.jpg'



function BodyTwo() {
    return (
        <div className={style.main}>
            <h3>
            Syscoin is a decentralized and open source project founded in 2014
            </h3>
            <p>
            by the Founders of Blockchain Foundry, who remain Syscoin's core developers. The platform has been guided by the Syscoin Foundation since 2019.
            </p>
            <p style={{paddingTop:50}}>
            Our research and development partners:
            </p>

            <div className={style.sideItems}>
                <img src={pic8} />
                <img src={pic9} />
                <img src={pic10} />
                <img src={pic11} />
                <img src={pic12} />
            </div>
            <div className={style.sideItems}>
                <img src={pic13} />
                <img src={pic14} />
                <img src={pic15} />
                <img src={pic16} />
                <img src={pic17} />
            </div>
            <div className={style.sideItems}>
                <img src={pic18} />
            </div>
        </div>
    )
}

export default BodyTwo;