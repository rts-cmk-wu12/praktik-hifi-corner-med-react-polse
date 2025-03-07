import routes from "~react-pages";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Footer from "~components/footer";
import Navbar from "~components/navbar";


function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      <Footer />
    </>
  );
}
export default App;
