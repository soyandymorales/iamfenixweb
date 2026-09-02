/**
 * Discrete, expandable scripture citation (rule 8.7): reference visible,
 * text revealed on demand. Uses <details> so it works without JavaScript.
 */
export default function ScriptureCitation({ reference, text }) {
  if (!reference) return null;

  if (!text) {
    return <p className="scripture summary">{reference}</p>;
  }

  return (
    <details className="scripture">
      <summary>{reference}</summary>
      <p className="scripture__text">{text}</p>
    </details>
  );
}
