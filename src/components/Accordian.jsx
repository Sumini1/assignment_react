import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

const Accordian = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-3xl py-2 mx-auto justif-start items-srt">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full py-2 "
      >
        <span className="font-[poppins] flex flex-row justify-start items-start text-start">
          {question}
        </span>
        {open ? (
          <span>
            <MdArrowDropDown className="text-2xl" />
          </span>
        ) : (
          <span>
            <IoMdArrowDropup className="text-2xl" />
          </span>
        )}
      </button>
      <div className={open ? "block" : "hidden"}>
        <div className="py-2 overflow-hidden font-[poppins] flex flex-row justify-start items-start ">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Apa itu Madinah Salam ?",
      answer: "Madinah Salam adalah flatform pembelajaran online yang menyediakan berbagai program pembelajaran interaktif untuk semua kalangan dari anak hingga dewasa sesuai Al-Qur'an dan As Sunnah.",
    },
    {
      question: "Kenapa harus belajar di Madinah Salam?",
      answer: "Media pembelajaran interaktif secara online bukan rekaman, materi pembelajaram terstruktur dan terupdate, serta dinamis sesuai kebutuhan. Kita tidak hanya belajar ilmu syar'i tetapi juga ilmu pengetahuan umum.",
    },
    {
      question: "Program apa saja yang ada di Madinah Salam ?",
      answer: "Proram Diploma Bahasa Arab, Diploma Ilmu Syariah, Program Kursus Madinah Salam, program Diploma Qur'an, dan Program S1 Resmi Madinah Salam.",
    },
    {
      question: "Bagaimana car belajar di Madinah Salam?",
      answer: "Cara belajarnya online via zoom bersama assatidzah dan guru-guru yang kompetent di bidangnya, tersedia UTS dan UAS.  Dan sertifikat apabila telah menyelesaikan satu jurusan dalam satu program",
    },
    {
      question: "Adakah beasiswa di Madinah Salam  ?",
      answer: "Ada beasiswa dengan kriteria tertentu, semua program kecuali program S1",
    },
    {
      question: "Apakah kita akan mendapatkan ijazah resmi",
      answer:
        "Ya, jika anda menyelesaikan program S1 resmi Madinah Salam, anda akan mendapatkan ijazah resmi",
    },
    {
      question: "Bagaimana cara menghubungi Madinah Salam ?",
      answer:
        "Anda dapat menghubungi kami melalui whatsapp di nomor 0822 1111 1111 atau media sosial kami tertera di website kami",
    },
  ];

  return (
    <div>
      {faqData.map((faq, index) => (
        <Accordian key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
