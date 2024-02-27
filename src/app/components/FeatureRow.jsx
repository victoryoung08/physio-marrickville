export default function FeatureRow() {
  const features = [
    {
      title: "Sports Injury and Rehabilitation",
      subtitle: "Sample Text",
      imgSrc: "",
    },
    {
      title: "Joint and Muscle Pain",
      subtitle: "Sample Text",
      imgSrc: "",
    },
    {
      title: "Reduce Pain and Improve your Strength",
      subtitle: "Sample Text",
      imgSrc: "",
    },
  ];
  return (
    <section className="section-padding">
      {features.map((feature, index) => (
        <div
          className={`w-full flex flex-col gap-12 my-24 items-center lg:flex-row `}
          key={feature.title}
        >
          <div
            className={`w-full flex flex-col items-center gap-8 order-last  ${
              index % 2 === 0 ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <div className="text-center">
              <h3 className="mb-2">{feature.title}</h3>
              <p>{feature.subtitle}</p>
            </div>

            <button>Get Started</button>
          </div>
          <div className="w-full h-[300px] bg-gray-500 rounded-2xl overflow-hidden">
            <img src="" alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}
