import React from "react";
import { ContactSection, ContactTitle, Span, Form, FormInput, InputText, InputEmail, InputExp, Textarea, InputSubmit } from "./style.js";

const Contact = () => {

    const InputStyle = {
        width: "49%"
    };

    return (
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputText style={ InputStyle } placeholder="Your Name" />
                        <InputEmail style={ InputStyle } placeholder="Your Email" />
                    </FormInput>
                    <InputExp placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
    );
};

export default Contact;