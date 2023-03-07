import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import { Reservation } from "./Reservation";
import { Information } from "./Information";
import { Comments } from "./Comments";

export default function Home(){

    return(
        <div id='home'>
            <NavBar />
            <AboutMe />
            <Information />
            <Comments />
            <Reservation />
        </div>
    )
}