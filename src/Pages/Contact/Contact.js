import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import SectionTitle from "../Shared/SectionTitle";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="parent bg-appointment bg-cover bg-center bg-no-repeat">
      <div className="text-center pt-20 pb-12 px-2">
        <SectionTitle>Contact Us</SectionTitle>
        <h1 className="text-3xl font-semibold my-4 text-white">
          Stay Connected with us
        </h1>

        <form
          className="w-full md:w-1/2 mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="block input w-full border-2 border-transparent focus:border-secondary my-3"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="block input w-full border-2 border-transparent focus:border-secondary my-3"
            placeholder="Subject"
            required
          />
          <textarea
            rows="7"
            name="message"
            className="textarea w-full border-2 border-transparent focus:border-secondary"
            placeholder="Message"
          ></textarea>
          <PrimaryButton className="my-3 w-full">Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
