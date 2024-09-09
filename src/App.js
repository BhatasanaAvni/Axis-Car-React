import "./App.css";
import React, { Suspense } from "react";

// const Header = React.lazy(() => import("./Component/Header"));
const Main = React.lazy(() => import("./Component/Main"));
const Collection = React.lazy(() => import("./Component/Collection"));
const Service = React.lazy(() => import("./Component/Service"));
const Slider = React.lazy(() => import("./Component/Slider"));
const Facility = React.lazy(() => import("./Component/Facility"));
const Performence = React.lazy(() => import("./Component/Performence"));
const Footer = React.lazy(() => import("./Component/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading.....</div>}>
        {/* <Header /> */}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Collection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Service />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Slider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Facility /> */}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Performence />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense> */}
    </>
  );
}

export default App;
