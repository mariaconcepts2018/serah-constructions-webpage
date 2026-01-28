import { useState } from "react";

const sevices = [
  "modular kitchen",
  "wardrobe",
  "TV unit",
  "False cielings",
  "Painting",
  "Doors and Furnitures",
];

export default function ServicesForm({
  setStep,
  setError,
  formData,
  setFormData,
  setMessage,
}) {
  const [selected, setSelected] = useState([]);

  const handleClick = (e) => {
    setSelected((prevItems) => {
      // Check if the item is already in the array
      if (prevItems.includes(e.target.value)) {
        // If it exists, remove it by filtering the array
        return prevItems.filter((item) => item !== e.target.value);
      } else {
        // If it doesn't exist, add it to a new array using the spread operator
        return [...prevItems, e.target.value];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/update-user`,
        {
          // Replace with your API route
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, services: selected.join(",") }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed update user Data.");
      }

      const result = await response.json();
      console.log("Data is saved:", result);

      setMessage("Your details have been submitted.");

      localStorage.setItem("form-step", 8);
      setStep(8);
      setFormData({
        projectType: "",
        floors: "",
        houseType: "",
        services: [],
        layout: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Error submitting your details");
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl text-neutral-100 text-center">
          Choose everything you'll need for your home.
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-6 mt-8 h-[30vh] overflow-y-auto px-2 py-6">
          {sevices.map((item, index) => (
            <button
              key={index}
              type="button"
              value={item}
              onClick={handleClick}
              className={`${
                selected.includes(item) ? "bg-primary-500 " : "bg-neutral-200 "
              } capitalize  px-4 py-0.5 transition cursor-pointer
        "
        }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className={`capitalize w-full mx-auto px-4 py-2 transition bg-primary-500 hover:bg-primary-400 text-neutral-800  cursor-pointer
        
        }`}
        >
          Complete
        </button>
      </div>
    </>
  );
}
