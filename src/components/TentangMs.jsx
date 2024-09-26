import { MdOutlineMenuBook, MdOutlineLaptopChromebook } from "react-icons/md";
import { PiAddressBookTabsFill } from "react-icons/pi";

const TentangMs = () => {
  const tentang = [
    {
      img: <MdOutlineMenuBook />,
      title: "Belajar Lebih Nyaman dan Fleksibel",
      desc: "Peserta dapat belajar apa saja dengan jadwal yang fleksibel tanpa batas waktu",
    },
    {
      img: <MdOutlineLaptopChromebook />,
      title: "Metode Pembelajaran Interaktif",
      desc: "Terdapat fitur Belajar Live dan terpersonalisasi yang memudahkan anak untuk berdiskusi secara real-time.",
    },
    {
      img: <PiAddressBookTabsFill />,
      title: "Guru Berpengalaman dan Kompeten",
      desc: "Guru yang mampu menciptakan lingkungan belajar kondusif dengan menggunakan materi berkualitas yang dirancang oleh para ahli.",
    },
  ];

  return (
    <div id="about" className="flex flex-col items-center justify-center p-5 py-5 mx-auto bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 lg:p-20 lg:mt-[-70px]">
      <div className="flex flex-col items-center justify-center p-3 lg:flex-row mb-7 lg:w-[1200px] gap-10">
        <div className="flex flex-col items-center justify-center mb-5 lg:mr-10 lg:mb-0 lg:w-[500px] lg:mt-[-20px]">
          <h1 className="text-xl font-bold font-[poppins] text-center mb-7 lg:text-3xl lg:text-start">
            Mengapa Memilih Belajar di Madinah Salam?
          </h1>
          <iframe
            className="w-full h-64 rounded-lg md:h-80"
            src="https://www.youtube.com/embed/qCCVIrMb_6k?si=0PIy-tvfsEOrw8Rv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 lg:w-[600px] lg:mt-28">
          {tentang.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center lg:flex-row"
            >
              <div className="mb-3 text-7xl lg:w-[270px]">{item.img}</div>
              <div className="mx-auto text-lg font-[poppins] text-gray-700 lg:text-start">
                <h2 className="font-bold">{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TentangMs;
