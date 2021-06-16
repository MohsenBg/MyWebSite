import React from 'react'
import './Home.scss'
import Blue_button from '../../Components/extra_features/buttonResume/Blue_button'
import Button_Contact from '../../Components/extra_features/buttonContact/button_Contact'


const Home: React.FC = () => {
    return (
        <div className="containerHome">
            <div className="mainContainerDiv">
                <h1 className="titleHomePage">Let us Build your Website</h1>
            <div className='resume'>
                <Blue_button />
            </div>
            <div className='ButtonContact'>
                <Button_Contact />
            </div>
            </div>
        </div>
    )
}

export default Home
