import React from "react";

const Program = () => {
  const program = [
    {
      img: "/public/s1.jpeg",
      title: "Program S1 Resmi Madinah Salam",
      des: "Madinah Salam bekerjasama dengan perguruan tinggi terbaik di Indonesia, seperti LIPIA, STDI Jember, UIM Madinah, King Saud University, dll. Sehingga santri bisa mendapatkan ijazah resmi yang diakui oleh PDDIKTI. Sehingga bisa dipakai untuk bekerja",
    },
    {
      img: "/public/dba.jpeg",
      title: "Program Diploma Bahasa Arab",
      des: "progaram belajar bahasa arab untuk semua kalangan, agar memudahkan siapa saja yang mau belajar Bahasa Arab dengan waktu yang fleksibel. Kurikulum yang terstruktur dan efektif",
    },
    {
      img: "/public/ilmi.jpeg",
      title: "Program Diploma Ilmu Syariah",
      des: "Peserta akan belajar Ilmu Syar'i Sesuai Al-Qur'an dan As Sunnah dengan kurikulum yang sudah dirancang dengan baik sehingga pembelajaran  terstruktur dan efektif",
    },
    {
      img: "/public/kursus.png",
      title: "Program Kursus Madinah Salam",
      des: "Program Kursus madinah salam menyediakan pembelajaran bahasa inggris dan bahasa arab untuk anak dan dewasa. dan setiap kelasnya hanya terdiri 10 Santri saja",
    },
    {
      img: "/public/qur'an.png",
      title: "Program Diploma Qur'an",
      des: "Program belajar Al-Qur'an dengan kurikulum yang terstruktur dan efektif. untuk semua kalangan anak dan dewasa yang ingin belajar Al-Qur'an. Ada Tahsin, Tahfidz, talaqi",
    },
  ];

  return (
    <div id="program" className="flex py-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 lg:p-20 lg:mt-[-60px]">
      <div className="items-center justify-center w-full">
        <h1 className="text-3xl font-bold font-[poppins] mt-5 text-center lg:text-5xl lg:mb-10">
          Program
        </h1>
        <div className="grid grid-cols-1 gap-5 p-7 mt-[-20px] lg:grid-cols-3 lg:gap-10 lg:p-5">
          {program.map((item, index) => (
            <div
              className="flex flex-col p-5 py-10 transition-shadow duration-300 rounded-md shadow-lg hover:shadow-2xl hover:shadow-gray-600"
              key={index}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full mb-3 rounded-lg shadow-md hover:shadow-lg lg:w-[400px] lg:h-[200px]"
              />
              <div className="w-full">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="mt-2 text-gray-700">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
