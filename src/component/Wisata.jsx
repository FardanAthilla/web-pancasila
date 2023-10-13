import React from "react";

function Wisata() {
    return (
        <div>
            {/* Wisata */}
            <h3 className="judul-wisata1" id="Wisata">Wisata</h3>
            <h1 className="judul-wisata2">Kepulauan Riau</h1>
            <section className="wisata" id="Wisata">
                <div className="card2">
                    <img src="../gambar/wisata1.png" alt="Gambar 1" />
                    <div className="info-card2">
                        <h3><i class="fa-solid fa-location-dot"></i>  Busung, Kec. Seri Kuala Lobam, Kabupaten Bintan</h3>
                        <h2>Gurun Pasir Bintan</h2><a href="https://maps.app.goo.gl/AyYnAs2YtKfJaP1X7" className="btn-wisata" target="_blank">Lihat Di Peta</a>
                    </div>
                </div>

                <div className="card2">
                    <img src="../gambar/wisata2.png" alt="Gambar 2" />
                    <div className="info-card2">
                        <h3><i class="fa-solid fa-location-dot"></i>  Galang Baru, Galang, Kota Batam, Kepulauan Riau</h3>
                        <h2>Pulau Ranoh</h2><a href="https://maps.app.goo.gl/gwDiAt997vhqFpoS7" className="btn-wisata" target="_blank">Lihat Di Peta</a>
                    </div>
                </div>

                <div className="card2">
                    <img src="../gambar/wisata3.png" alt="Gambar 3" />
                    <div className="info-card2">
                        <h3><i class="fa-solid fa-location-dot"></i>  Pulau Pengalap, Galang, Kota Batam, Kepulauan Riau</h3>
                        <h2>Kepri Coral</h2> <a href="https://maps.app.goo.gl/X1ex6z5jXDHmZJw66" className="btn-wisata" target="_blank">Lihat Di Peta</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Wisata;