import React from 'react';
import "./Title.css"

import { Parallax } from 'react-parallax';


const Title = () => {
    return (
        <section className="title box hidden" style={{
            paddingLeft:'10vh'
        }}>
            <Parallax style={{
                height:'100vh'
            }} strength={300} bgImage='./images/Service-images/service page first section.webp'>
            <div>
            <h1 style={{
                marginTop:'4vh'
            }}><abbr title="MEDICAL means AMBUvians">MEDICAL means AMBUvians</abbr></h1>
            <p>We will try to provide the best, fastest, and safest ambulance service all over INDIA</p>
            </div>
            </Parallax>
           
            {/* <figure className="ambulance">
                <img loading="lazy" src="./images/Service-images/service page first section.webp" alt="cover image" style={{ width: '100vw' }} />
            </figure> */}
        </section>
    );
};

export default Title;
