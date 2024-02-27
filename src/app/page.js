import Image from "next/image";

export default function Home() {
  const services = [
    {
      heading: "Sports Injury and Rehabilitation",
      imgSrc: "",
    },
    {
      heading: "Massage Therapy",
      imgSrc: "",
    },
    {
      heading: "Exercise Rehabilitation",
      imgSrc: "",
    },
    {
      heading: "Pelvic Health",
      imgSrc: "",
    },
    {
      heading: "Dry Needling and Taping",
      imgSrc: "",
    },
  ];
  return (
    <main className="">
      <section className="flex gap-4 px-24 py-48">
        <div className="w-full">
          <h1>Expert Physiotherapists in Marrickville</h1>
          <p>Get personalised pain and sports injury care</p>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <h2>Get in touch</h2>
          <form
            action=""
            className="flex flex-col items-center justify-center gap-2"
          >
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter your Email" />
            <input type="phone" placeholder="Enter your Phone" />
            <input type="textarea" placeholder="How can we help?" />
            <button className="is-full">Reach out</button>
          </form>
        </div>
      </section>
      {/* Feature Icon Row */}
      <section className="bg-[#f7f9f9] px-24 py-16 flex">
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="h-12 w-12 bg-gray-500">
            <img src="" alt="" />
          </div>
          <h4>1000+ Patients</h4>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="h-12 w-12 bg-gray-500">
            <img src="" alt="" />
          </div>
          <h4>Local & Proud</h4>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="h-12 w-12 bg-gray-500">
            <img src="" alt="" />
          </div>
          <h4>Sports Injuries</h4>
        </div>
      </section>
      {/* Feature Row */}
      <section>
        <div className={`w-full flex px-24 py-48 gap-[72px]`}>
          <div className={`w-full order-first`}>
            <h3 className="mb-4">Sports Inury and Rehabilitation</h3>
            <p>sample text</p>
            <div className="button-wrapper">
              <button>Get Started</button>
            </div>
          </div>
          <div className="w-full h-[300px] bg-gray-500 rounded-2xl overflow-hidden">
            <img src="" alt="" />
          </div>
        </div>
      </section>
      {/* About */}
      <section className="px-24 py-24 flex flex-col gap-24">
        <div className="flex">
          <div className="w-full">
            <h2 className="w-full">
              Personalised, individualised and you focused Physiotherapy
            </h2>
            <div className="button-wrapper">
              <button>Schedule an appointment</button>
            </div>
          </div>

          <p className="w-full">
            At Physio Marrickville, we focus on getting you back to where you
            were and better. Our services include physical therapy, massage
            therapy, dry needling and exercise rehabilitation. All of our
            Physios are University Qualified with a wealth of experience so rest
            assure you&apos;ll be in safe and dedicated hands helping you
            recover. Our core focus is to help you recover from injuries, manage
            and reduce plain while also improving your overall well-being.
          </p>
        </div>
        <img className="w-full h-[450px] bg-gray-500 rounded-xl" />
      </section>
      {/* Services */}
      <section className="grid grid-cols-3 gap-4 px-24 py-24">
        {services.map((service) => (
          <div className="service-card" key={service.heading}>
            <img src="" alt="" className="w-full h-2/3 bg-gray-500" />
            <div className="w-full h-1/3 flex items-center justify-center">
              <h4>{service.heading}</h4>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
