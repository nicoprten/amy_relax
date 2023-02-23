import { Schedules } from "./Schedules";
import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";


export default function Home(){

    return(
        <div id='home'>
            <h1>Home</h1>
            <NavBar />
            <AboutMe />
            <Schedules />
            <p>masajes data</p>
            <p>contacto</p>
        </div>
    )
}