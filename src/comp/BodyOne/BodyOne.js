import style from './BodyOne.module.css'
import Button from 'react-bootstrap/Button';
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'



function BodyOne() {
  return (
    <div className={style.main}>
      <div className={style.mainDiv}>
        <h1>
          Your NFT, Asset or Token on Syscoin Platform
            </h1>
        <p>
          We have everything you need to get up and running quickly on our scalable and low-cost network
            </p>
        <div className={style.scndMain}>
          <div className={style.SideItems}>
            <div>
              <img src={pic1} />
              <h4>Scalability</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <img src={pic2} />
              <h4>Low Fee</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <img src={pic3} />
              <h4>Compliance</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className={style.SideItems}>
            <img src={pic4} />
            <p style={{ paddingTop: 40 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>
        </div>
        <h1 style={{ paddingTop: 20 }}>
          Discover
        </h1>

        <div className={style.SideItems}>
          <div>
            <img src={pic4} />
            <h4>Syscoin Platform</h4>
          </div>
          <div>
            <img src={pic5} />
            <h4>NFTs</h4>

          </div>
          <div>
            <img src={pic6} />
            <h4>Masternodes</h4>

          </div>
          <div>
            <img src={pic7} />
            <h4>Our SDK</h4>

          </div>

        </div>

      </div>
    </div>
  );
}

export default BodyOne;
