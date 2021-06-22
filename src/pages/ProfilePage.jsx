import React from "react";
import styled from "styled-components";
import ProfileDetails from "../components/ProfileDetails";
import data from "../data";
import colors from "../utils/colors"

const StyledProfilePage= styled.div`
  color: ${colors.grey03};
  text-align: center;

  .subtitle {
    font-size: 20px;
    font-weight: bold;
  }
`;

const StyledContentContainer = styled.div`
   display: flex;
   justify-content: center;
`;

const StyledContent = styled.div`
  display: flex;
  margin-bottom: .5em;

  .profile-prop {
    font-weight: bold;
    text-align: left;
    flex: .6;
  }

  .profile-prop-value {
    text-align: left;
    flex: 1;
    color: ${colors.grey02};
    font-weight: bold;
  }
`;

const StyledSectionContainer = styled.div`
  padding-right: 1em;
  img {
    height: 200px;
    width: 200px
  }
`;

const ProfilePage = () => {

  return (
    <StyledProfilePage>
      <p className="subtitle">Profile</p>
      <StyledContentContainer>
        <StyledContent>
        <StyledSectionContainer>
          <img alt="profile-avatar" src={data.profile.avatarImage} />
        </StyledSectionContainer>
        <ProfileDetails  profile={data.profile} />
        </StyledContent>
      </StyledContentContainer>
    </StyledProfilePage>
  );
};

export default ProfilePage;
