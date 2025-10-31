import "@/app/globals.css";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Contact Us | Serah Constructions",
};

export default function MyApp({ }) {
    
  return (
    <>
      <main className="bg-neutral-800 text-neutral-100">
        <>
          <Hero title={'Contact Us'}/>

          <div className="max-w-7xl p-2 md:p-6 mx-auto text-left mt-4">

            <ContactForm />
          
          </div>

        </>
      </main>
    </>
  );
}
