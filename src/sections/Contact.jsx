
import { useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    label: "Email",
    value: "danieljato505@email.com",
    icon: Mail,
    href: "mailto:danieljato505@email.com",
  },
  {
    label: "LAGOS",
    value: "IKORODU",
    icon: MapPin,
  },
  {
    label: "PHONE",
    value: "08061118674",
    icon: Phone,
    href: "tel:08061118674",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS ERROR:", error);
    alert(error?.text || "Failed to send message.");
  } finally {
    setSending(false);
  }
};


  return (
    <section
      id="contact"
      className="min-h-screen text-white flex items-center justify-center p-4"
    >
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#2ed5a3] text-xs font-semibold tracking-widest uppercase block mb-2">
            GET IN TOUCH
          </span>

          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            <span className="text-[#2ed5a3]">Let's build </span>
            something great.
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a
            message and let's discuss how we can work together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <a
                  key={index}
                  href={info.href || "#"}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 transition-colors"
                >
                  <div className="p-3 bg-[#2ed5a3]/10 text-[#2ed5a3] rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">
                      {info.label}
                    </p>

                    <p className="font-medium text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-[#12181d] border border-[#1c242c] rounded-2xl p-6 text-left shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-gray-200 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name..."
                  required
                  className="w-full bg-[#161e25] border border-[#222e38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2ed5a3] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-200 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-[#161e25] border border-[#222e38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2ed5a3] transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-gray-200 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="w-full bg-[#161e25] border border-[#222e38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2ed5a3] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-200 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  rows={6}
                  className="w-full bg-[#161e25] border border-[#222e38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2ed5a3] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#2ed5a3] hover:bg-[#26b88c] disabled:opacity-60 disabled:cursor-not-allowed text-[#0b0f12] font-semibold py-3 px-4 rounded-full text-sm flex items-center justify-center gap-2 transition-colors duration-200"
              >
                {sending ? "Sending..." : "Send Message"}

                {!sending && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
