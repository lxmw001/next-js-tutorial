import Footer from "./Footer";
import Navbar from "./Nabvar";

const Layout = ({ children }: any) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;