import Accordian from "./Accordian";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-7 bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 mt-[-120px] py-28">
      <div className="flex flex-col w-full lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:p-24 lg:mt-[-20px]">
        {/* Bagian H1 dan Gambar */}
        <div className="flex flex-col py-2 mb-3 lg:w-[50%] lg:mt-[-20px]">
          <h1 className="mb-8 text-2xl font-bold text-center lg:text-left lg:text-4xl font-[poppins]">
            Pertanyaan Yang Sering Ditanyakan
          </h1>
          <img src="/ms2.jpg" alt="" className="mb-5 rounded-lg lg:w-full " />
        </div>
        {/* Bagian Accordion */}
        <div className="w-full px-4 py-5 rounded-lg shadow-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 lg:w-[70%] lg:px-6 lg:py-8">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default Faq;
