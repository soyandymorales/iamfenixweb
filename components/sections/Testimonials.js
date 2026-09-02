import TestimonialsGallery from "@/components/testimonials/TestimonialsGallery";
import { testimonials } from "@/content/testimonials/testimonials";

export default function Testimonials() {
  return (
    <section
      className="section section--parchment section--viewport testimonials"
      aria-labelledby="testimonios-title"
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            Testimonios
          </span>
          <h2 id="testimonios-title" data-reveal>
          Voces del camino
          </h2>
        </header>

        <TestimonialsGallery testimonials={testimonials} />
      </div>
    </section>
  );
}
