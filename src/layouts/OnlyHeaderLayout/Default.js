import Header from '~/layouts/DefaultLayout/Header/Header';
import PropTypes from 'prop-types';

function OnlyHeader({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
};
export default OnlyHeader;
