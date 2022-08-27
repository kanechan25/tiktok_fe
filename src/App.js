import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Fragment } from 'react';

import { publicRoutes } from './routes/routes';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import CustomScrollbars from './components/CustomScrollbar/CustomScrollbars';

function App() {
    return (
        <Router>
            <div className="App">
                <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Component = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </CustomScrollbars>
            </div>
        </Router>
    );
}

export default App;
