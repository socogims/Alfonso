import { Box, Container, Typography, Divider } from "@mui/material";

export default function AutoankaufMagazineExpertSection() {
  return (
    <Box sx={{ py: { xs: 8, sm: 10, md: 16 }, backgroundColor: "#0f1020" }}>
      <Container maxWidth="md">
        {/* Header */}
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontWeight: 900,
            mb: { xs: 3, sm: 4, md: 5 },
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
            lineHeight: { xs: 1.3, sm: 1.2, md: 1.1 },
          }}
        >
          Autoankauf & Fahrwissen in NRW – Ihr Ratgeber für Verkauf, Sicherheit & Expertenwissen
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.85)",
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: { xs: 1.6, sm: 1.8, md: 1.9 },
            mb: { xs: 4, sm: 5, md: 6 },
            textAlign: "center",
          }}
        >
          Ob Sie Ihr Auto verkaufen oder sicher unterwegs sein wollen – dieser Expertenratgeber deckt alle wichtigen Aspekte ab. Vom Autoankauf in NRW über praktische Fahrtipps bis zu Sicherheit, Technik, Reifen & Alkoholthemen – hier finden Sie fundierte, praxisnahe Informationen, die Sie wirklich weiterbringen.
        </Typography>

        <Divider sx={{ my: { xs: 4, sm: 5, md: 6 }, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Autoankauf Abschnitt */}
        <Typography variant="h2" sx={h2Responsive}>
          Autoankauf in NRW – schnell, sicher und fair
        </Typography>
        <Typography sx={pResponsive}>
          Der Verkauf Ihres Autos in Nordrhein-Westfalen kann einfach, transparent und gewinnbringend sein. Experten analysieren Fahrzeugdaten, Zustand, Kilometerstand, Baujahr und mögliche Exportchancen. Auch Unfallwagen, Autos ohne TÜV oder alte Fahrzeuge werden fair bewertet. Nach Annahme des Angebots erfolgt die Abholung oft direkt bei Ihnen, inklusive sofortiger Auszahlung – sicher, rechtlich einwandfrei und stressfrei.
        </Typography>

        {/* Fahrwissen Abschnitt */}
        <Typography variant="h2" sx={h2Responsive}>
          Grundlegendes Autofahren – Expertenwissen für Einsteiger
        </Typography>
        <Typography sx={pResponsive}>
          Beim Anfahren ist der Schleifpunkt der Kupplung entscheidend: Kommen Sie sanft aufs Gas und lassen die Kupplung langsam kommen, um Abwürgen zu vermeiden. Hoch- und Runterschalten sollte nach Drehzahl und Motorgeräusch erfolgen – ruhig und vorausschauend. Bergauf starten Sie am besten mit der Handbremse, um Zurückrollen zu verhindern. Solche kleinen Fertigkeiten erhöhen nicht nur Ihre Sicherheit, sondern auch Ihr Fahrgefühl.
        </Typography>
        <Typography sx={pResponsive}>
          Generell gilt: Übung macht den Meister. Kupplung, Gas und Bremse bewusst einsetzen, Abstände abschätzen lernen, Spiegel regelmäßig kontrollieren – das sind Grundlagen für souveränes Fahren.
        </Typography>

        {/* Verkehr & Regeln */}
        <Typography variant="h2" sx={h2Responsive}>
          Verkehr & Regeln – sicher unterwegs
        </Typography>
        <Typography sx={pResponsive}>
          Wer hat Vorfahrt? Im Kreisverkehr? Bei Rechts-vor-Links? Antworten auf diese Fragen entscheiden oft über Sicherheit und Stressfreiheit. Grundsätzlich gilt: Vorfahrt achten, Verkehrsschilder beachten und rechtzeitig blinken. Überholen nur, wenn Sicht, Geschwindigkeit und Abstand es zulassen. So vermeiden Sie Bußgelder und Unfälle.
        </Typography>

        {/* Parken & Rangieren */}
        <Typography variant="h2" sx={h2Responsive}>
          Parken & Rangieren – entspannt einparken
        </Typography>
        <Typography sx={pResponsive}>
          Längs- und Querparken, Rückwärtsfahren oder enge Parklücken – mit richtiger Spiegelnutzung und Abstandseinschätzung wird Einparken zum Kinderspiel. Beachten Sie Parkverbote und Markierungen. Übung auf ruhigen Plätzen hilft, Unsicherheiten abzubauen und Fehler im Straßenverkehr zu vermeiden.
        </Typography>

        {/* Besondere Bedingungen */}
        <Typography variant="h2" sx={h2Responsive}>
          Fahren bei besonderen Bedingungen – Regen, Schnee & Nebel
        </Typography>
        <Typography sx={pResponsive}>
          Bei Regen unbedingt Abstand erhöhen, sanft bremsen und Geschwindigkeit anpassen. Aquaplaning begegnen Sie durch ruhiges Gegenlenken und sofortiges Gaswegnehmen. Schnee und Glätte erfordern vorausschauendes Fahren, größere Sicherheitsabstände und Winterreifen. Nebel bedeutet langsames Fahren, Licht an und aufmerksam bleiben.
        </Typography>

        {/* Winterreifen & Profiltiefe */}
        <Typography variant="h2" sx={h2Responsive}>
          Winterreifen & Profiltiefe – wann wechseln?
        </Typography>
        <Typography sx={pResponsive}>
          In Deutschland besteht situativ die Winterreifenpflicht: Bei Glatteis, Schnee oder Matsch müssen Winterreifen aufgezogen sein. Experten empfehlen, Winterreifen von Oktober bis Ostern zu nutzen. Die gesetzliche Mindestprofiltiefe beträgt 1,6 mm, empfohlen sind jedoch mindestens 3 mm für sicheres Fahren. Reifen mit Rissen, ungleichmäßigem Abrieb oder alterungsbedingten Schäden sollten unbedingt ersetzt werden.
        </Typography>

        {/* Notfälle & Sicherheit */}
        <Typography variant="h2" sx={h2Responsive}>
          Notfälle & Sicherheit – vorbereitet sein
        </Typography>
        <Typography sx={pResponsive}>
          Pannen, Unfälle oder ABS-/ESP-Situationen: Ruhe bewahren und Schritt für Schritt handeln. Warnblinkanlage sofort einschalten, Warndreieck korrekt aufstellen, bei Unfällen den Notruf wählen. Fahrzeuge mit moderner Technik wie ABS/ESP erhöhen die Kontrolle – kennen Sie deren Funktion, um optimal reagieren zu können.
        </Typography>

        {/* Alkohol & Verkehrssicherheit */}
        <Typography variant="h2" sx={h2Responsive}>
          Alkohol im Straßenverkehr – Verantwortung übernehmen
        </Typography>
        <Typography sx={pResponsive}>
          Alkohol beeinträchtigt Reaktionszeit, Konzentration und Entscheidungsfähigkeit. In Deutschland gilt 0,5 ‰ für Fahrer, bei Fahranfängern und unter 21 Jahren 0,0 ‰. Experten raten: Kein Alkohol vor dem Fahren. Selbst geringe Mengen können gefährlich sein – für sich selbst und andere Verkehrsteilnehmer. Sicherheit geht immer vor.
        </Typography>

        {/* Auto & Technik */}
        <Typography variant="h2" sx={h2Responsive}>
          Auto & Technik – verstehen und kontrollieren
        </Typography>
        <Typography sx={pResponsive}>
          Kraftstoffwahl, Ölstand, Wasser, Reifendruck oder Warnleuchten im Cockpit – ein sicherer Fahrer überprüft regelmäßig alles. So vermeiden Sie Überraschungen und verlängern die Lebensdauer Ihres Autos. Werkstattbesuche sollten rechtzeitig erfolgen, bevor Schäden entstehen.
        </Typography>

        {/* Angst & Unsicherheit */}
        <Typography variant="h2" sx={h2Responsive}>
          Angst & Unsicherheit – völlig normal
        </Typography>
        <Typography sx={pResponsive}>
          Hupen im Stadtverkehr, Fehler machen oder unsicher in neuen Situationen sein – das ist normal. Ruhe bewahren, bewusst atmen und Schritt für Schritt handeln. Übung und Routine erhöhen die Sicherheit. Jeder Fahrer war einmal unsicher – Expertenrat hilft, Vertrauen zu entwickeln.
        </Typography>

        {/* Führerschein & Recht */}
        <Typography variant="h2" sx={h2Responsive}>
          Führerschein & Recht – immer auf der sicheren Seite
        </Typography>
        <Typography sx={pResponsive}>
          Probezeit, Punkte, Strafzettel oder Handy am Steuer: Kennen Sie die Regeln und handeln Sie vorausschauend. Mit Freisprechanlage telefonieren, auf Verkehrszeichen achten und Bußgelder vermeiden. Wissen schützt und stärkt Ihre Sicherheit im Straßenverkehr.
        </Typography>

        {/* Abschluss */}
        <Divider sx={{ my: { xs: 4, sm: 5, md: 6 }, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography variant="h2" sx={h2Responsive}>
          Expertenwissen für Ihren Alltag
        </Typography>
        <Typography sx={pResponsive}>
          Mit diesem umfassenden Ratgeber kombinieren Sie fundiertes Autoankauf-Wissen mit praktischen Fahrtipps, Reifen- und Alkoholthemen. Sie verkaufen Ihr Auto sicher, fahren souverän unter allen Bedingungen und wissen, wie Sie Technik, Regeln und Notfälle meistern. So werden Sie zum echten Experten – im Auto und auf der Straße.
        </Typography>
      </Container>
    </Box>
  );
}

const h2Responsive = {
  color: "#ff6a21",
  fontWeight: 800,
  mt: { xs: 5, sm: 6, md: 8 },
  mb: { xs: 2, sm: 3, md: 3 },
  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
};

const pResponsive = {
  color: "rgba(255,255,255,0.75)",
  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
  lineHeight: { xs: 1.6, sm: 1.8, md: 1.9 },
  mb: 3,
};
