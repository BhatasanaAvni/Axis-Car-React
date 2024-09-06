import "./App.css";
import React ,{ Suspense } from "react";


const Header =React.lazy(()=>import("./Component/Header"))
const Main =React.lazy(()=>import("./Component/Main"))
const Collection =React.lazy(()=>import("./Component/Collection"))
const Service =React.lazy(()=>import("./Component/Service"))
const Slider =React.lazy(()=>import("./Component/Slider"))
const Facility =React.lazy(()=>import("./Component/Facility"))
const Performence =React.lazy(()=>import("./Component/Performence"))
const Footer =React.lazy(()=>import("./Component/Footer"))

function App() {
  return (
    <>
<Suspense fallback={<div>Loading.....</div>}>
      <Header />
      <Main />
      <Collection />
      <Service />
      <Slider />
      <Facility />
      <Performence />
      <Footer />
</Suspense>
    </>
  );
}

export default App;
