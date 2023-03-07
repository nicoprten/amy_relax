import { NavBar } from "./NavBar";
import { AboutMe } from "./AboutMe";
import { Reservation } from "./Reservation";
import { Information } from "./Information";
import { CommentPost } from "./CommentPost";

export default function Home(){

    return(
        <div id='home'>
            <NavBar />
            <AboutMe />
            <Information />
            <CommentPost />
            <Reservation />
        </div>
    )
}