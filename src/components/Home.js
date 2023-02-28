import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import { Reservation } from "./Reservation";
import { Information } from "./Information";
import { Footer } from "./Footer.js";

export default function Home(){

    return(
        <div id='home'>
            <NavBar />
            <AboutMe />
            <Information />
            <Reservation />
            <Footer />
        </div>
    )
}