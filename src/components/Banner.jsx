const Banner = () => {
  const Living = [
    {
      img: "/dba.jpeg",
      title: "Living Arabic",
      des: "Menghadirkan peembelajaran Bahasa Arab dengan dengan assatidazah dan guru-guru yang kompeten. lulusan universitas terbaik baik dalam maupun luar negeri seperti LIPIA, STDI Jember, UIM Madinah, King Saud University, dll.",
    },
    {
      img: "/s1.jpeg",
      title: "Siap Kuliah",
      des: "Tidak hanya belajar ilmu syar'i, di Madinah Salam juga disediakan program S1 Resmi yang bekerjasama dengan perguruan tinggi dalam negeri agar, santri yang belajar biasa berkesempatan untuk mendapatkan ijazah Resmi yang diakui PDDIKTI",
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <div
        id="home"
        className="flex flex-col items-center justify-center gap-10 p-5 py-10 mx-auto md:flex-row bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 lg:p-20"
      >
        <div>
          <h1 className="text-xl font-bold font-[poppins] mb-2 lg:text-5xl lg:mt-[-70px] lg:mb-5">
            Madinah Salam
          </h1>
          <p className="text-lg font-[poppins] mb-2 lg:mb-7">
            Solusi Lengkap Belajar Ilmu Syar'i Terstruktur
          </p>
          <p className="text-lg font-[poppins] mt-3 lg:w-[500px]">
            Cara belajar efektif dengan kelas interaktif & pendekatan
            kontekstual
          </p>
        </div>
        <div>
          <img
            src="/ms2.jpg"
            alt="Madinah Salam"
            className="w-full h-full pb-5 rounded-md lg:w-[600px] lg:h-[300px] lg:hover:scale-110 duration-300 ease-in-out cursor-pointer"
          />
        </div>
      </div>

      {/* Living Cards Section */}
      <div className="flex flex-col items-center justify-center w-full gap-10 p-5 py-5 mx-auto md:flex-row bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 lg:p-36">
        {Living.map((item, index) => (
          <div
            key={index}
            className="py-3 lg:mt-[-100px]  p-5 lg:shadow-2xl  lg:rounded-lg lg:p-5 transition-shadow duration-300 rounded-md shadow-lg hover:shadow-2xl hover:shadow-gray-600"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full duration-300 ease-in-out rounded-lg cursor-pointer lg:hover:scale-110"
            />
            <h1 className="text-xl font-medium font-[poppins] py-3">
              {item.title}
            </h1>
            <p className="text-lg font-[poppins] text-gray-700">{item.des}</p>
            <button className="py-3 text-md font-[poppins] bg-slate-300 rounded-full mt-5 w-full">
              Pelajari Selengkapnya
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
