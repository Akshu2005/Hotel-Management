import React from 'react'
import './About.css'
import hotelVideo from '../../imgs/video.mp4'
import {Link} from 'react-router-dom'
import MyFooter from '../../components/Footer/MyFooter'
import MyCopyright from '../../components/Copyright/MyCopyright'

const About = () => {
    return (
        <div>
            <section class="heading">
                <video autoPlay loop class="video-background" muted plays-inline>
                    <source src={hotelVideo} type="video/mp4" />
                </video>

                <center>
                    <div class="welcome-msg ">
                        <h1> About Padmavati Hotels </h1>
                        <p>
                        Padmavati Resort in Neemuch is one of the leading businesses in the Resorts. Established in the year 2019, Padmavati Resort in Manasa, Neemuch is a top player in the category Resorts in the Neemuch. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Neemuch. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.
                        </p>
                       <Link to="rooms"> <a class="btn btn-book btna"> Book Room </a> </Link>
                       <Link to="/"> <a class="btn btn-home btna"> Return to Home</a></Link>
                    </div>

                </center>
            </section>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default About
