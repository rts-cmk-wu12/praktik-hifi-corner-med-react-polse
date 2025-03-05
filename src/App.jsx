import routes from "~react-pages";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      <Footer />
    </>
  );
}
export default App;
