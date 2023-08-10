import React, { lazy, Suspense } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Spinner from "./components/spinner"

const IndexPage = lazy(() => import("./pages/index"))
const Transit = lazy(() => import("./pages/transit"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IndexPage />} />
      <Route path="transit/*" element={<Transit />} />
    </>
  )
)

const Loading = () => (
  <div className="bg-gray-50 text-gray-90 flex h-screen w-full items-center justify-center">
    <Spinner />
  </div>
)


const App: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
)

export default App