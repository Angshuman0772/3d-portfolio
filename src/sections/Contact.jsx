import { useState, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EMAILJS ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding mb-25">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get in Touch!" sub="Contact Information" />
        <div className="mt-16 grid-12-cols">
          {/* Contact Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-5 sm:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>

                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Type your message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending" : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          {/* Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full min-h-96 overflow-hidden rounded-3xl bg-[#98C3EC] cursor-grab">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
