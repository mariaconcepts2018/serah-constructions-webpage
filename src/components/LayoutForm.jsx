const layouts = ["1BHK", "2BHK", "3BHK or more", "Commercial"];

export default function LayoutForm({
  setStep,
  setMessage,
  setFormData,
  formData,
}) {
  const handleClick = (e) => {
    setMessage(null);
    setFormData({ ...formData, bhkType: e.target.value });
    setStep(7);
  };

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl text-neutral-100 text-center">
          What is the layout of our Property?
        </h2>
        <div className="flex flex-col gap-y-6 mt-8">
          {layouts.map((item, index) => (
            <button
              key={index}
              type="button"
              value={item}
              onClick={handleClick}
              className={`capitalize w-full max-w-36 mx-auto px-4 py-2  transition hover:bg-primary-500 hover:text-neutral-800 active:bg-primary-500 active:text-neutral-800  cursor-pointer
    bg-neutral-200 text-neutral-600"
    }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
