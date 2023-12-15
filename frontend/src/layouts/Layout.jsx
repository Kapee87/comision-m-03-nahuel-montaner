import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";


export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    )
}