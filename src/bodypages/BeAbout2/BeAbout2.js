import './BeAbout2.scss';

function BeAbout2({ isLogin, data }) {
    return (
        <div className="wrapper-be-about">
            <div className="header-text">{isLogin ? data.loggedin : data.nonlogin}</div>
            <div className="btn-wrapper">
                <button className="feature-btn btn">
                    <span className="feature-btn-text">{data.btntext}</span>
                </button>
            </div>
        </div>
    );
}

export default BeAbout2;
