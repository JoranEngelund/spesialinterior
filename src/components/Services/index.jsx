import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bath,
  BriefcaseBusiness,
  Building2,
  DoorOpen,
  Hammer,
  Hospital,
  LayoutGrid,
  PencilRuler,
  SquareStack,
  Wrench,
} from "lucide-react";
import * as s from "./styledServices";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const services = [
  {
    icon: <LayoutGrid size={18} />,
    title: "Varevinduer etter mål",
  },
  {
    icon: <DoorOpen size={18} />,
    title: "Dører og vinduer i klassisk stil",
  },
  {
    icon: <PencilRuler size={18} />,
    title: "Listverk etter gamle modeller",
  },
  {
    icon: <Wrench size={18} />,
    title: "Reparasjon og restaurering",
  },
  {
    icon: <SquareStack size={18} />,
    title: "Innredning og skap",
  },
  {
    icon: <Hammer size={18} />,
    title: "Andre verkstedoppdrag",
  },
];

const specialties = [
  {
    icon: <Bath size={20} />,
    title: "Bad og våtrom",
    text: "Komplett gjennomføring med riktig kompetanse, spesialtilpasset innredning og samarbeid med faste fagfolk.",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Resepsjonsdesker",
    text: "Skreddersydde løsninger for profesjonelle miljøer med fokus på funksjon, finish og helhet.",
  },
  {
    icon: <Hospital size={20} />,
    title: "Tannlegekontorer",
    text: "Lang erfaring med innredning til klinikkmiljøer der slitestyrke, presisjon og praktiske løsninger er avgjørende.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Ominnredning og ombygging",
    text: "Tilpasning og ombygging av leiligheter, kontorer og næringslokaler – alene eller i samarbeid med andre fag.",
  },
];

export default function ServicesSection() {
  return (
    <s.Section id="tjenester">
      <s.Container>
        <s.Intro>
          <s.Kicker
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.04}
          >
            Tjenester
          </s.Kicker>

          <s.Title
            as={motion.h2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
          >
            Skreddersydde løsninger
            <br />
            med fokus på <s.Accent>kvalitet</s.Accent>
          </s.Title>

          <s.Text
            as={motion.p}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.16}
          >
            Vi leverer skreddersydde løsninger for både private hjem og
            profesjonelle miljøer — fra klassiske detaljarbeider til komplette
            spesialinnredninger.
          </s.Text>
        </s.Intro>

        <s.ServicesGrid>
          {services.map((item, index) => (
            <s.ServiceCard
              as={motion.div}
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={0.04 + index * 0.04}
            >
              <s.CardGlow />

              <s.CardTop>
                <s.IconWrap>{item.icon}</s.IconWrap>

                <s.CardArrow>
                  <ArrowUpRight size={16} />
                </s.CardArrow>
              </s.CardTop>

              <s.ServiceTitle>{item.title}</s.ServiceTitle>
            </s.ServiceCard>
          ))}
        </s.ServicesGrid>

        <s.SpecialtiesBlock>
          <s.SpecialtiesHeader
            as={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.08}
          >
            <s.SpecialtiesKicker>Spesialiteter</s.SpecialtiesKicker>

            <s.SpecialtiesTitle>
              Erfaring der kravene
              <br />
              er <s.Accent>høyere</s.Accent>
            </s.SpecialtiesTitle>

            <s.SpecialtiesText>
              Vi har særlig erfaring med prosjekter som krever presisjon,
              fagkompetanse og løsninger tilpasset mer komplekse behov.
            </s.SpecialtiesText>
          </s.SpecialtiesHeader>

          <s.SpecialtiesGrid>
            {specialties.map((item, index) => (
              <s.SpecialtyCard
                as={motion.div}
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={0.1 + index * 0.05}
              >
                <s.CardGlow />

                <s.SpecialtyTop>
                  <s.IconWrap $soft>{item.icon}</s.IconWrap>

                  <s.SpecialtyTitleWrap>
                    <s.SpecialtyTitle>{item.title}</s.SpecialtyTitle>

                    <s.SpecialtyArrow>
                      <ArrowUpRight size={16} />
                    </s.SpecialtyArrow>
                  </s.SpecialtyTitleWrap>
                </s.SpecialtyTop>

                <s.SpecialtyText>{item.text}</s.SpecialtyText>
              </s.SpecialtyCard>
            ))}
          </s.SpecialtiesGrid>
        </s.SpecialtiesBlock>
      </s.Container>
    </s.Section>
  );
}
