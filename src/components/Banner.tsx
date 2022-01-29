import React from "react";

import classes from './../styles/App/App.module.css';



export const Banner: React.FC = () => {


    return (
        <div className={classes.banner}>
            <h1>We Build Brand</h1>
            <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </span>
            <button>LEARN MORE</button>
            <a href=""></a>
        </div>
    )
}