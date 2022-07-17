import React from "react";
import iconMBL from "../assets/img/MBL.png";
import iconQ from "../assets/img/Q.png";
import iconS from "../assets/img/S.png";
import iconP from "../assets/img/P.png";
import icon_ from "../assets/img/_.png";

function SideNav () {
    return (
        <div className="SideNav">
            <nav>
                <div className="nav_wrapper">
                    <input type={"image"} name="MBL" src={iconMBL} />
                    <div className="QSP_wrapper" >
                        <input type={"image"} name="Q" src={iconQ} />
                        <input type={"image"} name="S" src={iconS} />
                        <input type={"image"} name="P" src={iconP} />
                    </div>
                </div>
                <input id="setting" type={"image"} name=">" src={icon_} />
            </nav>
        </div>
    );
}

export default SideNav;