import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import './MyFooter.css'


const MyFooter = () => {
    return (
        <div className='myFooter'>
            <Box>
                {/* <h1 style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "-50px"
                }}>
                    GeeksforGeeks: A Computer Science Portal for Geeks
                </h1> */}
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Home</FooterLink>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Rooms</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="#">07947419563</FooterLink>
                            <FooterLink href="#">radheshyammali1973@gmail.com</FooterLink>
                            {/* <FooterLink href="#">Coding</FooterLink>
                            <FooterLink href="#">Teaching</FooterLink> */}
                        </Column>
                        <Column>
                            {/* <Heading>Padmavati Resort</Heading> */}
                            {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
                            <FooterLink href="#">Ahemdabad</FooterLink>
                            <FooterLink href="#">Indore</FooterLink>
                            <FooterLink href="#">Mumbai</FooterLink> */}
                        </Column>
                        {/* <Column> */}
                            <Heading>Padmavati Resort</Heading>
                            {/* <FooterLink href="#"> */}
                                {/* <i className="fab fa-facebook-f"> */}
                                    {/* <span style={{ marginLeft: "10px" }}> */}
                                        {/* Facebook */}
                                    {/* </span> */}
                                {/* </i> */}
                            {/* </FooterLink> */}
                            {/* <FooterLink href="#"> */}
                                {/* <i className="fab fa-instagram"> */}
                                    {/* <span style={{ marginLeft: "10px" }}> */}
                                        {/* Instagram */}
                                    {/* </span> */}
                                {/* </i> */}
                            {/* </FooterLink> */}
                            {/* <FooterLink href="#"> */}
                                {/* <i className="fab fa-twitter"> */}
                                    {/* <span style={{ marginLeft: "10px" }}> */}
                                        {/* Twitter */}
                                    {/* </span> */}
                                {/* </i> */}
                            {/* </FooterLink> */}
                            {/* <FooterLink href="#"> */}
                                {/* <i className="fab fa-youtube"> */}
                                    {/* <span style={{ marginLeft: "10px" }}> */}
                                        {/* Youtube */}
                                    {/* </span> */}
                                {/* </i> */}
                            {/* </FooterLink> */}
                        {/* </Column> */}
                    </Row>
                </Container>
            </Box>
        </div>
    )
}

export default MyFooter
