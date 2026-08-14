import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { services } from '@/data/services';

export function ServicesGrid() {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="container-app">
        <SectionHeader
          eyebrow="What We Do"
          title="Full-Spectrum Security Services"
          subtitle="From breaking into your systems to teaching your team how to defend them, we cover the full lifecycle of security maturity."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
              features={service.features}
              comingSoon={service.comingSoon}
              link={service.comingSoon ? '/services#products' : service.slug === 'training-courses' ? '/training' : `/services#${service.slug}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
