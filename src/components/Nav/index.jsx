import { useEffect, useState } from "react";
import { Container, Navbar as BsNavbar, NavDropdown } from "react-bootstrap";
import { ArrowRight } from "lucide-react";
import * as s from "./styledNavbar";
import Logo from "../../assets/spid_logo_nav.svg";

const projectLinks = [
  {
    label: "Fasade",
    description: "Bjørvika",
    href: "https://example.com/prosjekt/fasade-bjorvika",
  },
  {
    label: "Dører",
    description: "Trikkestallen Torshov nye dører",
    href: "https://example.com/prosjekt/dorer-trikkestallen",
  },
  {
    label: "Vinduer",
    description: "Varesentralen Øvre Slottsgate",
    href: "https://example.com/prosjekt/vinduer-varesentralen",
  },
  {
    label: "Spilekledning",
    description: "Bjørvika Bygg B",
    href: "https://example.com/prosjekt/spilekledning-bjorvika",
  },
  {
    label: "Tannlegekontor",
    description: "Innredning",
    href: "https://example.com/prosjekt/tannlegekontor",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <s.NavbarWrapper expand="lg" expanded={expanded} $scrolled={scrolled}>
      <Container fluid="xl">
        <BsNavbar.Brand href="/" onClick={closeMenu}>
          <s.BrandLogo src={Logo} alt="SPID logo" />
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="spid-navbar"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <s.ToggleLines $expanded={expanded}>
            <span />
            <span />
            <span />
          </s.ToggleLines>
        </BsNavbar.Toggle>

        <BsNavbar.Collapse id="spid-navbar">
          <s.NavMenu className="mx-auto">
            <s.NavItem href="#tjenester" onClick={closeMenu}>
              Tjenester
            </s.NavItem>

            <s.StyledDropdown title="Prosjekter" id="projects-dropdown">
              {projectLinks.map((item) => (
                <s.StyledDropdownItem
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <s.DropdownItemText>
                    <s.DropdownItemLabel>{item.label}</s.DropdownItemLabel>
                    <s.DropdownItemDescription>
                      {item.description}
                    </s.DropdownItemDescription>
                  </s.DropdownItemText>
                </s.StyledDropdownItem>
              ))}

              <NavDropdown.Divider />

              <s.StyledDropdownItem
                href="https://example.com/prosjekter"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <s.DropdownItemText>
                  <s.DropdownItemLabel>Se alle prosjekter</s.DropdownItemLabel>
                  <s.DropdownItemDescription>
                    Åpne full portefølje
                  </s.DropdownItemDescription>
                </s.DropdownItemText>
              </s.StyledDropdownItem>
            </s.StyledDropdown>

            <s.NavItem href="#om-oss" onClick={closeMenu}>
              Om oss
            </s.NavItem>

            <s.NavItem href="#kontakt" onClick={closeMenu}>
              Kontakt
            </s.NavItem>
          </s.NavMenu>

          <s.RightActions>
            <s.CtaButton href="#kontakt">
              Kontakt oss
              <ArrowRight size={16} />
            </s.CtaButton>
          </s.RightActions>
        </BsNavbar.Collapse>
      </Container>
    </s.NavbarWrapper>
  );
}
