import * as React from 'react'

type Logo = {
  src: string
  alt: string
  href?: string
}

type BrandMarqueeProps = {
  title?: string
  logos: Logo[]
  speed?: number
  direction?: 'ltr' | 'rtl'
  className?: string
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({
  title = 'More than 10,000 world‑class brands trust us',
  logos,
  speed = 26,
  direction = 'ltr',
  className = '',
}) => {
  const anim = direction === 'ltr' ? 'animate-marquee-ltr' : 'animate-marquee-rtl'

  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-[1920px] px-4 py-8 sm:py-10">
        {title && (
          <p className="text-center text-[clamp(0.75rem,1vw,1rem)] text-slate-300">
            {title}
          </p>
        )}

        <div className="relative mt-6 overflow-hidden">
          {/* Track */}
          <div
            className={`flex w-max items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 will-change-transform ${anim} pause-on-hover`}
            style={{ ['--marquee-duration' as any]: `${speed}s` }}
            aria-label="Brand logos carousel"
          >
            <LogoRow logos={logos} />
            {/* Duplicate row for seamless loop */}
            <LogoRow logos={logos} ariaHidden />
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoRow({
  logos,
  ariaHidden = false,
}: {
  logos: Logo[]
  ariaHidden?: boolean
}) {
  return (
    <ul
      className="flex items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo, i) => (
        <li key={i} className="shrink-0">
          <LogoItem logo={logo} />
        </li>
      ))}
    </ul>
  )
}

function LogoItem({ logo }: { logo: Logo }) {
  const img = (
    <img
      src={logo.src}
      alt={logo.alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="h-18 sm:h-18 md:h-28 lg:h-22 xl:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity "
    />
  )

  return logo.href ? (
    <a href={logo.href} target="_blank" rel="noreferrer" className="block">
      {img}
    </a>
  ) : (
    img
  )
}