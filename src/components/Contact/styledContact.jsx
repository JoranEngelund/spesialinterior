import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 5.5rem 0 6rem;
  background:
    radial-gradient(
      circle at top left,
      rgba(213, 31, 38, 0.045),
      transparent 22%
    ),
    radial-gradient(
      circle at 88% 20%,
      rgba(255, 255, 255, 0.65),
      transparent 18%
    ),
    linear-gradient(180deg, #f4f0ea 0%, #efe8de 100%);

  @media (max-width: 992px) {
    padding: 4.5rem 0 5rem;
  }
`;

export const GlowOne = styled.div`
  position: absolute;
  left: -120px;
  top: 120px;
  width: 280px;
  height: 280px;
  border-radius: 999px;
  background: rgba(213, 31, 38, 0.07);
  filter: blur(85px);
  pointer-events: none;
`;

export const GlowTwo = styled.div`
  position: absolute;
  right: -120px;
  bottom: 80px;
  width: 320px;
  height: 320px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.58);
  filter: blur(95px);
  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(1320px, calc(100% - 2rem));
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 760px;
  margin: 0 auto 3rem;
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
  font-size: clamp(2rem, 4vw, 3rem);
  margin-top: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.04em;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.84);
  box-shadow:
    0 16px 34px rgba(18, 18, 18, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
`;

export const InfoCardGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    circle at top right,
    rgba(213, 31, 38, 0.08),
    transparent 30%
  );
`;

export const InfoTitle = styled.h3`
  position: relative;
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #171717;
`;

export const InfoLead = styled.p`
  position: relative;
  margin: 0.85rem 0 0;
  max-width: 34ch;
  font-size: 0.98rem;
  line-height: 1.72;
  color: #625d57;
`;

export const InfoList = styled.div`
  position: relative;
  display: grid;
  gap: 0.95rem;
  margin-top: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.9rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.82);
  box-shadow:
    0 8px 20px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
`;

export const IconWrap = styled.div`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.9);
  color: #d51f26;
  flex-shrink: 0;
  box-shadow:
    0 8px 18px rgba(18, 18, 18, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-top: 0.15rem;

  strong {
    color: #171717;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  span,
  a {
    color: #625d57;
    font-size: 0.95rem;
    line-height: 1.55;
    text-decoration: none;
    transition: color 0.22s ease;
  }

  a:hover {
    color: #d51f26;
  }
`;

export const FormCard = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.86);
  box-shadow:
    0 18px 36px rgba(18, 18, 18, 0.05),
    0 0 24px rgba(213, 31, 38, 0.035),
    0 1px 0 rgba(255, 255, 255, 0.74) inset;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  overflow: hidden;
`;

export const FormCardGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(
    circle at top right,
    rgba(213, 31, 38, 0.08),
    transparent 30%
  );
`;

export const Form = styled.form`
  position: relative;
  display: grid;
  gap: 0.95rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.95rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #171717;
  font-size: 0.9rem;
  font-weight: 650;
  letter-spacing: -0.01em;
`;

const inputStyles = `
  width: 100%;
  min-height: 54px;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(222, 214, 205, 0.95);
  background: rgba(255, 255, 255, 0.88);
  color: #171717;
  font-size: 0.96rem;
  line-height: 1.4;
  box-shadow:
    0 6px 16px rgba(18, 18, 18, 0.03),
    0 1px 0 rgba(255, 255, 255, 0.75) inset;
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &::placeholder {
    color: #928b84;
  }

  &:focus {
    outline: none;
    border-color: rgba(213, 31, 38, 0.35);
    background: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 0 0 4px rgba(213, 31, 38, 0.08),
      0 8px 18px rgba(18, 18, 18, 0.04),
      0 1px 0 rgba(255, 255, 255, 0.8) inset;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Select = styled.select`
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid rgba(222, 214, 205, 0.95);
  background: rgba(255, 255, 255, 0.88);
  color: #171717;
  font-size: 0.96rem;
  line-height: 1.65;
  resize: vertical;
  min-height: 160px;
  box-shadow:
    0 6px 16px rgba(18, 18, 18, 0.03),
    0 1px 0 rgba(255, 255, 255, 0.75) inset;
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &::placeholder {
    color: #928b84;
  }

  &:focus {
    outline: none;
    border-color: rgba(213, 31, 38, 0.35);
    background: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 0 0 4px rgba(213, 31, 38, 0.08),
      0 8px 18px rgba(18, 18, 18, 0.04),
      0 1px 0 rgba(255, 255, 255, 0.8) inset;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.2rem;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 52px;
  padding: 0.95rem 1.2rem;
  border: 0;
  cursor: pointer;
  border-radius: 999px;
  background: #171717;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  box-shadow: 0 12px 28px rgba(23, 23, 23, 0.14);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 38px rgba(23, 23, 23, 0.18);
  }
`;

export const HelperText = styled.p`
  margin: 0;
  color: #7a736c;
  font-size: 0.9rem;
  line-height: 1.55;
`;
