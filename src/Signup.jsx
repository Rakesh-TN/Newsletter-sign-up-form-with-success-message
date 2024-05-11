import React, { useRef, useState } from 'react'
import sideImagedesktop from './assets/images/illustration-sign-up-desktop.svg'
import sideImagemobile from './assets/images/illustration-sign-up-mobile.svg'
import successIcon from './assets/images/icon-success.svg'

function Signup() {
    const [ errorEmail, seterrorEmail ] = useState('');
    const [ isActiveError, setisActiveError ] = useState(false);
    const [ showState, setShowstate ] = useState(false);
    const inputRefEmail = useRef(null);

    function isVaildEmail(email) {
      return /\S+@\S+\.\S+/.test(email)
    }

    const switchToSignup = () => {
      setShowstate(false)
    }

    const currentEmailValue = () => {
      return inputRefEmail.current.value;
    }

    const submitEmail = (event) =>{
      event.preventDefault();
    
      if(inputRefEmail.current.value === ''|| !isVaildEmail(inputRefEmail.current.value)) {
        seterrorEmail('Valid email required');
        setisActiveError(true);
        setShowstate(false);
      }
      else {
        seterrorEmail('');
        setisActiveError(false);
        setShowstate(true);
      }
    }
    const ThankPage = () => {
      return (
        <>
          <main className='mainPhase'>
            <div className='subPhaseDot'>
              <div className='firstPhaseDot'>
                <img src={successIcon}/>
                <h1>Thanks for subscribing!</h1>
              </div>
              <div className='secondPhaseDot'>
                <p>A confirmation email has been sent to <span>{currentEmailValue()}</span>. Please open it and click the button inside to confirm your subscription.</p>
                <button className='btn btn-fit' onClick={switchToSignup}>Dismiss message</button>
              </div>
            </div>
          </main>
        </>
      )
    }

    const signupState = () => {
      return (
        <>
          <main className='mainPhase'>
            <div className='subPhase'>
              <div className='firstPhase'>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className='listPoints'>
                  <li>Product discovery and building what matters</li>
                  <li>Measuring to ensure updates are a success</li>
                  <li>And much more!</li>
                </ul>
                <div className='inputEmail'>
                  <div className='vaildate'><label form='email' className='label-style' >E-mail Address :</label><p className="error-state">{errorEmail}</p></div>
                  <input type='email' className='input-field' ref={inputRefEmail}  style={{
                                borderColor: isActiveError ? "hsl(4, 100%, 67%)" : "",
                                backgroundColor: isActiveError ? "hsla(4, 100%, 67%, 0.2)" : "",
                                color: isActiveError ? "hsl(4, 100%, 67%)" : "",
                            }}/>
                </div>
                <button className='btn'  onClick={submitEmail}>Subscribe to monthly newsletter</button>
              </div>
              <div className='secondPhase'>
                <picture>
                  <source media='(max-width: 600px)' srcSet={sideImagemobile}/>
                  <img src={sideImagedesktop} className='imgSize'/>
                </picture>
              </div>
            </div>
          </main>
        </>
      )
    }

    return (
      <div className='main'>
        {showState ? <div>{ThankPage()}</div> : <div>{signupState()}</div>}
      </div>
    )
}
export default Signup