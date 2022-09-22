import React from 'react';
import './homepage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faHouseFlag, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export const Homepage = () => {
    return (
        <>
            <div className="homepage-container-center">
                <div className="homepage-info-me">
                    <div className="image-div">
                        <img src={require('../../Images/self.jpg')} alt='ahmetkutay-resim'
                             className='image-me'/>
                    </div>
                    <div>
                        <div style={{marginTop: '25px',marginLeft:'25px'}}>
                            <h1>Hi I'm <span className='text-color-fade'>Ahmet Kutay Karacair</span></h1>
                            <h2>I'm a Full Stack Developer</h2>
                            <br/>
                            <span>
                                <h3><FontAwesomeIcon icon={faHouseFlag}/> Based in Turkey</h3>
                                <h3><FontAwesomeIcon icon={faCode}/> Software Engineer at Orion Innovation</h3>
                                <h3><FontAwesomeIcon icon={faPaperPlane} className="text-color-fade"/> kutaykaracair@gmail.com</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <br/>
            </div>

        </>
    );
}
