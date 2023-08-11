import Navbar from "../components/Navigation"
import ApplyOnline from "../components/molecules/apply-on"
import BorderVerif from "../components/molecules/border-verif"
import Footer from "../components/molecules/footer"
import Hero from "../components/molecules/sections"
import StepOne from "../components/molecules/step-one"
import TransitPermit from "../components/molecules/transit-permit"
import VehicleConsignment from "../components/molecules/vehicle-consig"
import SEO from "../components/seo"
import TravelWidget from "../components/travel-widget"

const IndexPage = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-900">
                <SEO title="Apply for a South Sudan Transit Permit" />
                <Navbar />
                <Hero />
                <TravelWidget />
                <ApplyOnline />
                <TransitPermit />
                <StepOne />
                <BorderVerif />
                <VehicleConsignment />
            </div>
            <Footer />
        </>

    )
}

export default IndexPage