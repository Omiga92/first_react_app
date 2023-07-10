import React, { Component } from "react";
import axios from "axios";
import { ProfileSkillsSection, ProfileDiv, ProfileList, ProfileItem, ProfileItemSpan, SkillsSection, SkillsDesc, SkillsBar, SkillsBarTitle, SkillsBarPerc, SkillsBarParent, SkillsBarParentSpan, ProfileSkillsTitle, ProfileSkillsSpan } from "./style.js";

class Profile extends Component {

    state = {
        profile: [],
        skills: []
    };

    componentDidMount() {
        axios.get("js/data.json").then((res) => {
            this.setState({
                profile: res.data.profile,
                skills: res.data.skills
            });
        });
    }

    render() {

        const ProfileItems = this.state.profile;

        const TheProfile = ProfileItems.map((item) => {
            return (
                <ProfileItem key={ item.id }>
                    <ProfileItemSpan>{ item.dataName }</ProfileItemSpan>
                    { item.data }
                </ProfileItem>
            );
        });

        const SkillsItems = this.state.skills;

        const TheSkills = SkillsItems.map((item) => {
            return (
                <SkillsBar key={ item.id }>
                    <SkillsBarTitle>{ item.skill }</SkillsBarTitle>
                    <SkillsBarPerc>{ item.pers }</SkillsBarPerc>
                    <SkillsBarParent>
                        <SkillsBarParentSpan style={ { width: item.pers } } ></SkillsBarParentSpan>
                    </SkillsBarParent>
                </SkillsBar>
            );
        });

        return (
            <ProfileSkillsSection>
                <div className="container">
                    <ProfileDiv>
                        <ProfileSkillsTitle><ProfileSkillsSpan>My </ProfileSkillsSpan>Profile</ProfileSkillsTitle>
                        <ProfileList>
                            { TheProfile }
                        </ProfileList>
                    </ProfileDiv>

                    <SkillsSection>
                        <ProfileSkillsTitle>Some <ProfileSkillsSpan>skills</ProfileSkillsSpan></ProfileSkillsTitle>
                        <SkillsDesc>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                        </SkillsDesc>
                        { TheSkills }

                    </SkillsSection>

                </div>
            </ProfileSkillsSection>
        );
    }

};

export default Profile;