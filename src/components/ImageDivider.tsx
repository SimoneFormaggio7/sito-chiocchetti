"use client";

export default function ImageDivider() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/divider-architettura.jpg')",
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
}
