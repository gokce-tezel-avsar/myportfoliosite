import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../layouts/Header"
import HeaderNav from "../layouts/HeaderNav"
import Profile from "../layouts/Profile"
import Hero from "../layouts/Hero"
import Skills from "../layouts/Skills"
import Projects from "../layouts/Projects"
import Footer from "../layouts/Footer"
export default function Home(){
    return(
       <>
       <Header/>
       <HeaderNav/>
       <Hero />
       <Skills/>
       <Profile/>
       <Projects />
       <Footer />
       </>
    )
}