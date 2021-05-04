import pic from '../assets/headerpic.png'
import style from './Header.module.css'


function Header() {
  return (
    <div className={style.main}>
      <div className={style.leftDiv}>
        <h1 className={style.heading}>Future-Proof Payments and Value Transfer</h1>
        <p className={style.para}>
        Syscoin Platform offers fast and low-cost tokens, assets, and NFTs secured by Bitcoin's censorship-resistance and hashrate.
        </p>
        
        <div className={style.btn} >
          <h5>Kickstart your NFT in minutes </h5>
        </div>

      </div>
      <div>
          <p className={style.scndPara}>Blockchain stats</p>
          <ul> 
              <li>Masternodes enabled</li>
              <li>Transaction fee $</li>
              <li>Hashrate</li>
          </ul>
          
        <img className={style.pic} src={pic} />  

      </div>
    </div>
  );
}

export default Header;
