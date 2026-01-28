const homeType = ["Apartment", "Villa", "Independent House"];

export default function HomeTypeForm({
  setStep,
  setMessage,
  formData,
  setFormData,
}) {
  const handleClick = async (e) => {
    setStep(5);
    setMessage(null);
    setFormData({ ...formData, houseType: e.target.value });
  };

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl text-neutral-100 text-center">
          Which type of house do you currently possess or want to construct?
        </h2>
        <div className="flex flex-col gap-y-6 mt-8">
          {homeType.map((item, index) => (
            <button
              key={index}
              type="button"
              value={item}
              onClick={handleClick}
              className={`capitalize w-full max-w-36 mx-auto px-4 py-2  transition hover:bg-primary-500 hover:text-neutral-800  cursor-pointer
    bg-neutral-200
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
