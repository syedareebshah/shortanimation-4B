import style from './Bodythree.module.css'
import pic19 from '../assets/pic19.jpg'


function BodyThree(){
    return(
        <div className={style.main}>
            <div className={style.ScndMain}>
                <h2>NEVM: The Roadmap to Smart Cities and Beyond</h2>
                <br />
                <br />


                <h5>
                In the coming year we will release what we're currently calling Syscoin NEVM (Network-Enhanced Virtual Machine). This will not be your typical EVM blockchain. Our network will use parallel processing to enable projects to access much more processing power than Ethereum. Meaning bigger programs, more complex calculations, and thousands more simultaneous calculations, all executed at far lower fees than Ethereum.
                </h5>

                <img src={pic19} />

            </div>
        </div>
    )
}

export default BodyThree;