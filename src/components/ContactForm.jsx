'use client'
import { useState } from "react";

export default function ContactForm({ Component, pageProps }) {
    
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "", budget:"" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

    function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    if (!form.phone.trim()) e.phone = "Phone Number is required.";
    if (!form.budget.trim()) e.budget = "Project Budget is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

    async function handleSubmit(ev) {
    ev.preventDefault();
    setErrors({});
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setForm({ name: "", email: "", message: "" });
      setStatus({ loading: false, ok: true, msg: data?.message || "Message sent!" });
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || "Failed to send" });
    }
  }

  return (
    <>

    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto md:p-6 bg-white">
      <h2 className="text-3xl font-semibold mb-4 text-center text-primary-500">Get In Touch</h2>

      <div className="flex flex-row flex-wrap justify-around">


      <label className="block mb-3 w-full basis-full md:basis-1/2 p-2">
        <span className="text-sm">Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`mt-1 block w-full   border px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            errors.name ? "border-red-500 focus:ring-red-200" : "border-none focus:ring-secondary-200"
          }`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </label>

            <label className="block mb-3 w-full basis-full md:basis-1/2 p-2">
        <span className="text-sm">Phone Number</span>
        <input
          type="phone"
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={`mt-1 block w-full   border px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            errors.phone ? "border-red-500 focus:ring-red-200" : "border-none focus:ring-secondary-200"
          }`}
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </label>

      <label className="block mb-3 w-full basis-full md:basis-1/2 p-2">
        <span className="text-sm">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`mt-1 block w-full   border px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            errors.email ? "border-red-500 focus:ring-red-200" : "border-none focus:ring-secondary-200"
          }`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          />

        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </label>
    
    {/* <label className="block mb-3 w-full basis-full md:basis-1/2 p-2">
        <span className="text-sm">Project Budget</span>
        <input
          type="budget"
          name="budget"
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
          className={`mt-1 block w-full   border px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            errors.budget ? "border-red-500 focus:ring-red-200" : "border-none focus:ring-secondary-200"
          }`}
          aria-invalid={errors.budget ? "true" : "false"}
          aria-describedby={errors.budget ? "budget-error" : undefined}
          />
        {errors.budget && <p id="budget-error" className="mt-1 text-xs text-red-600">{errors.budget}</p>}
      </label> */}

      <label htmlFor="service" className="block mb-3 w-full basis-full md:basis-1/2 p-2">
        <span className="text-sm">Select Project Budget</span>

      <select
        id="service"
        name="service"
        defaultValue={""}
        className={`mt-1 block w-full   border px-3 py-2.5 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            errors.budget ? "border-red-500 focus:ring-red-200" : "border-none focus:ring-secondary-200"
          }`}
        >
        <option value="" hidden={true} disabled={true} className="buton cursor-not-allowed">Choose an option</option>
        <option value="1">upto 10 Lakhs</option>
        <option value="2">10 - 25 Lakhs</option>
        <option value="3">25 - 50 Lakhs</option>
        <option value="4">More than 50 Lakhs</option>
      </select>
        </label>

      <label className="block mb-4 basis-full p-2">
        <span className="text-sm">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows="5"
          className={`mt-1 block w-full   border px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            errors.message ? "border-red-500 focus:ring-red-200" : "border-none focus:ring-secondary-200"
          }`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </label>

          </div>
      <div className="flex items-center gap-3 p-2">
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center justify-center   px-4 py-2 bg-primary-500 text-white uppercase font-medium shadow hover:bg-primary-400 disabled:opacity-60"
        >
          {status.loading ? "Submitting..." : "Submit"}
        </button>

        {status.ok === true && <p className="text-sm text-green-700">{status.msg}</p>}
        {status.ok === false && <p className="text-sm text-red-600">{status.msg}</p>}
      </div>
    </form>
    </>
  );
}
