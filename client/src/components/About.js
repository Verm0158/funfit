import {useState} from 'react';

const About = ({setShowAbout}) => {

    const handleClick = () => {
        setShowAbout(false)
    }

    return (
        <div className="auth-modal about">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>ABOUT US</h2>
            <hr/>
            <p>
                Wij bij FunFit geloven in het creëren van geluk in combinatie met gezondheid. Bij FunFit bieden wij jou
                een mogelijkheid om jezelf sportief en sociaal te ontwikkelen. Wie kent het probleem niet? Je houdt van
                een sport die je eigenlijk individueel beoefent, (zoals hardlopen, golfen of fitnessen) maar je vindt
                het wel leuk om dit samen met iemand te doen.
                Hier zijn wij jouw helpende hand. Wij zorgen ervoor dat jij een buddy kan vinden met wie je deze sport
                kunt gaan beoefenen. Door jouw buddy te vinden dragen we bij aan de gezelligheid die jij ervaart tijdens
                het sporten. Wij maken bij FunFit geen onderscheid tussen mensen, iedereen is bij ons welkom. Ervaren of
                onervaren, jong of oud, iedereen. Om jou te matchen met een andere buddy hebben we veel van jouw
                persoonlijke gegevens nodig. Vertrouwen staat bij ons erg hoog in het vaandel, wij gaan goed en discreet
                met jouw gegevens om. Wij willen er alles aan doen om jou een goede service en ervaring te bieden. Wordt
                bij ons Fit met Fun.
            </p>
        </div>
    )
}
export default About