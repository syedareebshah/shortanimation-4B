import style from './Footer.module.css';


function Footer() {
    return (
        <div className={style.main}>
            <div className={style.mainTwo}>
                <div>
                    <img width='200' src="https://cdn.worldvectorlogo.com/logos/syscoin-sys--1.svg" />
                </div>
                <div className={style.mainThree}>
                    <div className={style.leftDiv} >
                        <h5>Social Media</h5>
                        <a href="#fb">
                            <img src="http://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png" />
                        </a>
                        <a href="#Twitter">
                            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" />
                        </a>
                        <a href="#Insta">
                            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" />
                        </a>
                        <a href="#Github">
                            <img src="http://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png" />
                        </a>
                    </div>
                    <div className={style.RightDiv} >
                        <div>
                            <h5>Resources</h5>
                            <p>Wallets</p>
                            <p>Github</p>
                            <p>White Papers</p>
                        </div>
                        <div>
                            <h5>Community</h5>
                            <p>Discord</p>
                            <p>News</p>
                            <p>Twitter</p>
                        </div>
                        <div>
                            <h5>About us</h5>
                            <p>Meet the team</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <hr />
                <p style={{color:'brown'}}>Syscoin. All rights reserved © 2021</p>
            </div>
        </div>
    )
}

export default Footer