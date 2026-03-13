import styled, { css } from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1200;
  padding: 1rem 0 0;
  pointer-events: none;
`;

export const NavWrap = styled.div`
  width: min(1320px, calc(100% - 2rem));
  margin: 0 auto;
  pointer-events: auto;
`;

export const NavShell = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.25rem;
  min-height: ${({ $compact }) => ($compact ? "64px" : "78px")};
  padding: ${({ $compact }) =>
    $compact
      ? "0.55rem 0.75rem 0.55rem 0.9rem"
      : "0.75rem 0.9rem 0.75rem 1rem"};
  border-radius: ${({ $compact }) => ($compact ? "20px" : "24px")};
  transition:
    min-height 0.28s ease,
    padding 0.28s ease,
    border-radius 0.28s ease,
    background 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    backdrop-filter 0.28s ease,
    transform 0.28s ease;

  ${({ $scrolled, $compact }) =>
    $scrolled || $compact
      ? css`
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.84);
          box-shadow:
            0 18px 48px rgba(18, 18, 18, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.16),
            0 0 40px rgba(213, 31, 38, 0.08),
            0 1px 0 rgba(255, 255, 255, 0.7) inset;
          backdrop-filter: blur(22px) saturate(145%);
          -webkit-backdrop-filter: blur(22px) saturate(145%);
        `
      : css`
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.62);
          box-shadow:
            0 10px 30px rgba(18, 18, 18, 0.045),
            0 0 30px rgba(213, 31, 38, 0.05),
            0 1px 0 rgba(255, 255, 255, 0.62) inset;
          backdrop-filter: blur(16px) saturate(130%);
          -webkit-backdrop-filter: blur(16px) saturate(130%);
        `}

  @media (max-width: 992px) {
    grid-template-columns: auto auto;
    min-height: ${({ $compact }) => ($compact ? "58px" : "70px")};
    padding: ${({ $compact }) =>
      $compact
        ? "0.45rem 0.65rem 0.45rem 0.8rem"
        : "0.65rem 0.75rem 0.65rem 0.9rem"};
    border-radius: ${({ $compact }) => ($compact ? "18px" : "22px")};
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
`;

export const BrandLogo = styled.img`
  height: ${({ $compact }) => ($compact ? "32px" : "38px")};
  width: auto;
  object-fit: contain;
  transition: height 0.28s ease;

  @media (max-width: 576px) {
    height: ${({ $compact }) => ($compact ? "29px" : "34px")};
  }
`;

export const DesktopNav = styled.nav`
  justify-self: center;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 0 24px rgba(213, 31, 38, 0.035);
  transition:
    padding 0.28s ease,
    transform 0.28s ease,
    background 0.28s ease;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  color: #161616;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #111111;
    box-shadow:
      0 10px 24px rgba(25, 25, 25, 0.06),
      0 0 20px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.78) inset;
    transform: translateY(-1px);
  }

  &.active,
  &[aria-current="page"] {
    background: rgba(255, 255, 255, 0.96);
    color: #111111;
    box-shadow:
      0 10px 28px rgba(25, 25, 25, 0.08),
      0 0 24px rgba(213, 31, 38, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.82) inset;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownTrigger = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 44px;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: transparent;
  color: #161616;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover,
  &[aria-expanded="true"] {
    background: rgba(255, 255, 255, 0.9);
    color: #111111;
    box-shadow:
      0 10px 24px rgba(25, 25, 25, 0.06),
      0 0 20px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.78) inset;
    transform: translateY(-1px);
  }
`;

export const TriggerIcon = styled.span`
  display: inline-flex;
  transition: transform 0.24s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const DropdownSurface = styled.div`
  position: absolute;
  top: calc(100% + 0.9rem);
  left: 50%;
  transform: ${({ $open }) =>
    $open
      ? "translateX(-50%) translateY(0)"
      : "translateX(-50%) translateY(10px)"};
  width: 560px;
  padding: 0.7rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow:
    0 22px 60px rgba(18, 18, 18, 0.1),
    0 0 40px rgba(213, 31, 38, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.65) inset;
  backdrop-filter: blur(24px) saturate(145%);
  -webkit-backdrop-filter: blur(24px) saturate(145%);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    opacity 0.22s ease,
    transform 0.22s ease,
    visibility 0.22s ease;

  @media (max-width: 1200px) {
    width: 500px;
  }
`;

export const DropdownGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
`;

export const DropdownCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  min-height: 112px;
  padding: 1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.46);
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.84);
    border-color: rgba(255, 255, 255, 0.92);
    box-shadow:
      0 14px 32px rgba(20, 20, 20, 0.06),
      0 0 24px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.65) inset;
  }

  &:hover svg {
    transform: translateX(2px);
    color: #d51f26;
  }
`;

export const DropdownTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: #7b7670;
    transition:
      transform 0.22s ease,
      color 0.22s ease;
  }
`;

export const DropdownTitle = styled.div`
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #171717;
`;

export const DropdownDescription = styled.p`
  margin: 0;
  max-width: 26ch;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #66615c;
`;

export const RightCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
`;

export const CtaButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 46px;
  padding: 0.9rem 1.05rem;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.96) 0%,
    rgba(248, 248, 248, 0.9) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.9);
  color: #151515;
  font-size: 0.94rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  box-shadow:
    0 10px 30px rgba(18, 18, 18, 0.08),
    0 0 24px rgba(213, 31, 38, 0.06),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease;

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(213, 31, 38, 0.35),
      rgba(255, 255, 255, 0.2),
      rgba(213, 31, 38, 0.18)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    color: #d51f26;
    box-shadow:
      0 16px 42px rgba(18, 18, 18, 0.1),
      0 0 28px rgba(213, 31, 38, 0.08),
      0 1px 0 rgba(255, 255, 255, 0.8) inset;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileToggle = styled.button`
  display: none;
  width: 46px;
  height: 46px;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.92);
  color: #181818;
  box-shadow:
    0 10px 24px rgba(20, 20, 20, 0.07),
    0 0 20px rgba(213, 31, 38, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    box-shadow 0.22s ease;

  svg {
    width: 19px;
    height: 19px;
    transform: translateY(0.5px);
  }

  &:hover,
  &:active,
  &[aria-expanded="true"] {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.94);
    box-shadow:
      0 14px 30px rgba(20, 20, 20, 0.1),
      0 0 24px rgba(213, 31, 38, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.8) inset;
  }

  @media (max-width: 992px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

export const MobileSheet = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
    width: min(1320px, calc(100% - 2rem));
    margin: 0.75rem auto 0;
    max-height: ${({ $open }) => ($open ? "85vh" : "0")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    overflow: hidden;
    transition:
      max-height 0.28s ease,
      opacity 0.24s ease;
  }
`;

export const MobilePanel = styled.div`
  padding: 0.8rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow:
    0 20px 55px rgba(18, 18, 18, 0.08),
    0 0 32px rgba(213, 31, 38, 0.07),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
  backdrop-filter: blur(22px) saturate(135%);
  -webkit-backdrop-filter: blur(22px) saturate(135%);
`;

export const MobileLink = styled.a`
  display: flex;
  align-items: center;
  min-height: 54px;
  padding: 0.95rem 1rem;
  border-radius: 18px;
  color: #171717;
  font-size: 1rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s ease;

  &:hover,
  &:active {
    background: rgba(255, 255, 255, 0.9);
    color: #111111;
    box-shadow:
      0 8px 20px rgba(20, 20, 20, 0.05),
      0 0 18px rgba(213, 31, 38, 0.04),
      0 1px 0 rgba(255, 255, 255, 0.7) inset;
    transform: translateX(1px);
  }

  &.active {
    background: rgba(255, 255, 255, 0.96);
    color: #111111;
    box-shadow:
      0 10px 24px rgba(20, 20, 20, 0.06),
      0 0 20px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.78) inset;
  }
`;

export const MobileDisclosure = styled.div`
  margin: 0.1rem 0;
`;

export const MobileDisclosureButton = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 54px;
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: transparent;
  color: #171717;
  font-size: 1rem;
  font-weight: 650;
  letter-spacing: -0.015em;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s ease;

  &:hover,
  &:active,
  &[aria-expanded="true"] {
    background: rgba(255, 255, 255, 0.9);
    color: #111111;
    box-shadow:
      0 8px 20px rgba(20, 20, 20, 0.05),
      0 0 18px rgba(213, 31, 38, 0.04),
      0 1px 0 rgba(255, 255, 255, 0.7) inset;
  }
`;

export const MobileDisclosurePanel = styled.div`
  max-height: ${({ $open }) => ($open ? "420px" : "0")};
  overflow: hidden;
  transition: max-height 0.28s ease;
`;

export const MobileSubLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0.35rem 0 0.35rem 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.54);
  border: 1px solid rgba(255, 255, 255, 0.64);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    color 0.22s ease,
    box-shadow 0.22s ease;

  span {
    color: #1a1a1a;
    font-size: 0.96rem;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  small {
    color: #6b655f;
    font-size: 0.84rem;
    line-height: 1.45;
  }

  &:hover,
  &:active {
    transform: translateX(2px);
    background: rgba(255, 255, 255, 0.86);
    box-shadow:
      0 8px 20px rgba(20, 20, 20, 0.05),
      0 0 18px rgba(213, 31, 38, 0.04),
      0 1px 0 rgba(255, 255, 255, 0.72) inset;

    span {
      color: #111111;
    }
  }

  &.active {
    background: rgba(255, 255, 255, 0.94);
    box-shadow:
      0 10px 24px rgba(20, 20, 20, 0.06),
      0 0 20px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.78) inset;
  }
`;

export const MobileCta = styled.a`
  margin-top: 0.8rem;
  width: 100%;
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(246, 246, 246, 0.94) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.9);
  color: #151515;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  box-shadow:
    0 12px 30px rgba(18, 18, 18, 0.08),
    0 0 20px rgba(213, 31, 38, 0.05),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    color: #d51f26;
    box-shadow:
      0 16px 38px rgba(18, 18, 18, 0.1),
      0 0 24px rgba(213, 31, 38, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.78) inset;
  }
`;
