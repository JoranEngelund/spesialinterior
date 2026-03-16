import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 6.4rem 0 5.5rem;
  background:
    radial-gradient(
      circle at top left,
      rgba(213, 31, 38, 0.05),
      transparent 24%
    ),
    radial-gradient(
      circle at 90% 10%,
      rgba(255, 255, 255, 0.72),
      transparent 18%
    ),
    linear-gradient(180deg, #faf8f5 0%, #f2eee8 100%);

  @media (max-width: 992px) {
    padding: 5.8rem 0 4.25rem;
  }
`;

export const GlowOne = styled.div`
  position: absolute;
  top: -120px;
  left: -100px;
  width: 280px;
  height: 280px;
  border-radius: 999px;
  background: rgba(213, 31, 38, 0.08);
  filter: blur(82px);
  pointer-events: none;
`;

export const GlowTwo = styled.div`
  position: absolute;
  right: -130px;
  top: 100px;
  width: 320px;
  height: 320px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  filter: blur(95px);
  pointer-events: none;
`;

export const Container = styled.div`
  width: min(1320px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 2rem;
  align-items: center;
  min-height: calc(100vh - 110px);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 2.2rem;
  }
`;

export const CopyColumn = styled.div`
  max-width: 620px;
  padding-right: 0.5rem;

  @media (max-width: 1100px) {
    max-width: 760px;
    padding-right: 0;
  }
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.74);
  box-shadow:
    0 8px 24px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.68) inset;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #6d6761;
  font-size: 0.86rem;
  font-weight: 650;
  letter-spacing: -0.01em;
`;

export const Title = styled.h1`
  margin: 1.25rem 0 0;
  font-size: clamp(3.2rem, 6vw, 6.5rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
  font-weight: 700;
  color: #141414;
  max-width: 9ch;

  @media (max-width: 1100px) {
    max-width: 12ch;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.8rem, 12vw, 4.8rem);
  }
`;

export const Accent = styled.span`
  color: #d51f26;
  text-shadow: 0 0 22px rgba(213, 31, 38, 0.12);
`;

export const Description = styled.p`
  max-width: 620px;
  margin: 1.35rem 0 0;
  font-size: clamp(1.02rem, 1.4vw, 1.14rem);
  line-height: 1.8;
  color: #625d57;
  letter-spacing: -0.01em;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.6rem;
`;

export const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 52px;
  padding: 0.95rem 1.2rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  background: #171717;
  color: #ffffff;
  box-shadow: 0 12px 28px rgba(23, 23, 23, 0.14);

  &:hover {
    box-shadow: 0 18px 38px rgba(23, 23, 23, 0.18);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background: rgba(255, 255, 255, 0.68);
  color: #171717;
  border: 1px solid rgba(255, 255, 255, 0.84);
  box-shadow: 0 8px 24px rgba(20, 20, 20, 0.04);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
  margin-top: 2.2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  padding: 1rem 1rem 1.05rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.6) inset;
`;

export const InfoLabel = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8a837b;
`;

export const InfoValue = styled.div`
  margin-top: 0.5rem;
  color: #171717;
  font-size: 0.96rem;
  line-height: 1.55;
  font-weight: 650;
`;

export const VisualColumn = styled.div`
  position: relative;
`;

export const ImageShell = styled.div`
  position: relative;
  min-height: 820px;
  border-radius: 36px;
  overflow: hidden;
  background: #ece7df;
  box-shadow:
    0 20px 60px rgba(18, 18, 18, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.6) inset;

  @media (max-width: 1280px) {
    min-height: 700px;
  }

  @media (max-width: 1100px) {
    min-height: 580px;
  }

  @media (max-width: 576px) {
    min-height: 430px;
    border-radius: 26px;
  }
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(18, 18, 18, 0.12) 100%
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 42%
    );
`;

export const TopPill = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  max-width: calc(100% - 2.4rem);
  padding: 0.75rem 0.95rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 10px 26px rgba(18, 18, 18, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
  color: #171717;
  font-size: 0.9rem;
  font-weight: 650;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 0.82rem;
    padding: 0.65rem 0.85rem;
  }
`;

export const BottomPanel = styled.div`
  position: absolute;
  left: 1.2rem;
  right: 1.2rem;
  bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow:
    0 14px 34px rgba(18, 18, 18, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.68) inset;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 576px) {
    left: 0.85rem;
    right: 0.85rem;
    bottom: 0.85rem;
    border-radius: 20px;
  }
`;

export const BottomTextWrap = styled.div`
  max-width: 42ch;
`;

export const BottomLabel = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8a837b;
`;

export const BottomText = styled.p`
  margin: 0.45rem 0 0;
  color: #1d1d1d;
  font-size: 0.97rem;
  line-height: 1.6;
  font-weight: 600;
`;

export const BottomAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 46px;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  background: #171717;
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  white-space: nowrap;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(23, 23, 23, 0.16);
  }
`;
