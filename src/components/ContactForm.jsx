"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Back, Close, Success16 } from "../icons/Svg";
import HomeTypeForm from "./HomeTypeForm";
import LayoutForm from "./LayoutForm";
import ServiceTypeForm from "./ServiceTypeForm";
import ServicesForm from "./ServicesForm";
import FloorsForm from "./FloorsForm";

export default function ContactForm({ setOpen, isUrl }) {
  const phone =
    typeof window !== "undefined" ? localStorage.getItem("phone") : undefined;

  const formStepLocal = Number(
    typeof window !== "undefined" ?? localStorage.getItem("form-step"),
  );
  const [step, setStep] = useState(formStepLocal ? formStepLocal : 1);
  const [formData, setFormData] = useState({
    name: "",
    phone: phone ? phone : "",
    email: "",
    leadSource: "website",
    company: "serahconstruction",
    code: "",
    location: "",
    service: "",
  });

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const inputsRef = useRef([]);

  useEffect(() => {
    setStep(formStepLocal === "completed" ? 8 : phone ? 3 : 1);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    //send OTP
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-otp`,
        {
          // Replace with your API route
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: formData.phone,
            company: formData.company,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send OTP.");
      }

      const result = await response.json();
      console.log("OTP sent successful:", result);
      localStorage.setItem("form-step", 2);
      setStep(2);

      setMessage("An OTP has been sent to your mobile number.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Handle error (e.g., show error message)
    }
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const code = otp.join("");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-otp`,
        {
          // Replace with your API route
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, code: code }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to verify OTP.");
      }

      const result = await response.json();
      console.log("OTP verified successful:", result);

      setMessage("Your number has been verified successfully");

      localStorage.setItem("form-step", 3);
      setStep(3);
      localStorage.setItem("phone", formData.phone);

      setOtp(["", "", "", ""]);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Error verifying phone number");
      // Handle error (e.g., show error message)
    }
  };

  const progress = (step / 8) * 100;

  return (
    <>
      <div className="flex flex-row flex-nowrap items-center justify-between mb-6 gap-x-6 md:gap-x-6">
        <div className="w-full bg-neutral-700 rounded-full h-1 text-neutral-100">
          <motion.div
            className="bg-primary-500 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {!isUrl && (
          <button
            className="cursor-pointer rounded-full w-5 h-5 bg-neutral-700 "
            onClick={() => setOpen(false)}
          >
            <Close className="text-neutral-500 w-5 h-5" />
          </button>
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          <form method="post" onSubmit={handleSubmit}>
            {/* Step 1 - User Details */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl text-neutral-100 text-center">
                  Enter Your Details
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-700 text-neutral-100 p-2 focus:ring focus:ring-primary-500 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-700 p-2 text-neutral-100 focus:ring focus:ring-primary-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-700 p-2 focus:ring text-neutral-100 focus:ring-primary-500 outline-none"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Home or Site Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-neutral-700 p-2 focus:ring text-neutral-100 focus:ring-primary-500 outline-none"
                />

                <button
                  type="submit"
                  disabled={
                    !formData.name || !formData.phone || !formData.email
                  }
                  className={`w-full py-2 transition ${
                    formData.name &&
                    formData.phone &&
                    /\S+@\S+\.\S+/.test(formData.email) &&
                    formData.location
                      ? "bg-primary-500 text-neutral-800 hover:bg-primary-400  cursor-pointer"
                      : "bg-neutral-500 text-neutral-100 cursor-not-allowed"
                  }`}
                >
                  Get OTP
                </button>
              </div>
            )}
          </form>

          {/* Step 2 - OTP Verification */}
          <form method="post" onSubmit={handleVerify}>
            {step === 2 && (
              <div className="space-y-4 text-center">
                <h2 className="text-xl  text-center">Verify OTP</h2>
                <p className="text-sm">
                  Enter the 4-digit OTP sent to your phone.
                </p>

                <div className="flex justify-center gap-3">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      type="number"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      ref={(el) => (inputsRef.current[i] = el)}
                      className="w-10 h-10 text-center text-xl bg-neutral-700 rounded focus:ring focus:ring-primary-500 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={!otp.join("")}
                  className={`w-full py-2 transition ${
                    otp.join("").length === 4
                      ? "bg-primary-500 text-neutral-800 hover:bg-primary-400 cursor-pointer"
                      : "bg-gray-300 text-neutral-600 cursor-not-allowed"
                  }`}
                >
                  Verify OTP
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="text-sm underline mt-2 cursor-pointer"
                >
                  ← Edit Details
                </button>
              </div>
            )}
          </form>

          {step === 3 && (
            <ServiceTypeForm
              setStep={setStep}
              setMessage={setMessage}
              setError={setError}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 4 && (
            <HomeTypeForm
              setStep={setStep}
              setMessage={setMessage}
              setError={setError}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 5 && (
            <FloorsForm
              setStep={setStep}
              setMessage={setMessage}
              setError={setError}
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 6 && (
            <LayoutForm
              setStep={setStep}
              setMessage={setMessage}
              setError={setError}
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 7 && (
            <ServicesForm
              setStep={setStep}
              setMessage={setMessage}
              setError={setError}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 8 && (
            <div className="space-y-4">
              <h2 className="text-xl text-neutral-100 text-center">
                Completed..!
              </h2>
              <div className="flex flex-col p-2 gap-4 bg-neutral-100/25 items-center mt-8">
                <Success16 className="w-8 h-8 text-green-400" />
                <div>
                  <p className="p-2 text-center text-white mb-4">
                    Your details have been saved. We will contact you soon.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Step Indicator */}
      {step !== 8 && (
        <p className="text-sm mt-4 text-center text-neutral-100">
          Step {step} of 7
        </p>
      )}

      {step > 3 && step !== 8 && (
        <button
          className="text-center p-2 border border-neutral-200 bg-neutral-200 mt-6 mx-auto"
          onClick={() => setStep(step - 1)}
        >
          <Back className="w-5 h-5" />
        </button>
      )}

      <div
        role="alert"
        className={`${message && "hidden"} ${
          error ? "opacity-100" : "opacity-0"
        } transition-all mt-3 relative flex w-full p-2 text-sm text-red-400 border border-red-400 rounded-md justify-between items-center`}
      >
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            ></path>
          </svg>
          {error}
        </div>
        <button
          className=" transition-all cursor-pointer"
          type="button"
          onClick={() => setError(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {message && (
        <div
          role="alert"
          className={`${
            message ? "opacity-100" : "opacity-0"
          } transition-all mt-3 relative flex w-full p-2 text-sm text-neutral-800 border border-neutral-800 rounded-md justify-between items-center`}
        >
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            {message}
          </div>
          <button
            className=" transition-all cursor-pointer"
            type="button"
            onClick={() => setMessage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
