import TestimonialsGallery from "@/components/testimonials/TestimonialsGallery";
import { getHomeCopy } from "@/content/metadata/home";
import { getTestimonials } from "@/content/testimonials/testimonials";

export default function Testimonials({ locale }) {
  const chrome = getHomeCopy(locale).testimonials;
  const testimonials = getTestimonials(locale);
  return (
    <section
      className="section section--parchment section--viewport testimonials"
      aria-labelledby="testimonios-title"
    >
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow" data-reveal>
            {chrome.eyebrow}
          </span>
          <h2 id="testimonios-title" data-reveal>
          {chrome.title}
          </h2>
        </header>

        <TestimonialsGallery testimonials={testimonials} />
      </div>
    </section>
  );
}
