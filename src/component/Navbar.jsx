import React, { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Navbar */}
            <header className={`header ${scrolled ? "scrolled" : ""}`}>
                <a href="#" className="logo">
                    <img src="../gambar/logo1.png" alt="" />
                </a>

                <img src="../gambar/icon.png" id="menu-icon" />

                <nav className="navbar">
                    <a href="#Sejarah">Sejarah</a>
                    <a href="#Makanan">Makanan</a>
                    <a href="#Adat">Adat</a>
                    <a href="#Wisata">Wisata</a>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;