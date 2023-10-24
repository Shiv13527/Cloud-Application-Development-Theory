import React from 'react'
import { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import app from './firebase'
import { Container } from '@mui/material'
import './Auth.css'

export default function Auth() {

    let auth = getAuth()
    let googleProvider = new GoogleAuthProvider();
    let navigate = useNavigate();
    const signUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);

            if (user) {
                navigate('/home');
            }
            else {

            }
        })
    }, [])
    return (
        <div className='auth-btn'>

            <Container fluid>
                <h1 className='goog_text'>Sign In with Google</h1>
                <GoogleButton className='goog'
                    type="dark" // can be light or dark
                    onClick={signUp}
                />
            </Container>
        </div>

    )
}