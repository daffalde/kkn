"use client";

import dataMahasiswa from "@/app/data/dataMahasiswa.json";
import style from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MahasiswaPage({ params }) {
  const { nim } = params;
  const mahasiswa = dataMahasiswa.find((m) => String(m.nim) === String(nim));
  const mahasiswaExcept = dataMahasiswa.filter(
    (m) => String(m.nim) !== String(nim)
  );

  const [detail, setDetail] = useState(false);

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
        <div
          className={`${style.gradient} ${detail ? style.gradientOn : " "}`}
        ></div>
        <div className={style.top}>
          <Link href={"/"} className={style.topBack}>
            <Image
              className={style.imgIcon}
              src="/back.png"
              alt="back icon"
              width={25}
              height={25}
            />
          </Link>
          <div className={style.topInfo}>
            <p>Klik</p>
            <img src="/option.png" alt="option icon" width={"20px"} />
            <p> untuk info detail.</p>
          </div>
        </div>
        <div
          className={`${style.bottom} ${detail ? style.detailVariable : " "}`}
        >
          <div className={style.bottomName}>
            <h1>{mahasiswa.nama}</h1>
            <h2>{mahasiswa.posisi}</h2>
          </div>
          {detail ? (
            <div
              className={style.bottomDetail}
              style={{ height: detail ? "100%" : "0%" }}
            >
              <h3>Info Mahasiswa :</h3>
              <div className={style.bottomDetailContent}>
                <div className={style.bottomDetailInfo}>
                  <p>Kelompok KKN</p>
                  <p>3</p>
                </div>
                <div className={style.bottomDetailInfo}>
                  <p>Lokasi KKN</p>
                  <p>Dusun Durensawit</p>
                </div>
                <div className={style.bottomDetailInfo}>
                  <p>Jurusan</p>
                  <p>{mahasiswa.jurusan}</p>
                </div>
                <div className={style.bottomDetailInfo}>
                  <p>Fakultas</p>
                  <p>{mahasiswa.fakultas}</p>
                </div>
                <div className={style.bottomDetailInfo}>
                  <p>Universitas</p>
                  <p>
                    Universitas Mercubuana <br />
                    Yogyakarta
                  </p>
                </div>
                <div className={style.bottomDetailInfo}>
                  <p>NIM</p>
                  <p>{mahasiswa.nim}</p>
                </div>
              </div>
              <h3>Mahasiswa Lain :</h3>
              <div className={style.bottomMahasiswaLain}>
                {mahasiswaExcept.map((e) => {
                  return (
                    <>
                      <Link
                        href={`/mahasiswa/${e.nim}`} // Mengarah ke rute dinamis, misal: /mahasiswa/12345
                        key={e.nim}
                      >
                        <div className={style.bmlList}>
                          <div
                            className={style.bmlListImage}
                            style={{
                              background: `url(/${e.nim}.jpg)`,
                              backgroundSize: "cover",
                              backgroundPosition: "top",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                          <h3 className={style.bmlListName}>{e.nama}</h3>
                          <p>{e.posisi}</p>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          ) : null}
          <div className={style.bottomAction}>
            <Link
              href={`https://wa.me/${mahasiswa.wa}?text=${encodeURIComponent(
                "Halo,Saya ingin bertanya."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={style.hubungiSaya}
            >
              <Image src="/wa.png" alt="wa icon" width={25} height={25} />
              <p>Hubungi Saya</p>
            </Link>
            <button
              onClick={() => setDetail(!detail)}
              className={style.optionButton}
            >
              <img
                src={`${detail ? "/close.png" : "/option.png"}`}
                alt="option icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
