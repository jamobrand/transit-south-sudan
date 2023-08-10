import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navigation"
import SEO from "../components/seo"
import PermitDetails from "../components/domain/permit-details"
import Payment from "../components/domain/payment"
import ValidatePermit from "../components/domain/validate-permit"
import Footer from "../components/molecules/footer"
import ManagePermit from "../components/domain/manage-permit"
import PermitComplete from "../components/domain/permit-complete"

const IndexPage = () => {
    return (
        <>
            <div className="bg-gray-100 text-gray-900">
                <SEO title="Transit Registration Government Services [South Sudan]" />
                <Navbar />
                <Routes>
                    <Route path="register" element={<PermitDetails />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="validate-permit" element={<ValidatePermit />} />
                    <Route path="manage-permit" element={<ManagePermit />} />
                    <Route path="permit-complete" element={<PermitComplete />} />
                </Routes>

            </div>
            <Footer />
        </>

    )
}

export default IndexPage