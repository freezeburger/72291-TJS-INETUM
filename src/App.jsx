
import { BrowserRouter, Routes, Route } from "react-router";

import ViewLogin from "./views/ViewLogin";
import ViewProducts from "./views/ViewProducts";
import ViewDetail from "./views/ViewDetail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewLogin />} />
          <Route path="/products" element={<ViewProducts />} />
          <Route path="/products/:id" element={<ViewDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
