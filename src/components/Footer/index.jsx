import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Logo from "../../assets/spid_logo_nav.svg";
import * as s from "./styledFooter";

export default function Footer() {
  return (
    <s.FooterWrapper>
      <s.Container>
        <s.FooterCard>
          <s.TopGrid>
            <s.BrandColumn>
              <s.Brand>
                <s.Logo src={Logo} alt="SPID logo" />
              </s.Brand>

              <s.BrandText>
                Skreddersydde løsninger innen interiør, innredning og
                spesialtilpasset snekkerarbeid — med fokus på kvalitet, detaljer
                og varige materialvalg.
              </s.BrandText>
            </s.BrandColumn>

            <s.LinkColumn>
              <s.ColumnTitle>Navigasjon</s.ColumnTitle>

              <s.FooterNav>
                <s.FooterLink href="#tjenester">Tjenester</s.FooterLink>
                <s.FooterLink href="#prosjekter">Prosjekter</s.FooterLink>
                <s.FooterLink href="#om-oss">Om oss</s.FooterLink>
                <s.FooterLink href="#kontakt">Kontakt</s.FooterLink>
              </s.FooterNav>
            </s.LinkColumn>

            <s.ContactColumn>
              <s.ColumnTitle>Kontakt</s.ColumnTitle>

              <s.ContactList>
                <s.ContactItem>
                  <s.IconWrap>
                    <MapPin size={16} />
                  </s.IconWrap>
                  <s.ContactText>Ole Deviksvei 30, 0666 Oslo</s.ContactText>
                </s.ContactItem>

                <s.ContactItem>
                  <s.IconWrap>
                    <Mail size={16} />
                  </s.IconWrap>
                  <s.ContactAnchor href="mailto:post@spesialinterior.no">
                    post@spesialinterior.no
                    <ArrowUpRight size={14} />
                  </s.ContactAnchor>
                </s.ContactItem>

                <s.ContactItem>
                  <s.IconWrap>
                    <Phone size={16} />
                  </s.IconWrap>
                  <s.ContactAnchor href="tel:+4790562543">
                    90 56 25 43
                    <ArrowUpRight size={14} />
                  </s.ContactAnchor>
                </s.ContactItem>
              </s.ContactList>
            </s.ContactColumn>
          </s.TopGrid>

          <s.BottomBar>
            <s.BottomText>
              © {new Date().getFullYear()} Spesialinteriør og Design AS. Alle
              rettigheter forbeholdt.
            </s.BottomText>

            <s.BottomText>
              <a
                href="https://nordevdigital.no"
                target="_blank"
                rel="noopener noreferrer"
              >
                Levert av Nordev Digital
              </a>
            </s.BottomText>
          </s.BottomBar>
        </s.FooterCard>
      </s.Container>
    </s.FooterWrapper>
  );
}
