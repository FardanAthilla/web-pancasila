import React from "react";

function Sejarah() {
    return (
        <div>
            {/* Sejarah */}
            <section className="sejarah-semua">
                <section className="sejarah" id="Sejarah">
                    <div className="sejarah-content">
                        <h3>Sejarah</h3>
                        <h1>Provinsi<br />Kepulauan Riau</h1>
                        <p>Masa sejarah di Kepulauan Riau dimulai dengan ditemukannya Prasasti Pasir Panjang di Kabupaten Karimun yang terdapat semboyan pemujaan melalui tapak kaki Buddha. Hal ini diduga berhubungan dengan Kerajaan Melayu di Sumatra. Buddha diperkiran masuk melalui pedagang dari Tiongkok dan India.
                            <br /><br />
                            Masa Islam di Kepulauan Riau berkembang dengan berdirinya Kesultanan Riau-Lingga. Kesultanan ini berasaskan Melayu Islam dan Islam sendiri dikenal setelah dibawa oleh pedagang dari Gujarat, India, dan Arab.</p>
                        <a href="https://kepriprov.go.id/laman/tentang-kepri" className="btn-sejarah" target="_blank">Pelajari Lebih Lanjut </a>
                    </div>

                    <div className="img">
                        <img src="../gambar/gambar.png" alt="" />
                    </div>
                </section>
                <section className="sejarah-next">
                    <p>Adapun Afdeeling Indragiri yang terdiri dari Kuantan, Indragirische Bovenlanden dan Indragirische Benedenlanden, yang pada awal mulanya merupakan satu kesatuan dengan Kepulauan Riau, pada akhirnya, sesudah tahun 1950-an,dimasukkan ke dalam Riau. <br /> <br />

                        Setelah masa kemerdekaan, Kepulauan Riau bergabung dengan wilayah Kesultanan Siak di daratan Sumatra sehingga membentuk provinsi Riau. Dahulunya, Kepulauan Riau juga menggunakan mata uang tersendiri bernama Uang Kepulauan Riau (KR). Namun secara perlahan, penggunaan mata uang ini dihentikan dan digantikan dengan mata uang Rupiah. <br /> <br />

                        Setelah lama bergabung dengan Riau, Kepulauan Riau akhirnya memutuskan untuk memisahkan diri dengan membentuk Badan Perjuangan Pembentukan Provinsi Kepulauan Riau (BP3KR). Perjuangan BP3KR akhirnya membuahkan hasil dengan pemekaran provinsi Kepulauan Riau dari Riau pada tanggal 24 September 2002.</p>
                    <div class="garis"></div>

                    <div className="card-container-sejarah">
                        <div className="sejarah-afternext">
                            <i id="logo" class="fa-regular fa-user fa-2xl"></i>
                            <h1>Populasi</h1>
                            <p>Tahun 2020, penduduk Kepulauan Riau berjumlah 2.064.564 jiwa, dengan kepadatan 252 jiwa/km2, dan 58% penduduknya berada di kota Batam. Pada tahun 2022 adalah 2.109.092 jiwa. Jumlah ini mengalami peningkatan sebesar 2,2% jika dibandingkan dengan tahun 2021 yang berjumlah 2.055.278 jiwa.</p>
                        </div>
                        <div className="sejarah-afternext">
                            <i id="logo" class="fa-solid fa-location-dot fa-2xl"></i>
                            <h1>Titik Tertinggi</h1>
                            <p>Gunung Daik adalah gunung yang terletak di Pulau Lingga, Kabupaten Lingga, Provinsi Kepulauan Riau, Indonesia. Gunung ini adalah gunung tertinggi di Provinsi Kepulauan Riau.Gunung Daik memiliki ketinggian 1.165 meter dpl dengan puncaknya memiliki kesulitan panjat tebing 5.9-5.11.</p>
                        </div>
                    </div>
                    <div className="card-container-sejarah">
                        <div className="sejarah-afternext">
                            <i id="logo" class="fa-regular fa-user fa-2xl"></i>
                            <h1>Luas Wilayah</h1>
                            <p>Secara geografis provinsi Kepulauan Riau berbatasan dengan negara tetangga, yaitu Singapura, Malaysia, dan Vietnam yang memiliki luas wilayah 251.810,71 km² dengan 96 persennya adalah perairan dengan 1.350 pulau besar.</p>
                        </div>
                        <div className="sejarah-afternext">
                            <i id="logo" class="fa-solid fa-city fa-2xl"></i>
                            <h1>Ibu Kota</h1>
                            <p>Ibu kota Kepulauan Riau adalah Kota Tanjung Pinang. Kota Tanjung Pinang terletak di Pulau Bintan, yang merupakan salah satu dari ribuan pulau yang membentuk provinsi Kepulauan Riau di Indonesia.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
export default Sejarah;