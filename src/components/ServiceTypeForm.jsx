const services = ["interiors", "construction", "renovation"];

export default function ServiceTypeForm({
  setStep,
  setMessage,
  formData,
  setFormData,
}) {
  const handleClick = async (e) => {
    setStep(4);
    setMessage(null);
    setFormData({ ...formData, service: e.target.value });
  };

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl text-neutral-100 text-center">
          Which service from the list below are you seeking?
        </h2>
        <div className="flex flex-col gap-y-6 mt-8">
          {services.map((item, index) => (
            <button
              key={index}
              type="button"
              value={item}
              name={"service"}
              onClick={handleClick}
              className={`capitalize w-full max-w-36 mx-auto px-4 py-2  transition hover:bg-primary-500 hover:text-neutral-800 active:bg-primary-500 active:text-neutral-100  cursor-pointer
    bg-neutral-200 text-neutral-100"
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
