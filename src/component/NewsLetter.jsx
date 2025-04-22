import { useState } from "react";

export default function NewsLetterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email.");
      setIsError(true);
    } else {
      setMessage("You’re subscribed! 🎉");
      setIsError(false);
      setEmail("");
    }
  };

  return (
    <section className="bg-[rgb(1,46,86)] text-white w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center border-b border-white/20 pb-10">
          <div>
            <h2 className="text-4xl font-bold">#Chaux-Neuve</h2>
            <p className="mt-2 text-white/80 text-lg">
                ChauxNeuveTourisme.: NewsLetter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Replace Input with native input */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {/* Replace Button with native button */}
            <button
              onClick={handleSubmit}
              className="bg-white text-green-700 font-semibold px-6 py-2 rounded-md hover:bg-green-100 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {message && (
          <p className={`mt-4 text-sm ${isError ? "text-red-300" : "text-white"}`}>
            {message}
          </p>
        )}

        <p className="mt-6 text-xs text-white/70">
          We care about your data.{" "}
          <a href="/privacy-policy" className="underline hover:text-white">
            Read our privacy policy.
          </a>
        </p>
      </div>
    </section>
  );
}
