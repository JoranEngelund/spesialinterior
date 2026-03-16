import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import * as s from "./styledProjects";

import prosjektVinduer from "../../assets/vinduer.jpg";
import prosjektDorer from "../../assets/dører.jpg";
import prosjektSpilekledning from "../../assets/spilekledning.jpg";
import prosjektBro from "../../assets/bro.jpg";
import prosjektInnredning from "../../assets/innredning.jpg";
import prosjektFasadeDekor from "../../assets/fasadedekor.jpg";
import prosjektVinmonter from "../../assets/vinmonter.jpg";
import prosjektTannlegekontor from "../../assets/tannlegekontor.jpg";
import prosjektFasade from "../../assets/fasade.jpg";

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

const featuredProjects = [];

const projects = [
  {
    id: "prosjekt-fasade-bjorvika",
    image: prosjektFasade,
    category: "Fasade",
    title: "Bjørvika",
    position: "center center",
  },
  {
    id: "prosjekt-dorer-trikkestallen-torshov",
    image: prosjektDorer,
    category: "Dører",
    title: "Trikkestallen Torshov nye dører",
    position: "center center",
  },
  {
    id: "prosjekt-vinduer-varesentralen",
    image: prosjektVinduer,
    category: "Vinduer",
    title: "Varesentralen Øvre Slottsgate",
    position: "center center",
  },
  {
    id: "prosjekt-spilekledning-bjorvika-bygg-b",
    image: prosjektSpilekledning,
    category: "Spilekledning",
    title: "Bjørvika Bygg B",
    position: "center center",
  },
  {
    id: "prosjekt-bro-bryn",
    image: prosjektBro,
    category: "Bro",
    title: "Bolig utbygging Bryn",
    position: "center center",
  },
  {
    id: "prosjekt-innredning-batmonter",
    image: prosjektInnredning,
    category: "Innredning",
    title: "Båtmonter",
    position: "center center",
  },
  {
    id: "prosjekt-fasade-dekor",
    image: prosjektFasadeDekor,
    category: "Fasade dekor",
    title: "Fra gammelt til nytt",
    position: "center center",
  },
  {
    id: "prosjekt-vinmonter",
    image: prosjektVinmonter,
    category: "Vinmonter",
    title: "Vinmonter",
    position: "center center",
  },
  {
    id: "prosjekt-tannlegekontor",
    image: prosjektTannlegekontor,
    category: "Tannlegekontor",
    title: "Innredning",
    position: "center center",
  },
];

export default function ProjectsSection() {
  return (
    <s.Section id="prosjekter">
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
            Våre prosjekter
          </s.Kicker>

          <s.Title
            as={motion.h2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
          >
            Arbeider som viser
            <br />
            vår <s.Accent>presisjon</s.Accent> i praksis
          </s.Title>

          <s.Text
            as={motion.p}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.16}
          >
            Et utvalg prosjekter innen vinduer, dører, innredning, fasade,
            spesialtilpasning og profesjonelle miljøer.
          </s.Text>
        </s.Intro>

        <s.Grid>
          {projects.map((project, index) => (
            <s.ProjectCard
              id={project.id}
              as={motion.article}
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={0.08 + index * 0.04}
            >
              <s.ImageWrap>
                <s.Image
                  src={project.image}
                  alt={project.title}
                  $position={project.position}
                />
                <s.ImageOverlay />

                <s.CardBottom>
                  <s.ProjectTitle>{project.title}</s.ProjectTitle>
                </s.CardBottom>
              </s.ImageWrap>
            </s.ProjectCard>
          ))}
        </s.Grid>
      </s.Container>
    </s.Section>
  );
}
