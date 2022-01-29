import React from "react";

import classes from './../styles/App/App.module.css';
import logo from './../assets/b-logo.png'

export const Header: React.FC = () => {


    return (
        <div className={classes.header} >
            
            <a href="#" className={classes.logo_wrapper}>
                <div className={classes.logo}>
                    <div className={classes.logo_img}>
                        <img src={logo} alt="logo"/>
                    </div>

                    <div className={classes.logo_title}>
                        <h2>BLA BLA</h2>
                        <h3>One Page Flat Template</h3>
                    </div>

                </div>
            </a>
            
            <div className={classes.buttons}>
                <button>HOME</button>
                <button>PORTFOLIO</button>
                <button>ABOUT</button>
                <button>CONTACT</button>
            </div>
        </div>
        
    )
}