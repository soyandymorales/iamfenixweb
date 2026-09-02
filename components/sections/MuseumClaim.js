import MuseumBlueprint from "@/components/sections/MuseumBlueprint";

export default function MuseumClaim() {
  return (
    <section className="section museum" aria-label="Manifiesto">
      <MuseumBlueprint />
      <div className="container museum__inner">
        <p className="museum__line" data-reveal>
          Tu <em>vitalidad</em>, tu <em>presencia</em> y tu <em>obra de vida</em>{" "}
          son tus activos más valiosos.
        </p>
      </div>
    </section>
  );
}
