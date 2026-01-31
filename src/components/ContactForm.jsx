export default function ContactForm() {
  return (
    <section style={{ padding: "40px 20px", background: "#eee" }}>
      <h2>Kostenlose Anfrage</h2>
      <form>
        <input placeholder="Name" /><br />
        <input placeholder="Telefon" /><br />
        <input placeholder="Fahrzeug" /><br />
        <button type="submit">Anfrage senden</button>
      </form>
    </section>
  );
}
