import { AboutMe } from "./AboutMe";
import { Reservation } from "./Reservation";
import { Information } from "./Information";
import { CommentPost } from "./CommentPost";

export default function Home(){

    return(
        <div id='home'>
            <AboutMe />
            <Information />
            <CommentPost />
            <Reservation />
        </div>
    )
}