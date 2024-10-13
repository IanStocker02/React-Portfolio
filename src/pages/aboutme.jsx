import React from 'react';
import Ian from '../images/ian.jpg';


function aboutme() {
    return (
        <section className="about-me">
            <img src= {Ian} alt="Developer" /> 
            <p>Hi I'm Ian. I started to learn how to code because it makes good money. I have a passion for pretty aquariums and working on cool cars!</p>
        </section>
    );
}

export default aboutme; 