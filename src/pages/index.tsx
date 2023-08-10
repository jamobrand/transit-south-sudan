import Navbar from "../components/Navigation"
import Footer from "../components/molecules/footer"
import Hero from "../components/molecules/sections"
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
            </div>
            <Footer />
        </>

    )
}

export default IndexPage