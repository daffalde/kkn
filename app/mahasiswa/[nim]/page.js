import dataMahasiswa from "@/app/data/dataMahasiswa.json";
import style from "./page.module.css";
import Image from "next/image";

export default async function MahasiswaPage({ params }) {
  const { nim } = await params;
  const mahasiswa = dataMahasiswa.find((m) => String(m.nim) === String(nim));
  console.log("halo");
  console.log(mahasiswa.nim);
  return (
    <div className={style.container}>
      <div
        className={style.content}
        style={{
          background: `url(/${mahasiswa.nim}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={style.gradient}></div>
        <div className={style.top}>
          <button className={style.topBack}>
            <Image
              className={style.imgIcon}
              src="/back.png"
              alt="back icon"
              width={25}
              height={25}
            />
          </button>
          <p>Swipe ke bawah untuk info detail.</p>
        </div>
        <div className={style.bottom}>
          <div className={style.bottomName}>
            <h1>{mahasiswa.nama}</h1>
            <h2>{mahasiswa.posisi}</h2>
          </div>
          <div className={style.bottomAction}>
            <button className={style.hubungiSaya}>
              <Image src="/wa.png" alt="wa icon" width={25} height={25} />
              Hubungi Saya
            </button>
            <button className={style.optionButton}>
              <img src="/option.png" alt="option icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
