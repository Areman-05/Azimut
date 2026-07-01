export function MapEmbed() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border border-border-light bg-sand">
      <iframe
        title="Ubicación de Azimut Estructuras en Madrid"
        src="https://maps.google.com/maps?q=Madrid%2C%20Espa%C3%B1a&output=embed"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
