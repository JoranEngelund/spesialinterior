import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import bannerImage from "../../assets/fasasebanner.jpg";
import * as s from "./styledHero";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <s.Section>
      <s.GlowOne />
      <s.GlowTwo />

      <s.Container>
        <s.Grid>
          <s.CopyColumn>
            <s.Eyebrow
              as={motion.div}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.04}
            >
              Spesialinteriør og Design AS
            </s.Eyebrow>

            <s.Title
              as={motion.h1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
            >
              Skreddersydd interiør
              <br />
              med <s.Accent>premium utførelse</s.Accent>
            </s.Title>

            <s.Description
              as={motion.p}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              Vi bygger plassbygde og spesialtilpassede løsninger for hjem som
              fortjener mer enn standard. Fra første idé til ferdig montering
              leverer vi med fokus på detaljer, materialvalg og et helhetlig
              uttrykk.
            </s.Description>

            <s.Actions
              as={motion.div}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.28}
            >
              <s.PrimaryButton href="#kontakt">
                Start prosjekt
                <ArrowRight size={18} />
              </s.PrimaryButton>

              <s.SecondaryButton href="#prosjekter">
                Se prosjekter
              </s.SecondaryButton>
            </s.Actions>

            <s.InfoRow
              as={motion.div}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
            >
              <s.InfoItem>
                <s.InfoLabel>Fokus</s.InfoLabel>
                <s.InfoValue>
                  Spesialinnredning og plassbygde løsninger
                </s.InfoValue>
              </s.InfoItem>

              <s.InfoItem>
                <s.InfoLabel>Prosess</s.InfoLabel>
                <s.InfoValue>
                  Fra idé og måltaking til ferdig resultat
                </s.InfoValue>
              </s.InfoItem>
            </s.InfoRow>
          </s.CopyColumn>

          <s.VisualColumn
            as={motion.div}
            initial={{ opacity: 0, y: 34, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.95,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <s.ImageShell>
              <s.Image src={bannerImage} alt="Spesialinteriør prosjekt" />
              <s.ImageOverlay />

              <s.BottomPanel
                as={motion.div}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.62 }}
              >
                <s.BottomTextWrap>
                  <s.BottomLabel>Skreddersydd prosess</s.BottomLabel>
                  <s.BottomText>
                    Hver løsning formes rundt rommet, behovet og uttrykket dere
                    ønsker.
                  </s.BottomText>
                </s.BottomTextWrap>

                <s.BottomAction href="#kontakt">
                  <PhoneCall size={16} />
                  Kontakt oss
                </s.BottomAction>
              </s.BottomPanel>
            </s.ImageShell>
          </s.VisualColumn>
        </s.Grid>
      </s.Container>
    </s.Section>
  );
}
