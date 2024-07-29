import Navbar from "../Navbar";

const Wrapper = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
  </div>
);

export default Wrapper;