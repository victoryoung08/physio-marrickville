export default function LeadForm() {
  const formInputs = [
    {
      label: "First Name",
      type: "text",
      placeholder: "Enter your First Name",
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last Name",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your Email",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4 justify-center mx-auto p-12 bg-slate-100 overflow-hidden rounded-xl">
      <h3>Get in touch</h3>
      <form
        action=""
        className="flex flex-col items-start justify-center gap-4 w-full"
      >
        {formInputs.map((input) => (
          <div className="w-full" key={input.label}>
            <label htmlFor="">{input.label}</label>
            <input type={input.type} placeholder={input.placeholder} />
          </div>
        ))}
        <button className="is-large" type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
}
