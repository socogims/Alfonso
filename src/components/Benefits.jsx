import { CheckCircle } from "lucide-react";

const benefits = [
  "Sofortige Auszahlung",
  "Kostenlose Abholung",
  "Faire Marktpreise",
  "Kein Risiko"
];

export default function Benefits() {
  return (
    <section className="py-20 px-5 bg-neutral-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {benefits.map(b => (
          <div
            key={b}
            className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800"
          >
            <CheckCircle className="text-emerald-400 mb-3" />
            <p className="font-semibold">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
