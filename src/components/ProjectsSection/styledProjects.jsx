import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 5.5rem 0 6rem;
  background:
    linear-gradient(180deg, #f4f0ea 0%, #efe9e1 100%),
    radial-gradient(
      circle at top left,
      rgba(213, 31, 38, 0.04),
      transparent 24%
    );

  @media (max-width: 992px) {
    padding: 4.5rem 0 5rem;
  }
`;

export const Container = styled.div`
  width: min(1320px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 760px;
  margin: 0 auto 3.2rem;
  text-align: center;
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
  box-shadow:
    0 8px 18px rgba(18, 18, 18, 0.035),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
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

export const Accent = styled.span`
  color: #d51f26;
  text-shadow: 0 0 18px rgba(213, 31, 38, 0.12);
`;

export const Text = styled.p`
  margin: 1rem auto 0;
  max-width: 58ch;
  font-size: clamp(1rem, 1.3vw, 1.08rem);
  line-height: 1.8;
  color: #625d57;
  text-align: center;
`;

export const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedCard = styled.article`
  min-height: 400px;

  @media (max-width: 820px) {
    min-height: 300px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.article`
  min-height: 280px;

  @media (max-width: 1100px) {
    min-height: 260px;
  }

  @media (max-width: 700px) {
    min-height: 260px;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  background: #e9e1d8;
  box-shadow:
    0 18px 36px rgba(18, 18, 18, 0.06),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0 24px 46px rgba(18, 18, 18, 0.08),
      0 0 20px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.78) inset;
  }

  &:hover img {
    transform: scale(1.015);
  }

  &:hover svg {
    transform: translate(1px, -1px);
    color: #d51f26;
  }

  @media (max-width: 700px) {
    border-radius: 24px;
  }
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $position }) => $position || "center center"};
  transition: transform 0.45s ease;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(12, 12, 12, 0.08) 0%,
      rgba(12, 12, 12, 0.28) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02));
`;

export const CardTop = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const CategoryPill = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  max-width: calc(100% - 48px);
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.88);
  color: #1a1a1a;
  font-size: 0.8rem;
  font-weight: 650;
  letter-spacing: -0.01em;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 8px 18px rgba(18, 18, 18, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
`;

export const CardArrow = styled.div`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.88);
  color: #1f1f1f;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 8px 18px rgba(18, 18, 18, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;

  svg {
    transition:
      transform 0.22s ease,
      color 0.22s ease;
  }
`;

export const CardBottom = styled.div`
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  padding: 1rem 1.05rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow:
    0 12px 24px rgba(18, 18, 18, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #171717;
`;
