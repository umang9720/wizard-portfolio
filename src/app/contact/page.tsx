import Image from "next/image";
import bg from "../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full h-screen flex flex-col items-center justify-center py-8 sm:py-0 space-y-8 px-4">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-5xl capitalize">
              Get in Touch with Umang
          </h1>
          <p className="text-center font-light text-lg xs:text-base">
              Whether you are interested in collaboration, have a question, or just want to say hello — I am always open to meaningful connections. 
            Use the form below to send your message, and I will get back to you as soon as possible.
     
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
