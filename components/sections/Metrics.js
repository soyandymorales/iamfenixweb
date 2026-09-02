import { metrics } from "@/content/metadata/metrics";

function splitValue(value) {
  const match = value.match(/^([\d.,]+)(.*)$/);
  return match ? [match[1], match[2]] : [value, ""];
}

export default function Metrics() {
  return (
    <section
      className="section section--hairline-top section--viewport metrics"
      aria-label="Métricas relevantes"
    >
      <div className="container">
        <div className="metrics__diptych">
          {metrics.map((metric) => {
            const [amount, suffix] = splitValue(metric.value);

            return (
              <article key={metric.id} className="metric-panel" data-reveal>
                <p className="metric-panel__value">
                  {amount}
                  {suffix ? (
                    <span className="metric-panel__suffix">{suffix}</span>
                  ) : null}
                </p>

                <span className="metric-panel__rule" aria-hidden="true" />

                <p className="metric-panel__label">{metric.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
