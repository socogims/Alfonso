import { motion } from "framer-motion";
import { Car, PhoneCall, MapPin } from "lucide-react";

function Step({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-neutral-900 p-8 rounded-2xl text-center border border-neutral-800"
    >
      <div className="text-emerald-400 mb-4">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm">{text}</p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="py-20 px-5 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        So einfach geht’s
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <Step icon={<Car />} title="Online bewerten" text="Daten eingeben & Preis erhalten" />
        <Step icon={<PhoneCall />} title="Angebot bestätigen" text="Unverbindlich & transparent" />
        <Step icon={<MapPin />} title="Abholung & Geld" text="Vor Ort – sofort bezahlt" />
      </div>
    </section>
  );
}
