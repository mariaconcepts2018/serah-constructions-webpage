"use client";
import ContactForm from "./ContactForm";

export default function ContactModal({ open, setOpen }) {
  return (
    <>
      <div
        className={`flex justify-center transition transition-duration-300 ${
          open ? "scale-100" : " scale-0"
        } fixed inset-0 overflow-y-auto overflow-x-hidden w-screen z-500 xl:inset-x-auto`}
      >
        <div className="w-full rounded shadow-lg md:w-1/2 xl:w-1/3 2xl:w-1/4 bg-neutral-800 shadow-black/50 shadow-xl mx-auto my-auto mb-auto py-6 px-4 md:px-8 min-h-[50vh] flex flex-col justify-center">
          <ContactForm setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}
