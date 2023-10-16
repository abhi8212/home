import Acitvities from "@/components/Acitvities"
import Enroll from "@/components/Enroll"
import Guiding from "@/components/Guiding"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import WhyChoose from "@/components/WhyChoose"
import Testimonial from "@/components/Testimonial"
import Teachers from "@/components/Teachers"
import Atypes from "@/components/Atypes"
import Accordion from "@/components/Accordian"
import Discover from "@/components/Discover"
import Enrollment from "@/components/Enrollment"
import Footer from "@/components/Footer"
import Circle from "@/components/Circle"


export default function Home() {
  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <WhyChoose></WhyChoose>
    <Enroll></Enroll>
    <Guiding></Guiding>
    <Acitvities></Acitvities>
    <Accordion></Accordion>
    <Testimonial></Testimonial>
    <Circle></Circle>
    <Teachers></Teachers>
    <Discover></Discover>
    <Enrollment></Enrollment>
    <Footer></Footer>   
   </div>
  )
}
