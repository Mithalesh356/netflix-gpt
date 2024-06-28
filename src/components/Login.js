import React, { useRef, useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../utils/loginSlice';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState(null);
    const handleClick = () => {
        dispatch(toggleForm());
    }
    const isSignIn = useSelector(store => store.login.isSignUp)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleSubmit = () => {
        const errorMessage = validateData(email.current.value, password.current.value);
        setErrorMessage(errorMessage);
        if (errorMessage) return;
        //signup
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                })
                .then(() => {
                    const {uid,displayName,email} = auth.currentUser;
                    dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                // ...
                }).catch((error) => {
                    setErrorMessage(error.message)
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+' - '+errorMessage)
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+' - '+errorMessage)
            });
        }
    }
  return (
    <div>
          <Header />
          <div className='absolute' >
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt=""></img>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute mx-auto left-0 right-0 w-3/12 my-40 p-10 text-white bg-opacity-60'>
              <h1 className='font-bold text-3xl'>{isSignIn ? 'Sign In':'Sign Up'}</h1>
              {!isSignIn && <input ref={name} className='text-white rounded-xl w-full mt-8 p-2 px-5 bg-transparent border border-white' type="text" placeholder='Enter Full Name' name="name" ></input>}<br></br>
              <input ref={email} className='text-white rounded-xl w-full mt-8 p-2 px-5 bg-transparent border border-white' type="email" placeholder='Enter Email' name="email" ></input><br></br>
              <input ref={password} className='text-white rounded-xl w-full mt-10 p-2 px-5 bg-transparent border border-white' type="password" placeholder='Enter Password' name="password" ></input><br></br>
              <span className='text-yellow-300'>{ errorMessage}</span>
              <button onClick={handleSubmit} type="submit" className= 'rounded-xl w-full bg-red-500 mt-10 p-2'>{isSignIn ? 'Sign In':'Sign Up'}</button>
              <p className='mt-6'>{isSignIn ? 'Don\'t Have An Account ?':'Already Have An Account'}<span className='hover:text-red-500 hover:font-bold cursor-pointer' onClick={handleClick}> {isSignIn ? 'Sign Up':' Sign In'}</span> </p>
                  
          </form>
    </div>
  )
}

export default Login
