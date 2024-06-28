import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectUserFromRedux = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => { })
        .catch((error) => {
        // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribeCallback= onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,displayName,email} = user;
            dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
            navigate('/browse')
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/')
        }
        });

        return () => unsubscribeCallback();
    }, [])

    
  return (
      <div >
          <div className='absolute  bg-gradient-to-b from-black w-full z-10 flex justify-between'>
              <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt=""></img>
              {selectUserFromRedux &&<div>
                  <span className='text-white'>Welcome, {selectUserFromRedux?.displayName }</span>
                  <button className=' bg-red-500 z-10 px-5 h-10 mt-3 mr-3 ml-2 rounded-2xl font-bold' onClick={handleSignOut}>Sign Out</button>
              </div>}
          </div>
          
    </div>
  )
}

export default Header
