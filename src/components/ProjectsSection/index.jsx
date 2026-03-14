import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import * as s from "./styledProjects";

// Juster filnavnene under så de matcher nøyaktig det dere har i assets
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

const projects = [
  {
    image: prosjektFasade,
    category: "Prosjekt Fasade",
    title: "Bjørvika",
    size: "large",
    position: "center center",
  },
  {
    image: prosjektDorer,
    category: "Prosjekt Dører",
    title: "Trikkestallen Torshov nye dører",
    size: "large",
    position: "center center",
  },
  {
    image: prosjektVinduer,
    category: "Prosjekt Vinduer",
    title: "Varesentralen Øvre Slottsgate",
    size: "medium",
    position: "center center",
  },

  {
    image: prosjektSpilekledning,
    category: "Prosjekt Spilekledning",
    title: "Bjørvika Bygg B",
    size: "medium",
    position: "center center",
  },
  {
    image: prosjektBro,
    category: "Prosjekt Bro",
    title: "Bolig utbygging Bryn",
    size: "small",
    position: "center center",
  },
  {
    image: prosjektInnredning,
    category: "Prosjekt Innredning",
    title: "Båtmonter",
    size: "medium",
    position: "center center",
  },
  {
    image: prosjektFasadeDekor,
    category: "Prosjekt Fasade dekor",
    title: "Fra gammelt til nytt",
    size: "large",
    position: "center center",
  },
  {
    image: prosjektVinmonter,
    category: "Prosjekt Vinmonter",
    title: "Innredning",
    size: "large",
    position: "center center",
  },
  {
    image: prosjektTannlegekontor,
    category: "Prosjekt Tannlegekontor",
    title: "Innredning",
    size: "large",
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
              as={motion.article}
              key={`${project.category}-${project.title}-${index}`}
              $size={project.size}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={0.04 + index * 0.04}
            >
              <s.ImageWrap>
                <s.Image
                  src={project.image}
                  alt={project.title}
                  $position={project.position}
                />
                <s.ImageOverlay />

                <s.CardTop>
                  <s.CategoryPill>{project.category}</s.CategoryPill>

                  <s.CardArrow>
                    <ArrowUpRight size={16} />
                  </s.CardArrow>
                </s.CardTop>

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
