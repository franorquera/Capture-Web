// Import Components
import AboutSection from "../components/AboutSectionComponent";
import ServicesSection from "../components/ServicesSectionComponent";
import FaqSection from "../components/FaqSectionComponent";

const AboutUs = () => {
    return (
        <div className="MainPage">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </div>
    )
}

export default AboutUs;