import React, {useContext} from 'react'
import { UserLoggedIn, ProfileData } from '../GoogleSignUpProject/Context';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

function LoginPage() {
    const { setIsLoggedIn } = useContext(UserLoggedIn);
    const { setProfileData } = useContext(ProfileData);


    async function fetchData (credentials) {
        try {
            const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credentials}`);
            const data = await response.json();
            console.log(data);
            setProfileData(data);
          } catch (e) {
            console.error(e);
          }
    }
  return (
    <>
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
                fetchData(credentialResponse.credential)
                setIsLoggedIn(true);
                
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
            <button onClick={() => {
                googleLogout();
                setIsLoggedIn(false);
            }}>Log out</button>
            
    </>
  )
}

export default LoginPage