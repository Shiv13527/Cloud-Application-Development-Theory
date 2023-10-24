import React from 'react'
import './Home.css'
import Header from './Header';
import VideoCard from './VideoCard';
import { getAuth } from 'firebase/auth';
import { signOut, onAuthStateChanged } from 'firebase/auth';
function Home() {
    // let auth = getAuth();
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='app'>
                < VideoCard />
            </div>
        </div>
    )
}

export default Home
