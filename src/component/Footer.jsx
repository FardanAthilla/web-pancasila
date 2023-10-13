import React from "react";

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>SMK Raden Umar Said Kudus</h3>
                    <p className="footer-links">
                        <a href="https://www.youtube.com/@smkruskudus9645" target="_blank">Youtube</a> | <a href="https://www.instagram.com/rus.id_/" target="_blank">Instagram</a> | <a href="https://www.google.com/maps/place/SMK+Raden+Umar+Said/@-6.7537856,110.8402658,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70db068724fae7:0x7610925ddad70c54!8m2!3d-6.7537856!4d110.8428407!16s%2Fg%2F1hm29l3ts?entry=ttu" target="_blank">Peta</a>
                    </p>
                    <p className="footer-company-name">Jalan Sukun Raya No.09, Besito Kulon,<br /> Besito, Kec. Gebog, Kabupaten Kudus, <br />Jawa Tengah 59333</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <p>Fardan Athilla Haidar</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <p>Mirza Zulfadhli Amin</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <p>Muhammad Zikrinayah</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <p>Roja Ridho Robbihi</p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Tentang kami</span>
                        Halaman Website ini dibuat oleh kelompok 11 PPLG 1 untuk penilaian tugas PPKN, Semua isi yang berada dalam website ini diambil dari website resmi Provinsi Kepulauan Riau
                    </p>
                    <div className="footer-icons">
                        <a href="https://www.youtube.com/channel/UCiH5KcZkbVfORPIevFTWVBw"><i class="fa-brands fa-youtube" target="blank"></i></a>
                        <a href=""><i class="fa-brands fa-facebook" target="blank"></i></a>
                        <a href="https://www.linkedin.com/in/muhammad-zikrinayah-54b99528b/" target="blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/fardan_athilla/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;