import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>

            <FooterLink href="/visi">Vision</FooterLink>
            <FooterLink href="/faq">FAQs</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/api">API</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/teams">Teams</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h3
        style={{
          color: "white",
          fontSize: "25px",
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "-49px",
        }}
      >
        CaRik{" "}
        <span style={{ color: "white", marginLeft: "10px" }}>&#169; 2021</span>
      </h3>
    </Box>
  );
};
export default Footer;
