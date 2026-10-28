import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
// import ExperiencesPage from "./pages/ExperiencesPage.jsx";
// import TourDetailPage from "./pages/TourDetailPage.jsx";
// import CategoryPage from "./pages/CategoryPage.jsx";
// import TransfersPage from "./pages/TransfersPage.jsx";
// import DestinationsPage from "./pages/DestinationsPage.jsx";
// import BookingPage from "./pages/BookingPage.jsx";
// import BookingSuccessPage from "./pages/BookingSuccessPage.jsx";
// import AboutPage from "./pages/AboutPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";
// import FAQPage from "./pages/FAQPage.jsx";
// import AdminPage from "./pages/AdminPage.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";
// import DestinationDetailPage from "./pages/DestinationDetailPage.jsx";
// import AirportTransfersPage from "./pages/AirportTransfersPage.jsx";
// import CorporatePage from "./pages/CorporatePage.jsx";
// import GuidesPage from "./pages/GuidesPage.jsx";
// import GuideDetailPage from "./pages/GuideDetailPage.jsx";
// import OffersPage from "./pages/OffersPage.jsx";
// import TravelInfoPage from "./pages/TravelInfoPage.jsx";
// import PolicyPage from "./pages/PolicyPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/experiences/:slug" element={<TourDetailPage />} />
        <Route
          path="/desert-safari"
          element={
            <CategoryPage
              category="Desert Safari"
              title="Desert, reimagined."
              eyebrow="Beyond the city"
              text="Private and shared desert requests, shaped with care and confirmed manually by our team."
            />
          }
        />
        <Route
          path="/dubai-tours"
          element={
            <CategoryPage
              destination="Dubai"
              title="Dubai, in full contrast."
              eyebrow="City collection"
              text="From creek-side heritage to future-facing landmarks, explore a city built on contrast."
            />
          }
        />
        <Route
          path="/abu-dhabi-tours"
          element={
            <CategoryPage
              destination="Abu Dhabi"
              title="The capital, composed."
              eyebrow="Abu Dhabi"
              text="Cultural landmarks, island districts and waterfront moments in a privately paced day."
            />
          }
        />
        <Route
          path="/attractions"
          element={
            <CategoryPage
              category="Attractions"
              title="The city’s icons, planned."
              eyebrow="Tickets & attractions"
              text="Request attraction access and timing as part of a considered UAE itinerary."
            />
          }
        />
        <Route path="/transfers" element={<TransfersPage />} />
        <Route path="/airport-transfers" element={<AirportTransfersPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/success" element={<BookingSuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:slug" element={<GuideDetailPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/travel-information" element={<TravelInfoPage />} />
        <Route path="/policies/:type" element={<PolicyPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}
