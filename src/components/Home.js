import { Schedules } from "./Schedules";
import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import { Reservation } from "./Reservation";
import { Information } from "./Information";

export default function Home(){

    return(
        <div id='home'>
            <NavBar />
            <AboutMe />
            <Information />
            <Reservation />
            <Schedules />
            {/* <p>contacto</p> */}
        </div>
    )
}