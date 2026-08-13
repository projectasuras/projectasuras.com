export function MapEmbed() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
      <iframe
        title="Project Asuras office location"
        src="https://maps.google.com/maps?q=548%20Market%20St%2C%20San%20Francisco%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="280"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
