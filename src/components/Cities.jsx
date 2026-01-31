const cities = ["Dortmund", "Essen", "Bochum"];

export default function Cities() {
  return (
    <section className="py-20 bg-neutral-900 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {cities.map(city => (
          <div
            key={city}
            className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800"
          >
            <h3 className="font-semibold mb-2">
              Autoankauf {city}
            </h3>
            <p className="text-sm text-neutral-400">
              Schnell & fair in {city} und Umgebung
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
