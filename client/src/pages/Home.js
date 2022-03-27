import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal';
import {useState} from 'react';
import {useCookies} from "react-cookie";
import About from "../components/About";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    const handleClickCreate = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }

        setShowModal(true)
        setIsSignUp(true)
    }

    const handleClickAbout = () => {
        setShowAbout(true)
    }

    return (
        <>
            <div className="overlay">
                <Nav authToken={authToken}
                     minimal={false}
                     setShowModal={setShowModal}
                     showModal={showModal}
                     setIsSignUp={setIsSignUp}/>
                <div className="home">
                    <h1 className="primary-title">FunFit®</h1>
                    <button className="primary-button" onClick={handleClickCreate}>
                        {authToken ? 'Signout' : 'Create account'}
                    </button>

                    {showModal && (
                        <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                    )}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button className="primary-button" onClick={handleClickAbout}>
                        About us
                    </button>

                    {showAbout && (
                        <About setShowAbout={setShowAbout}/>
                    )}
                </div>
            </div>
        </>
    )
}
export default Home