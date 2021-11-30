import { Link } from 'react-router-dom';
import './Accountmail.css';
const Accountmail = () => {
    return (
        <div className="account">
            <div className="account__header">
                <div className="account__logo">
                    <h1>Subspace.</h1>
                </div>
                <div className="account__links">
                    <p>Already a user?</p>
                    <button>Log In</button>
                </div>
            </div>
            <div className="account__body">
                <div className="account__body__left">
                    <div className="account__body__left__email">
                        <h3>Verify your email</h3>
                        <small>A verification code has been sent to abc@gmail.com</small>
                        <p>Verification code</p>
                        <input type="text" placeholder="6 digit verification code"/>
                        <small>Didn't recieve the code? <a href="/somewhere">Resend</a></small>
                        <button>Verify Email</button>
                    </div>
                </div>
                <div className="account__body__right">
                    <div className="account__body__right__info">
                        <h2>Why choose SubSpace?</h2>
                        <p>2000+ businesses trust their payments with SubSpace.</p>
                    </div>
                    <div className="account__body__right__logos">
                        <div className="account__body__right__logos__row">
                            <img alt="" src="https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?fit=2048%2C2048&strip=all"/>
                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png"/>
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiLHlQFacU7SFa6qM7haLJGcX7RZXpDJ0TyXL8mkT-xaczuFlEfGHyPjVd7fxc7H342M&usqp=CAU"/>
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZXdc-RduaHBxnbaVMqqD2IyrcgYLKpFqlIo58DsPcEhcQwJK9yLIb_juGewnb3lLiIg&usqp=CAU"/>
                        </div>
                        <div className="account__body__right__logos__row">
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg"/>
                            <img alt="" src="https://i.pinimg.com/originals/6e/f5/1e/6ef51e396c839786dd4135b641aab0c2.png"/>
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CSKSr2_CWP0r-IOt_cHdctO4f4SBh6HgvHgA_Tdf5Uq6aPyL6JjNHxclCWX-ES_RHxQ&usqp=CAU"/>
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Aha_OTT_Logo.svg/400px-Aha_OTT_Logo.svg.png"/>
                        </div>
                        <div className="account__body__right__logos__row">
                            <img alt="" src="https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"/>
                            <img alt="" src="https://play-lh.googleusercontent.com/AS0Z1xkuhveb3IXzYASn52nhlFDIwcEmu1XmewVDZ39R8fZrQ13wldCy2nbjx9Aa1WCS"/>
                            <img alt="" src="https://logosarchive.com/wp-content/uploads/2021/07/Byjus-icon.png"/>
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8IbGcao0WvB7aG0mrTdIQ0CHTpqlsNP309-w_LoAU5HZHefCVE7GjUYNP-Fa_3le1TI&usqp=CAU"/>
                        </div>
                    </div>
                    <p>Need help? We are just a click away. <a href="/">Contact us</a></p>
                </div>
            </div>
            <Link to="/">
                <div>
                    <button>Previous</button>
                </div>
            </Link>
        </div>
    );
}

export default Accountmail;