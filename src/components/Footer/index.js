import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";
import Logo from '../../assets/img/logo-dark.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="Logo"/>
                                </Link>

                                <Text>
                                Transform new ideas into innovative products and services that can compete across both local and global markets.
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} Fixy Innovations (Pvt) Ltd. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Our Company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our Products</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="https://facebook.com/hasthemes/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="https://twitter.com/hasthemes/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="https://www.instagram.com/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                                No 294,Temple Road, Dalugama, Kelaniya <br/>
                                fixyinnovations@gmail.com <br/>
                                (+94) 11 572 1872
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;