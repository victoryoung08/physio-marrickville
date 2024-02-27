import {
  SealCheck,
  MapPinLine,
  Bandaids,
} from "@phosphor-icons/react/dist/ssr";
export default function FeatureIconRow() {
  return (
    <section className="bg-secondaryAccent px-24 py-16 flex items-between">
      <div className="flex flex-col gap-4 w-full text-left items-center">
        <SealCheck size={32} />
        <h5>1000+ Patients</h5>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <MapPinLine size={32} />
        <h5>Local & Proud</h5>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <Bandaids size={32} />

        <h5>Sports Injuries</h5>
      </div>
    </section>
  );
}
