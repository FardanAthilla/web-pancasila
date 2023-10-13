import React from "react";

function Makanan() {
    return (
        <div>
            {/*Makanan*/}
            <h1 className="judul-makanan" id="Makanan">Makanan</h1>
            <section className="makanan">
                <div className="img">
                    <img src="../gambar/4.png" alt="" />
                </div>
                <div className="makanan-content">
                    <h1>Lakse</h1>
                    <p>Lakse adalah sejenis hidangan khas yang berasal dari Kepulauan Riau, Indonesia. Ini adalah makanan laut yang biasanya terdiri dari berbagai macam seafood, seperti ikan, udang, kepiting, dan kerang, yang dimasak dalam bumbu pedas dengan saus berbasis santan atau kelapa. Hidangan ini dikenal karena rasa gurih, pedas, dan kaya rempah-rempahnya. Makanan Khas Kepulauan Riau sejenis mie ini dicampur dengan perpaduan bumbu tionghoa dan Melayu. Kata lakse diambil dari bahasa Sansakerta yang artinya “banyak”. Cukup masuk akal juga karena makanan ini dibuat dengan macam-macam bumbu.</p>
                    <a href="https://cookpad.com/id/cari/Lakse?event=search.typed_query" className="btn-makanan" target="_blank" >Lihat Makanan</a>
                </div>
            </section>

            <section className="makanan">
                <div className="makanan-content">
                    <h1>Sop Ikan Batam</h1>
                    <p>Batam selain dikenal sebagai pusat perdagangan, juga memiliki kuliner yang juara. Namanya Sop Ikan Batam yang diolah dari ikan ikan tenggiri dengan kuah berwarna bening. Ditambah beberapa tetes air jeruk nipis dan kecap asin membuat rasanya semakin segar disantap di siang atau malam hari. Kalau suka pedas? bisa ditambahkan cabai rawit. Selain ikan, Sop Ikan Batam seringkali diberi tambahan seperti tomat, jagung manis, tahu, jamur, dan bisa juga menggunakan bahan-bahan lain sesuai selera. Hidangan ini juga sering dihiasi dengan potongan daun bawang dan seledri untuk memberikan tampilan yang menarik.</p>
                    <a href="https://cookpad.com/id/cari/Sop%20Ikan%20Batam?event=search.typed_query" className="btn-makanan" target="_blank">Lihat Makanan</a>
                </div>
                <div className="img">
                    <img src="../gambar/2.png" alt="" />
                </div>
            </section>

            <section className="makanan">

                <div className="img">
                    <img src="../gambar/3.png" alt="" />
                </div>
                <div className="makanan-content">
                    <h1>Gong Gong</h1>
                    <p>Gonggong adalah sejenis kerang laut yang merupakan makanan khas dari Kepulauan Riau, Indonesia. Gonggong dikenal sebagai hidangan laut yang populer di wilayah tersebut. Hidangan ini biasanya diolah dengan cara yang sederhana, yaitu dengan merebus atau mengukus gonggong hingga matang, lalu disajikan dengan berbagai saus atau bumbu.Salah satu cara populer untuk menghidangkan gonggong adalah dengan saus sambal pedas. Saus sambal ini bisa dibuat dengan berbagai varian rasa, tergantung pada preferensi individu, tetapi umumnya saus tersebut memiliki rasa pedas, asam, manis, dan gurih.</p>
                    <a href="https://cookpad.com/id/cari/Gong%20Gong?event=search.typed_query" className="btn-makanan" target="_blank">Lihat Makanan</a>
                </div>
            </section>

            <section className="makanan">
                <div className="makanan-content">
                    <h1>Asam Pedas Baung</h1>
                    <p>Kepulauan Riau memang kaya akan kuliner berbahan dasar ikan. Asam Pedas Baung adalah olahan khas Riau yang menjadi andalan bagi para pecinta kuliner. Baung adalah ikan air tawar yang mempunyai protein tinggi namun rendah lemak. Ikan ini habitatnya ada di Sungai Besar atau muara sungai.Rempah-rempah yang digunakan untuk meracik Asam Pedas Baung adalah jahe, serai, kemiri, lengkuas, cabe merah, daun kunyit, dan lain-lain. Kuahnya berwarna merah, dagingnya lembut dan kenyal dengan rasa yang khsa membuat siapa saja ingin mencobanya</p>
                    <a href="https://cookpad.com/id/cari/Asam%20Pedas%20Baung?event=search.typed_query" className="btn-makanan" target="_blank">Lihat Makanan</a>
                </div>
                <div className="img">
                    <img src="../gambar/1.png" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Makanan;