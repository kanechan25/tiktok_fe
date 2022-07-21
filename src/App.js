import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { publicRoutes } from '~/routes/routes';
import { Fragment } from 'react';
import DefaultLayout from '~/components/Layout/Default/Default';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout =
                            route.layout === null ? Fragment : DefaultLayout;
                        const Component = route.component;
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
            </div>
        </Router>
    );
}

export default App;
