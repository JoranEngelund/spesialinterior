import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 5rem 0 6rem;
  background: #f4f0ea;

  @media (max-width: 992px) {
    padding: 4rem 0 4.5rem;
  }
`;

export const Container = styled.div`
  width: min(1320px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 760px;
  margin: 0 auto 3.4rem;
  text-align: center;
`;

export const Accent = styled.span`
  color: #d51f26;
  text-shadow: 0 0 18px rgba(213, 31, 38, 0.12);
`;

export const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.84);
  color: #6e6862;
  font-size: 0.82rem;
  font-weight: 650;
  letter-spacing: -0.01em;
`;

export const Title = styled.h2`
  margin: 1rem auto 0;
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
  font-weight: 700;
  color: #141414;
  max-width: 12ch;
`;

export const Text = styled.p`
  margin: 1rem auto 0;
  max-width: 58ch;
  font-size: clamp(1rem, 1.3vw, 1.08rem);
  line-height: 1.8;
  color: #625d57;
  text-align: center;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    circle at top right,
    rgba(213, 31, 38, 0.08),
    transparent 28%
  );
  opacity: 0;
  transition: opacity 0.25s ease;
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const CardArrow = styled.div`
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.84);
  color: #7a746d;
  box-shadow:
    0 6px 16px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
  transition:
    transform 0.22s ease,
    color 0.22s ease,
    background 0.22s ease,
    box-shadow 0.22s ease;

  svg {
    transition: transform 0.22s ease;
  }
`;

export const SpecialtyTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
`;

export const SpecialtyArrow = styled.div`
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(255, 255, 255, 0.84);
  color: #7a746d;
  box-shadow:
    0 6px 16px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
  transition:
    transform 0.22s ease,
    color 0.22s ease,
    background 0.22s ease,
    box-shadow 0.22s ease;

  svg {
    transition: transform 0.22s ease;
  }
`;

export const IconWrap = styled.div`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: ${({ $soft }) =>
    $soft ? "rgba(255, 255, 255, 0.88)" : "rgba(255, 255, 255, 0.82)"};
  border: 1px solid rgba(255, 255, 255, 0.9);
  color: #d51f26;
  flex-shrink: 0;
  box-shadow:
    0 8px 18px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
`;

export const ServiceCard = styled.div`
  position: relative;
  min-height: 126px;
  padding: 1rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.86);
  box-shadow:
    0 12px 28px rgba(18, 18, 18, 0.045),
    0 1px 0 rgba(255, 255, 255, 0.68) inset;
  overflow: hidden;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.92);
    box-shadow:
      0 18px 34px rgba(18, 18, 18, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.76) inset;
  }

  &:hover ${CardGlow} {
    opacity: 1;
  }

  &:hover ${CardArrow} {
    color: #d51f26;
    background: rgba(255, 255, 255, 0.9);
    box-shadow:
      0 8px 18px rgba(18, 18, 18, 0.05),
      0 0 18px rgba(213, 31, 38, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.75) inset;
  }

  &:hover ${CardArrow} svg {
    transform: translate(1px, -1px);
  }
`;

export const ServiceTitle = styled.h3`
  margin: 1rem 0 0;
  max-width: 16ch;
  font-size: 1rem;
  line-height: 1.35;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #171717;
`;

export const SpecialtiesBlock = styled.div`
  margin-top: 3.5rem;
`;

export const SpecialtiesHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 2rem;
  text-align: center;
`;

export const SpecialtiesKicker = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.84);
  color: #6e6862;
  font-size: 0.8rem;
  font-weight: 650;
`;

export const SpecialtiesTitle = styled.h3`
  margin: 0.9rem auto 0;
  font-size: clamp(1.9rem, 3vw, 3rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: #141414;
  max-width: 12ch;
`;

export const SpecialtiesText = styled.p`
  margin: 1rem auto 0;
  max-width: 54ch;
  font-size: 1rem;
  line-height: 1.75;
  color: #625d57;
  text-align: center;
`;

export const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecialtyCard = styled.div`
  position: relative;
  min-height: 220px;
  padding: 1.2rem;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.86);
  box-shadow:
    0 12px 28px rgba(18, 18, 18, 0.045),
    0 1px 0 rgba(255, 255, 255, 0.68) inset;
  overflow: hidden;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.92);
    box-shadow:
      0 18px 34px rgba(18, 18, 18, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.74) inset;
  }

  &:hover ${CardGlow} {
    opacity: 1;
  }

  &:hover ${SpecialtyArrow} {
    color: #d51f26;
    background: rgba(255, 255, 255, 0.9);
    box-shadow:
      0 8px 18px rgba(18, 18, 18, 0.05),
      0 0 18px rgba(213, 31, 38, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.75) inset;
  }

  &:hover ${SpecialtyArrow} svg {
    transform: translate(1px, -1px);
  }
`;

export const SpecialtyTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

export const SpecialtyTitle = styled.h4`
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #171717;
`;

export const SpecialtyText = styled.p`
  margin: 0.95rem 0 0;
  font-size: 0.95rem;
  line-height: 1.72;
  color: #625d57;
  max-width: 48ch;
`;
