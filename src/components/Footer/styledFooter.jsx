import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  background:
    linear-gradient(180deg, #efe9e1 0%, #e9e2d8 100%),
    radial-gradient(
      circle at top left,
      rgba(213, 31, 38, 0.04),
      transparent 24%
    );
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const FooterCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.82);
  box-shadow:
    0 16px 38px rgba(18, 18, 18, 0.05),
    0 0 22px rgba(213, 31, 38, 0.035),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 1.1rem;
  }
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.7fr 1fr;
  gap: 2rem;
  padding-bottom: 1.4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BrandColumn = styled.div`
  max-width: 460px;
`;

export const Brand = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 46px;
  width: auto;
  object-fit: contain;

  @media (max-width: 576px) {
    height: 40px;
  }
`;

export const BrandText = styled.p`
  margin: 1rem 0 0;
  font-size: 0.98rem;
  line-height: 1.75;
  color: #5f5a55;
  max-width: 42ch;
`;

export const LinkColumn = styled.div``;

export const ContactColumn = styled.div``;

export const ColumnTitle = styled.h3`
  margin: 0;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #847d76;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: #1a1a1a;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition:
    color 0.22s ease,
    transform 0.22s ease;

  &:hover {
    color: #d51f26;
    transform: translateX(2px);
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const IconWrap = styled.div`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.84);
  color: #d51f26;
  flex-shrink: 0;
  box-shadow:
    0 6px 14px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
`;

export const ContactText = styled.p`
  margin: 0.3rem 0 0;
  color: #1a1a1a;
  font-size: 0.97rem;
  line-height: 1.5;
`;

export const ContactAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.25rem;
  color: #1a1a1a;
  font-size: 0.97rem;
  line-height: 1.5;
  font-weight: 600;
  transition:
    color 0.22s ease,
    transform 0.22s ease;

  svg {
    transition: transform 0.22s ease;
  }

  &:hover {
    color: #d51f26;
    transform: translateX(1px);
  }

  &:hover svg {
    transform: translate(1px, -1px);
  }
`;

export const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.15rem;
  border-top: 1px solid rgba(255, 255, 255, 0.72);

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BottomText = styled.p`
  margin: 0;
  color: #6d6761;
  font-size: 0.88rem;
  line-height: 1.5;
`;
