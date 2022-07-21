import Header from '~/components/Layout/Default/Header/Header';
import Sidebar from '~/components/Layout/Default/Sidebar/Sidebar';
import Footer from '~/components/Layout/Default/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
