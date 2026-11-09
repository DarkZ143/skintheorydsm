import type { ReactNode } from "react";
import BrandLogo from "./components/brand-logo";
import RevealImage from "./components/reveal-image";

type IconName = "arrow" | "clock" | "leaf" | "mail" | "map" | "phone" | "sparkles";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M4.5 12h15" /><path d="m13 5.5 6.5 6.5-6.5 6.5" /></>,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
    leaf: <><path d="M19.5 4.5c-7.7.1-13 2.6-13 7.4a5.1 5.1 0 0 0 5.2 5.2c4.8 0 7.3-5.3 7.8-12.6Z" /><path d="M4.5 20c2.2-4.7 5.2-7.7 10-10" /></>,
    mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4.5 7 7.5 5.5L19.5 7" /></>,
    map: <><path d="m3.5 6 5.7-2.5 5.6 2.5L20.5 3.5v14.5l-5.7 2.5-5.6-2.5-5.7 2.5V6Z" /><path d="M9.2 3.5V18M14.8 6v14" /></>,
    phone: <><path d="M7.2 3.7h2.1l1.2 4.2-1.8 1.8a15 15 0 0 0 5.6 5.6l1.8-1.8 4.2 1.2v2.1a2.5 2.5 0 0 1-2.7 2.5C10.2 18.7 5.3 13.8 4.7 6.4a2.5 2.5 0 0 1 2.5-2.7Z" /></>,
    sparkles: <><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /><path d="m5 3 .6 2.4L8 6l-2.4.6L5 9l-.6-2.4L2 6l2.4-.6L5 3Z" /></>,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

type Service = {
  name: string;
  detail: string;
  duration: string;
  price: string;
  label?: string;
};

const facials: Service[] = [
  { name: "Skin Theory Facial · Level 1", detail: "A custom facial with a nourishing masque and a little time to unwind.", duration: "60 min", price: "$150", label: "A thoughtful reset" },
  { name: "Skin Theory Facial · Level 2", detail: "A more advanced, skin-led facial tailored to your current routine and goals.", duration: "60 min", price: "$175", label: "Personalized care" },
  { name: "Glow Theory · Dermaplane", detail: "A focused dermaplaning treatment for a smooth, refreshed-looking finish.", duration: "30 min", price: "$85" },
];

const hydrafacials: Service[] = [
  { name: "Hydrafacial Theory", detail: "A refreshing, multi-step facial designed to cleanse, exfoliate, and hydrate.", duration: "45 min", price: "$199", label: "Signature treatment" },
  { name: "HydraLuxe Theory", detail: "An extended Hydrafacial experience with extra time for a personalized finish.", duration: "60 min", price: "$245", label: "The extended ritual" },
];

const advancedTreatments: Service[] = [
  { name: "Needle Theory · SkinPen", detail: "SkinPen microneedling with a focused, one-on-one treatment plan.", duration: "60 min", price: "$395" },
  { name: "HydraNeedle Theory", detail: "A combined microneedling and Hydrafacial protocol for a complete skin session.", duration: "90 min", price: "$475", label: "Advanced protocol" },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon name="sparkles" size={19} /></span>
        <span className="service-duration"><Icon name="clock" size={15} /> {service.duration}</span>
      </div>
      {service.label && <p className="service-label">{service.label}</p>}
      <h4>{service.name}</h4>
      <p className="service-description">{service.detail}</p>
      <div className="service-card-bottom">
        <p className="service-price">{service.price}</p>
        <a className="text-link" href="tel:5157452410" aria-label={"Call to book " + service.name}>
          Call to book <Icon name="arrow" size={16} />
        </a>
      </div>
    </article>
  );
}

function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className={"service-grid service-grid-" + services.length}>
      {services.map((service) => <ServiceCard key={service.name} service={service} />)}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="announcement">
        <span className="announcement-dot" />
        Now welcoming appointments in Johnston, Iowa
        <a href="tel:5157452410">(515) 745-2410</a>
      </div>

      <header className="site-header">
        <div className="header-inner page-width">
          <a className="brand-link" href="#top" aria-label="Skin Theory DSM home">
            <BrandLogo />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#treatments">Treatments</a>
            <a href="#about">Our approach</a>
            <a href="#visit">Visit us</a>
          </nav>
          <a className="button button-dark header-book" href="tel:5157452410">
            Call to book <Icon name="arrow" size={16} />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span className="menu-lines" />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#treatments">Treatments</a>
              <a href="#about">Our approach</a>
              <a href="#visit">Visit us</a>
              <a href="tel:5157452410">Call (515) 745-2410</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero page-width" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Personalized aesthetic skincare</p>
            <h1>Healthy skin, <em>thoughtfully</em> cared for.</h1>
            <p className="hero-description">
              A quieter kind of skincare. Explore tailored facials and advanced treatments in a
              calm, one-on-one setting.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#treatments">Explore treatments <Icon name="arrow" /></a>
              <a className="button button-outline" href="tel:5157452410"><Icon name="phone" /> Call the studio</a>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon"><Icon name="leaf" size={19} /></span>
              <p><strong>Care that starts with your skin.</strong><br />One-on-one with Dannica Tometich, Licensed Aesthetician</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <RevealImage
                src="https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?auto=format&fit=crop&w=1600&q=85"
                alt="A client receiving a calming facial treatment"
                preload
                sizes="(max-width: 800px) 100vw, 52vw"
              />
              <div className="hero-image-caption">
                <span className="caption-mark"><Icon name="sparkles" size={18} /></span>
                <span><strong>Your skin, your ritual.</strong><small>Thoughtfully tailored treatments</small></span>
              </div>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>SKIN FIRST</span>
              <span className="stamp-flower">✳</span>
              <span>ALWAYS</span>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Studio highlights">
          <div className="page-width trust-inner">
            <span><Icon name="sparkles" size={18} /> Personalized treatments</span>
            <span><Icon name="leaf" size={18} /> Skin-first approach</span>
            <span><Icon name="clock" size={18} /> Unhurried appointments</span>
            <span><Icon name="map" size={18} /> Johnston, Iowa</span>
          </div>
        </section>

        <section className="treatments section-pad" id="treatments">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> Find your ritual</p>
                <h2>A little more <em>you</em> in every treatment.</h2>
              </div>
              <p className="section-intro">
                No two faces are the same. Start with what your skin needs today, and let’s make a
                plan together.
              </p>
            </div>

            <div className="treatment-feature">
              <div className="treatment-feature-photo">
                <RevealImage
                  src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1400&q=85"
                  alt="A facial skincare treatment in a serene studio"
                  sizes="(max-width: 760px) 100vw, 48vw"
                />
              </div>
              <div className="treatment-feature-copy">
                <span className="feature-kicker">THE SKIN THEORY DIFFERENCE</span>
                <h3>Good skin days begin with good care.</h3>
                <p>
                  From a restorative facial to a more advanced protocol, each visit is shaped around
                  your skin, your comfort, and the results you’re working toward.
                </p>
                <a className="text-link" href="tel:5157452410">Let’s talk about your skin <Icon name="arrow" size={16} /></a>
              </div>
            </div>

            <div className="service-group" id="facials">
              <div className="group-heading">
                <div><span className="group-number">01</span><h3>Skin Theory facials</h3></div>
                <p>Personalized facial care, from a gentle reset to a deeper refresh.</p>
              </div>
              <ServiceGrid services={facials} />
            </div>

            <div className="service-group hydrafacial-group" id="hydrafacial">
              <div className="group-heading">
                <div><span className="group-number">02</span><h3>Hydrafacial Theory</h3></div>
                <p>A fresh, hydrated feeling with time to make the treatment your own.</p>
              </div>
              <ServiceGrid services={hydrafacials} />
            </div>

            <div className="service-group advanced-group" id="advanced">
              <div className="group-heading">
                <div><span className="group-number">03</span><h3>Advanced skin treatments</h3></div>
                <p>Focused protocols for clients looking to take the next step in their care.</p>
              </div>
              <ServiceGrid services={advancedTreatments} />
            </div>
          </div>
        </section>

        <section className="approach section-pad" id="about">
          <div className="page-width approach-layout">
            <div className="approach-photo">
              <RevealImage
                src="https://images.unsplash.com/photo-1737352777897-e22953991a32?auto=format&fit=crop&w=1400&q=85"
                alt="A peaceful spa treatment room prepared for a visit"
                sizes="(max-width: 800px) 100vw, 48vw"
              />
              <div className="photo-tag"><Icon name="leaf" size={16} /> The Johnston sanctuary</div>
            </div>
            <div className="approach-copy">
              <p className="eyebrow eyebrow-light"><span /> A considered approach</p>
              <h2>Personal care, with room to <em>breathe.</em></h2>
              <p>
                Your appointment is time set aside just for you. Dannica Tometich brings a thoughtful,
                skin-first approach to every visit, helping you feel comfortable, informed, and cared
                for along the way.
              </p>
              <div className="approach-details">
                <div><span className="detail-icon"><Icon name="sparkles" /></span><span><strong>Made for you</strong><small>Treatment choices shaped around your skin.</small></span></div>
                <div><span className="detail-icon"><Icon name="clock" /></span><span><strong>Unhurried by design</strong><small>A calm space to pause and reset.</small></span></div>
              </div>
              <a className="button button-light" href="tel:5157452410">Get in touch <Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="gift-section section-pad">
          <div className="page-width gift-layout">
            <div className="gift-copy">
              <p className="eyebrow"><span /> A thoughtful little something</p>
              <h2>Give the gift of a <em>glow.</em></h2>
              <p>
                A Skin Theory gift card is a lovely way to share a moment of care. Get in touch to
                ask about digital gift cards for someone special.
              </p>
              <a className="button button-dark" href="mailto:skintheorydsm@gmail.com?subject=Skin%20Theory%20gift%20card">
                Ask about gift cards <Icon name="arrow" />
              </a>
            </div>
            <div className="gift-photo">
              <RevealImage
                src="https://images.unsplash.com/photo-1739980155900-36562bcb7857?auto=format&fit=crop&w=1400&q=85"
                alt="Skincare bottles and jars arranged on a marble tray"
                sizes="(max-width: 800px) 100vw, 48vw"
              />
              <div className="gift-photo-note">A little care goes a long way.</div>
            </div>
          </div>
        </section>

        <section className="visit section-pad" id="visit">
          <div className="page-width">
            <div className="visit-heading">
              <p className="eyebrow"><span /> Come see us</p>
              <h2>Your next good skin day starts <em>here.</em></h2>
            </div>
            <div className="visit-layout">
              <div className="visit-card">
                <div className="visit-info">
                  <h3>Skin Theory DSM</h3>
                  <p className="visit-address"><Icon name="map" /> 5445 West Parkway, Suite 116<br /><span>Johnston, IA 50131</span></p>
                  <a className="contact-row" href="tel:5157452410"><Icon name="phone" /> (515) 745-2410</a>
                  <a className="contact-row" href="mailto:skintheorydsm@gmail.com"><Icon name="mail" /> skintheorydsm@gmail.com</a>
                  <div className="hours">
                    <div><Icon name="clock" /><strong>Studio hours</strong></div>
                    <p>Tuesday – Friday <span>9 am – 6 pm</span></p>
                    <p>Saturday <span>By appointment</span></p>
                    <p>Sunday – Monday <span>Closed</span></p>
                  </div>
                  <a
                    className="text-link map-link"
                    href="https://maps.google.com/?q=5445+West+Parkway+Suite+116+Johnston+IA+50131"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions <Icon name="arrow" size={16} />
                  </a>
                </div>
                <div className="map-frame">
                  <iframe
                    title="Map showing Skin Theory DSM in Johnston, Iowa"
                    src="https://maps.google.com/maps?q=5445%20West%20Parkway%20Suite%20116%20Johnston%20IA%2050131&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="visit-cta">
              <span>Ready when you are.</span>
              <a className="button button-dark" href="tel:5157452410"><Icon name="phone" /> Call (515) 745-2410</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-top">
          <div className="footer-brand">
            <BrandLogo />
            <p>Thoughtful aesthetic skincare in Johnston, Iowa.</p>
          </div>
          <div className="footer-nav">
            <p>Explore</p>
            <a href="#treatments">Treatments</a>
            <a href="#about">Our approach</a>
            <a href="#visit">Visit us</a>
          </div>
          <div className="footer-contact">
            <p>Say hello</p>
            <a href="tel:5157452410">(515) 745-2410</a>
            <a href="mailto:skintheorydsm@gmail.com">skintheorydsm@gmail.com</a>
            <span>5445 West Parkway, Suite 116<br />Johnston, IA 50131</span>
          </div>
          <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
        </div>
        <div className="page-width footer-bottom">
          <span>© 2026 Skin Theory DSM. All rights reserved.</span>
          <span>Care for your skin. Make space for yourself.</span>
        </div>
      </footer>
    </>
  );
}
