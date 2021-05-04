import Typewriter from 'typewriter-effect'
import '../App.css'

function TypingCom(){
    return(
        <div className="mainTyping">
            <h4 style={{marginRight:10}}>Start using Syscoin today for scalable</h4> 

            <Typewriter
            
            // onInit={(typewriter) => {
            //     typewriter
            //       .pauseFor(1000)
            //       .deleteAll()
            //       .start();
            //   }}
              options={{
                strings: ['<h4 style="color: Yellow;">Masternodes</h4>','<h4 style="color: Yellow;">NFTs</h4>','<h4 style="color: Yellow;">Compliance</h4>'],
                autoStart: true,
                loop: true,
              }}

            />
        </div>
    )
}

export default TypingCom;