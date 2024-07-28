import Dot from "./subcomponents/Dot";
import { Heading, Paragraph } from "./subcomponents/TextSubComponents";

function About() {
    return (
        <li className="sm:pt-16 mb-10 ms-4">
            <Dot />
            <div name="about" className="relative -top-4">
                <Heading title="About" />
                <Paragraph content=
                    {<span>
                        Alright let's do this one last time...
                        <br />
                        My name is <span className="text-white">Karan Bisht</span>, I am a MERN stack Web Developer and
                        for 1.5 year I've been the one and only Web Developer *in my house*.
                        <br /><br />
                        [<i>insert "what a day..."</i>]
                        <br /><br />
                        I'm pretty sure you know the rest... right?!
                        You see, I made some projects and some more, maybe too many, made some dicy choices - don't just buy any cheap course online.
                        Then some time passed blah... blah... blah... super boring,
                        I broke my back. Got my vision screwed. I buired my sanity. Me and my love for web dev, got split up.
                        But I handled it like a champion!
                        <br /><br />
                        [<i>insert soft sobbing</i>]
                        <br /><br />
                        'Cause you know what? No matter how many times I get hit, I ALWAYS get back up.
                        And I got a lot of time to reflect and work on myself. Did you know that seahorses that they mate for life?
                        Could you imagine a seahorse seeing another seahorse and then making it work?
                        <br />
                        Flash forward, I'm in my apartment coding my new project, getting better -
                        <br /><br />
                        [<i>he is actually lying on the floor eating pizza</i>]
                        <br /><br />
                    </span>}
                />
            </div>
        </li>
    );
};

export default About;