import React from 'react'
import { DesicartIcon } from '../assets/icons'
import { TiAttachment } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import useBreakpoints from './responsive';

const PersonalProject = () => {
    const { isMobile } = useBreakpoints();

    return (
        <div className='project-main-container'>
            <h1>PROJECT</h1>
            <div className='project-contentWrapper'>
                <div className='projectLeftSide'>
                    <div className='logoWithNamerapper'>
                    <DesicartIcon size={isMobile ? 50 : 150}/>
                    <h3>Desicart(In progress)</h3>
                    </div>
                    <div className='usedTech'>
                        <p>React.js</p>
                        <p>Javascript</p>
                        <p>Scss</p>
                        <p>Redux</p>
                    </div>
                    <div className='linkWrapper'>
                        <div><TiAttachment />
                            <p>Link Preview</p>
                        </div>
                        <div><FaGithub />
                            <p>View Code</p>
                        </div>
                    </div>
                </div>
                <div className='projectRightSide'>
                    <p>Desicart is a cutting-edge eCommerce platform designed to offer a seamless and advanced online shopping experience. The website incorporates state-of-the-art features to enhance user convenience and security. Key functionalities include:</p>
                    <ul>
                        <li>
                        <span>Email Verification with OTP for Login:</span> Users can verify their email addresses using a one-time password (OTP) for secure login.
                        </li>
                        <li>
                        <span>Infinite Session Duration:</span> Logged-in users enjoy uninterrupted access without the need for frequent re-authentication.
                        </li>
                        <li>
                        <span>Cross-Device Login:</span> Users can stay logged in across multiple devices, ensuring a consistent experience.
                        </li>
                        <li>
                        <span>Account Deletion:</span> Users have the option to delete their accounts if they choose to do so.
                        </li>
                        <li>
                        <span>One-Tap Login:</span> Quick and easy login for users who have previously logged in using their email.
                        </li>
                        <li>
                        <span>Infinite Scrolling:</span> The product listing page supports infinite scrolling, allowing users to browse through products seamlessly.
                        </li>
                        <li>
                        <span>Dynamic Filters:</span> Advanced filtering options enable users to quickly find products based on various criteria.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonalProject
