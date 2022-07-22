import React ,{ useRef } from "react";
import iconMBL from "../assets/img/MBL.png";
import iconQ from "../assets/img/Q.png";
import iconS from "../assets/img/S.png";
import iconP from "../assets/img/P.png";
import icon_ from "../assets/img/_.png";

function SideNav () {
    const ref_title_QnA = useRef();
    const ref_container_QnA = useRef();
    const ref_title_Study = useRef();
    const ref_container_Study = useRef();
    const ref_title_Project = useRef();
    const ref_container_Project = useRef();
    const handleClassNameQ = () => {
        const span = ref_title_QnA.current;
        const span2 = ref_container_QnA.current;
        if(span2.className ==="container expanded"){
            span.className = "title";
            span2.className = "container";
        }else{
            span.className += " expanded";
            span2.className += " expanded";
            ref_container_Study.current.className = "container";
            ref_title_Study.current.className = "title";
            ref_container_Project.current.className = "container";
            ref_title_Project.current.className = "title";
        }
    }
    const handleClassNameS = () => {
        const span = ref_title_Study.current;
        const span2 = ref_container_Study.current;
        if(span2.className ==="container expanded"){
            span.className = "title";
            span2.className = "container";
        }else{
            span.className += " expanded";
            span2.className += " expanded";
            ref_container_QnA.current.className = "container";
            ref_title_QnA.current.className = "title";
            ref_container_Project.current.className = "container";
            ref_title_Project.current.className = "title";
        }
    }
    const handleClassNameP = () => {
        const span = ref_title_Project.current;
        const span2 = ref_container_Project.current;
        if(span2.className ==="container expanded"){
            span.className = "title";
            span2.className = "container";
        }else{
            span.className += " expanded";
            span2.className += " expanded";
            ref_container_Study.current.className = "container";
            ref_title_Study.current.className = "title";
            ref_container_QnA.current.className = "container";
            ref_title_QnA.current.className = "title";
        }
    }
    
    return (
        <>
            <div className="SideNav">
                <nav>
                    <div className="nav_wrapper">
                        <div className="icon_wrapper" >
                            <input type={"image"} name="MBL" src={iconMBL} />
                            <input type={"image"} name="Q" src={iconQ} 
                                onClick={handleClassNameQ} />
                            <input type={"image"} name="S" src={iconS} 
                                onClick={handleClassNameS} />
                            <input type={"image"} name="P" src={iconP} 
                                onClick={handleClassNameP} />
                        </div>
                    </div>
                    <input id="setting" type={"image"} name=">" src={icon_} />
                </nav>
            </div>
            <div className="QnA">
                <p ref={ref_title_QnA} className='title'>Q&A</p>
                <div ref={ref_container_QnA} className='container'>
                </div>
            </div>
            <div className="Study">
                <p ref={ref_title_Study} className='title'>STUDY</p>
                <div ref={ref_container_Study} className='container'>
                </div>
            </div>
            <div className="Project">
                <p ref={ref_title_Project} className='title'>PROJECT</p>
                <div ref={ref_container_Project} className='container'>
                </div>
            </div>
        </>
    );
}

export default SideNav;