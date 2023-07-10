import React, { Component } from "react";
import axios from "axios";
import { SocialMediaSection, Social, Icon, SocialDesc, Span, SpanInfo } from "./style.js";

class SocialMedia extends Component {

    state = {
        social: []
    };

    componentDidMount() {
        axios.get("js/data.json").then((res) => {
            this.setState({
                social: res.data.social
            });
        });
    }

    render() {

        const socials = this.state.social;

        const SocialItems = socials.map((item) => {
            return (
                <Social key={ item.id } style={ { background: item.background } }>
                    <Icon className={ item.icon }></Icon>
                    <SocialDesc>
                        <Span>{ item.title }</Span>
                        <SpanInfo>{ item.body }</SpanInfo>
                    </SocialDesc>
                </Social>
            );
        });

        return (
            <SocialMediaSection>

                { SocialItems }

            </SocialMediaSection>
        );
    }

};

export default SocialMedia;