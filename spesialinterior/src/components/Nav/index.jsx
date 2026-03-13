import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import * as s from "./styledNavbar";
import Logo from "../../assets/spid-logo.jpg";

const projectLinks = [
  {
    label: "Kjøkken",
    description: "Skreddersydde kjøkkenløsninger med høy finish.",
    href: "#prosjekter-kjokken",
  },
  {
    label: "Garderobe",
    description: "Plassbygde garderober tilpasset rom og behov.",
    href: "#prosjekter-garderobe",
  },
  {
    label: "Oppbevaring",
    description: "Smarte løsninger for orden, flyt og funksjon.",
    href: "#prosjekter-oppbevaring",
  },
  {
    label: "Spesialinnredning",
    description: "Unike løsninger bygget rundt helheten i hjemmet.",
    href: "#prosjekter-spesialinnredning",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      setIsScrolled(currentY > 16);

      if (currentY < 24) {
        setIsCompact(false);
      } else if (scrollingDown && currentY > 80) {
        setIsCompact(true);
      } else if (!scrollingDown) {
        setIsCompact(false);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 992) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setProjectsOpen(false);
  };

  return (
    <s.Header>
      <s.NavWrap>
        <s.NavShell $scrolled={isScrolled} $compact={isCompact}>
          <s.Brand href="/" aria-label="Spesialinteriør og Design AS">
            <s.BrandLogo src={Logo} alt="SPID logo" $compact={isCompact} />
          </s.Brand>

          <s.DesktopNav>
            <s.NavItem href="#tjenester">Tjenester</s.NavItem>

            <s.Dropdown ref={dropdownRef}>
              <s.DropdownTrigger
                type="button"
                aria-expanded={projectsOpen}
                onClick={() => setProjectsOpen((prev) => !prev)}
                onMouseEnter={() => setProjectsOpen(true)}
              >
                Prosjekter
                <s.TriggerIcon $open={projectsOpen}>
                  <ChevronDown size={16} />
                </s.TriggerIcon>
              </s.DropdownTrigger>

              <s.DropdownSurface
                $open={projectsOpen}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <s.DropdownGrid>
                  {projectLinks.map((item) => (
                    <s.DropdownCard key={item.label} href={item.href}>
                      <s.DropdownTitleRow>
                        <s.DropdownTitle>{item.label}</s.DropdownTitle>
                        <ArrowRight size={15} />
                      </s.DropdownTitleRow>
                      <s.DropdownDescription>
                        {item.description}
                      </s.DropdownDescription>
                    </s.DropdownCard>
                  ))}
                </s.DropdownGrid>
              </s.DropdownSurface>
            </s.Dropdown>

            <s.NavItem href="#om-oss">Om oss</s.NavItem>
            <s.NavItem href="#kontakt">Kontakt</s.NavItem>
          </s.DesktopNav>

          <s.RightCluster>
            <s.CtaButton href="#kontakt">
              Start prosjekt
              <ArrowRight size={16} />
            </s.CtaButton>

            <s.MobileToggle
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </s.MobileToggle>
          </s.RightCluster>
        </s.NavShell>
      </s.NavWrap>

      <s.MobileSheet $open={mobileOpen}>
        <s.MobilePanel>
          <s.MobileLink href="#tjenester" onClick={closeAll}>
            Tjenester
          </s.MobileLink>

          <s.MobileDisclosure>
            <s.MobileDisclosureButton
              type="button"
              onClick={() => setProjectsOpen((prev) => !prev)}
              aria-expanded={projectsOpen}
            >
              Prosjekter
              <s.TriggerIcon $open={projectsOpen}>
                <ChevronDown size={18} />
              </s.TriggerIcon>
            </s.MobileDisclosureButton>

            <s.MobileDisclosurePanel $open={projectsOpen}>
              {projectLinks.map((item) => (
                <s.MobileSubLink
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                >
                  <span>{item.label}</span>
                  <small>{item.description}</small>
                </s.MobileSubLink>
              ))}
            </s.MobileDisclosurePanel>
          </s.MobileDisclosure>

          <s.MobileLink href="#om-oss" onClick={closeAll}>
            Om oss
          </s.MobileLink>

          <s.MobileLink href="#kontakt" onClick={closeAll}>
            Kontakt
          </s.MobileLink>

          <s.MobileCta href="#kontakt" onClick={closeAll}>
            Start prosjekt
            <ArrowRight size={16} />
          </s.MobileCta>
        </s.MobilePanel>
      </s.MobileSheet>
    </s.Header>
  );
}
