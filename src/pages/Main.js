import React, { useRef ,useEffect} from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import ThemecastContent from '../components/ThemecastContent';

export default function Main (){
    

    return(
        <div  className="Main">
            {/* <Header/>
            <Banner/>
            <ThemecastContent />
            <Footer/> */}
            <SideNav/>
        </div>
    );
}