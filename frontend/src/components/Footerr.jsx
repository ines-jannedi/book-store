import React from "react";
import { Link } from "react-router-dom";

const Footerr = () => {
    return (
        <div className="footer">
            <div className="sb-footer-section">


                        <div className="a">
                            <Link to="/about" ><p className="text">About us</p></Link>
                        </div>

                        <div className="b">
                            <Link to="/privace" ><p className="text">Privacy</p></Link>
                        </div>
 
                        <div className="d">
                            <p className="text">Links for more infos</p> 
                            <div className="div-icons">

                            <a href="https://www.facebook.com/whatisitaboutbooks/"> <img className="icone" src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg" /> </a>
                          <a href="https://www.instagram.com/explore/tags/books/?hl=fr"> <img className="icone" src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg" /></a> 
                          <a href="https://www.linkedin.com/pulse/effective-linkedin-reading-good-book-jeff-young"> <img className="icone" src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg" /> </a>
                            </div>

                       </div>



            </div>


        </div>
    )


}

export default Footerr;
