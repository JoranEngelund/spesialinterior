import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarWrapper = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(244, 240, 234, 0.82)" : "rgba(244, 240, 234, 0.42)"};

  border-bottom: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.38)"};

  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? "18px" : "10px")})
    saturate(140%);
  -webkit-backdrop-filter: blur(
      ${({ $scrolled }) => ($scrolled ? "18px" : "10px")}
    )
    saturate(140%);

  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0 12px 32px rgba(18, 18, 18, 0.08), 0 0 24px rgba(213, 31, 38, 0.05)"
      : "none"};

  .navbar-brand {
    display: inline-flex;
    align-items: center;
    padding: 0;
    margin-right: 1rem;
  }

  .navbar-collapse {
    justify-content: space-between;
  }

  .navbar-toggler {
    border: none;
    padding: 0;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      transform 0.22s ease,
      background 0.22s ease,
      box-shadow 0.22s ease;
    margin-left: auto;
  }

  .navbar-toggler:hover {
    transform: translateY(-1px);
  }

  .navbar-toggler:focus {
    outline: none;
  }

  @media (max-width: 991.98px) {
    padding: 0.9rem 1rem;

    .navbar-toggler {
      display: inline-flex;
    }

    .navbar-collapse {
      padding: 0.8rem;
    }
  }

  @media (min-width: 992px) {
    .navbar-toggler {
      display: none;
    }
  }
`;

export const BrandLogo = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;

  @media (max-width: 576px) {
    height: 32px;
  }
`;

export const NavMenu = styled(Nav)`
  align-items: center;
  gap: 0.45rem;

  @media (max-width: 991.98px) {
    align-items: stretch;
    gap: 0.45rem;
    margin-top: 0.25rem;
  }
`;

export const NavItem = styled.a`
  position: relative;
  color: rgba(23, 23, 23, 0.78);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.97rem;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  transition: all 0.22s ease;

  &:hover {
    color: #171717;
    background: rgba(255, 255, 255, 0.62);
  }

  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

export const StyledDropdown = styled(NavDropdown)`
  .nav-link {
    color: rgba(23, 23, 23, 0.78) !important;
    font-weight: 600;
    font-size: 0.97rem;
    padding: 0.8rem 1rem !important;
    border-radius: 14px;
    transition: all 0.22s ease;
  }

  .nav-link:hover,
  .nav-link:focus,
  &.show .nav-link {
    color: #171717 !important;
    background: rgba(255, 255, 255, 0.62);
  }

  .dropdown-menu {
    min-width: 320px;
    padding: 0.55rem;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.88);
    background: rgba(255, 255, 255, 0.82);
    box-shadow:
      0 18px 36px rgba(18, 18, 18, 0.08),
      0 0 24px rgba(213, 31, 38, 0.05),
      0 1px 0 rgba(255, 255, 255, 0.72) inset;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .dropdown-divider {
    margin: 0.4rem 0;
    border-color: rgba(23, 23, 23, 0.08);
  }

  @media (max-width: 991.98px) {
    width: 100%;

    .nav-link {
      width: 100%;
    }

    .dropdown-menu {
      min-width: unset;
      width: 100%;
      margin-top: 0.35rem;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.58);
    }
  }
`;

export const StyledDropdownItem = styled(NavDropdown.Item)`
  display: block;
  padding: 0.8rem 0.9rem;
  border-radius: 16px;
  transition:
    background 0.22s ease,
    transform 0.22s ease;

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.86);
    transform: translateX(2px);
  }

  &:active {
    background: rgba(255, 255, 255, 0.92);
  }
`;

export const DropdownItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
`;

export const DropdownItemLabel = styled.div`
  color: #171717;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.015em;
`;

export const DropdownItemDescription = styled.div`
  color: #6a645e;
  font-size: 0.84rem;
  line-height: 1.45;
`;

export const ToggleLines = styled.div`
  position: relative;
  width: 22px;
  height: 16px;

  span {
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: #171717;
    transition:
      transform 0.28s ease,
      top 0.28s ease,
      opacity 0.2s ease,
      width 0.28s ease;
    transform-origin: center;
  }

  span:nth-child(1) {
    top: ${({ $expanded }) => ($expanded ? "6px" : "0px")};
    transform: ${({ $expanded }) =>
      $expanded ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    top: 6px;
    opacity: ${({ $expanded }) => ($expanded ? 0 : 1)};
    transform: ${({ $expanded }) => ($expanded ? "scaleX(0.4)" : "scaleX(1)")};
  }

  span:nth-child(3) {
    top: ${({ $expanded }) => ($expanded ? "6px" : "12px")};
    transform: ${({ $expanded }) =>
      $expanded ? "rotate(-45deg)" : "rotate(0)"};
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  @media (max-width: 991.98px) {
    display: none;
  }
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  color: #171717;
  font-weight: 700;
  font-size: 0.94rem;
  letter-spacing: -0.015em;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(255, 255, 255, 0.88);
  box-shadow:
    0 10px 24px rgba(18, 18, 18, 0.06),
    0 0 18px rgba(213, 31, 38, 0.04),
    0 1px 0 rgba(255, 255, 255, 0.72) inset;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    color 0.22s ease;

  &:hover {
    transform: translateY(-1px);
    color: #d51f26;
    box-shadow:
      0 14px 28px rgba(18, 18, 18, 0.08),
      0 0 20px rgba(213, 31, 38, 0.06),
      0 1px 0 rgba(255, 255, 255, 0.76) inset;
  }
`;
