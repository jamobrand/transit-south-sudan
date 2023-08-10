import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navigation"
import SEO from "../components/seo"
import PermitDetails from "../components/domain/permit-details"
import Payment from "../components/domain/payment"
import ValidatePermit from "../components/domain/validate-permit"
import Footer from "../components/molecules/footer"

const IndexPage = () => {
    return (
        <>
            <SEO title="Transit Registration Government Services [South Sudan]" />
            <Navbar />
            <Routes>
                <Route path="register" element={<PermitDetails />} />
                <Route path="payment" element={<Payment />} />
                <Route path="validate-permit" element={<ValidatePermit />} />
            </Routes>
            <Footer/>
        </>

    )
}

export default IndexPage