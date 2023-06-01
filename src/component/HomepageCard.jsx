import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import Typewriter from 'typewriter-effect'

const HomepageCard = () => {
    return (
        <div>
            <div className='mt-20'>
                {/* <img
                    style={{width: '25 px', height: '50 px'}}
                    src="logo.png"
                /> */}
            </div>
            <div style={{ margin: '50px', color: 'white', alignItems: 'center' }}>

                <div>
                    <h1 style={{ marginRight: '10 px',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        I'm a&nbsp;
                        <span style={{ fontWeight: 'bold', color: 'green' }}>
                            <Typewriter
                                options={{
                                    loop: true, // Enable loop
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(' Developer')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString(' QA')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString(' Project Manager')
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </span>
                    </h1>
                </div>

                <div style={{alignItems: 'center'}}>
                    <FacebookIcon />
                    <GitHubIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
                <div>
                    <Button variant="contained" href=''>Download CV</Button>
                </div>
            </div>
        </div>
    );
};

export default HomepageCard;
