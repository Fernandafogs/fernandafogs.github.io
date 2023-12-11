import React from "react";
import "./intro.css";
import bg from "../../assets/Fernanda.jpeg";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <div>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello, </span>
                    <span className="introText">I'm <span className="introName">Fernanda</span> <br />Front-end Developer</span>
                    <p className="introPara">
                        I am dedicated to merging my diverse skill set to drive your digital endeavors towards unparalleled success.
                    </p>
                    <Link>
                        <button className="btn" onClick={() =>{
                            document.getElementById ('contact').scrollIntoView({behavior: 'smooth'})
                        }}>
                            <img src={btnImg} className="btnImg" alt="Hire Me" />
                            <span className= "btnText">Hire me</span>
                        </button>
                    </Link>
                </div>
                <img src={bg} alt="profile" className="bg" />               
            </section>
        </div>
    );
}

export default Intro;