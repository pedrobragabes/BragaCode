import Link from "next/link";

export function StudioContact({ english = false }: { english?: boolean }) {
  return (
    <section className="studio-contact-band">
      <div className="container studio-contact-inner">
        <div>
          <h2>{english ? "Discuss a project" : "Conversar sobre um projeto"}</h2>
          <p>{english ? "Tell Pedro what your team needs to build, connect or automate." : "Conte ao Pedro o que sua equipe precisa desenvolver, integrar ou automatizar."}</p>
        </div>
        <Link className="button" href={english ? "/en/contact" : "/contato"}>
          {english ? "Request a quote" : "Solicitar orçamento"} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
