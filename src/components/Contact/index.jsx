import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import * as s from "./styledContact";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", form);

    // Koble til backend / Resend / Formspree senere
  };

  return (
    <s.Section id="kontakt">
      <s.GlowOne />
      <s.GlowTwo />

      <s.Container>
        <s.Intro
          as={motion.div}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.04}
        >
          <s.Kicker>Kontakt oss</s.Kicker>

          <s.Title>
            Har du et prosjekt
            <br />
            vi kan <s.Accent>hjelpe med?</s.Accent>
          </s.Title>

          <s.Text>
            Fortell oss litt om prosjektet ditt, så tar vi kontakt for en
            uforpliktende prat om muligheter, løsning og videre prosess.
          </s.Text>
        </s.Intro>

        <s.Grid>
          <s.InfoCard
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
          >
            <s.InfoCardGlow />

            <s.InfoTitle>Kontaktinformasjon</s.InfoTitle>
            <s.InfoLead>
              Vi hjelper både private og profesjonelle kunder med skreddersydde
              løsninger.
            </s.InfoLead>

            <s.InfoList>
              <s.InfoItem>
                <s.IconWrap>
                  <MapPin size={18} />
                </s.IconWrap>
                <s.InfoContent>
                  <strong>Adresse</strong>
                  <span>Ole Deviksvei 30, 0666 Oslo</span>
                </s.InfoContent>
              </s.InfoItem>

              <s.InfoItem>
                <s.IconWrap>
                  <Mail size={18} />
                </s.IconWrap>
                <s.InfoContent>
                  <strong>E-post</strong>
                  <a href="mailto:post@spesialinterior.no">
                    post@spesialinterior.no
                  </a>
                </s.InfoContent>
              </s.InfoItem>

              <s.InfoItem>
                <s.IconWrap>
                  <Phone size={18} />
                </s.IconWrap>
                <s.InfoContent>
                  <strong>Telefon</strong>
                  <a href="tel:+4790562543">90 56 25 43</a>
                </s.InfoContent>
              </s.InfoItem>
            </s.InfoList>
          </s.InfoCard>

          <s.FormCard
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.18}
          >
            <s.FormCardGlow />

            <s.Form onSubmit={handleSubmit}>
              <s.Row>
                <s.Field>
                  <s.Label htmlFor="name">Navn</s.Label>
                  <s.Input
                    id="name"
                    name="name"
                    placeholder="Ditt navn"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </s.Field>

                <s.Field>
                  <s.Label htmlFor="phone">Telefon</s.Label>
                  <s.Input
                    id="phone"
                    name="phone"
                    placeholder="Telefonnummer"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </s.Field>
              </s.Row>

              <s.Row>
                <s.Field>
                  <s.Label htmlFor="email">E-post</s.Label>
                  <s.Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="din@epost.no"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </s.Field>

                <s.Field>
                  <s.Label htmlFor="type">Hva gjelder henvendelsen?</s.Label>
                  <s.Select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="">Velg kategori</option>
                    <option value="Innredning">Innredning</option>
                    <option value="Dører og vinduer">Dører og vinduer</option>
                    <option value="Fasade">Fasade</option>
                    <option value="Bad og våtrom">Bad og våtrom</option>
                    <option value="Tannlegekontor">Tannlegekontor</option>
                    <option value="Annet">Annet</option>
                  </s.Select>
                </s.Field>
              </s.Row>

              <s.Field>
                <s.Label htmlFor="message">Prosjektbeskrivelse</s.Label>
                <s.Textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Beskriv kort hva du ønsker hjelp med..."
                  value={form.message}
                  onChange={handleChange}
                />
              </s.Field>

              <s.Actions>
                <s.SubmitButton type="submit">
                  Send forespørsel
                  <Send size={16} />
                </s.SubmitButton>

                <s.HelperText>
                  Vi svarer så raskt vi kan på alle seriøse henvendelser.
                </s.HelperText>
              </s.Actions>
            </s.Form>
          </s.FormCard>
        </s.Grid>
      </s.Container>
    </s.Section>
  );
}
