import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from "../utils/colors";

const StyledProfileDetails = styled.div`
  width: 350px;
`;

const StyledProperty = styled.div`
  display: flex;
  margin-bottom: 0.5em;

  .profile-prop {
    font-weight: bold;
    text-align: left;
    flex: 0.6;
    color: ${colors.grey03};
  }

  .profile-prop-value {
    text-align: left;
    flex: 1;
    color: ${colors.grey01};
    font-weight: bold;
  }
`;

/**
 * Convert camelcase to multi words with capitalized first char
 * @param {*} propertyName
 * @returns
 */
const getDisplayPropName = (propertyName) => {
  let propName = propertyName.replace(/([A-Z])/g, " $1").toLowerCase();
  return propName[0].toUpperCase() + propName.substring(1);
};

const propTypes = {
  profile: PropTypes.object
};

const defaultProps = {
  profile: {},
};

const ProfileDetails = ({ profile }) => {
  const profilePropertyPairs = Object.entries(profile);

  return (
    <StyledProfileDetails>
      {profilePropertyPairs.map((propertyPair) => {
        return (
          propertyPair[0] !== "avatarImage" && (
            <StyledProperty>
              <div className="profile-prop">
                {getDisplayPropName(propertyPair[0])}
              </div>
              <div className="profile-prop-value">{propertyPair[1]}</div>
            </StyledProperty>
          )
        );
      })}
    </StyledProfileDetails>
  );
};

ProfileDetails.propTypes = propTypes;
ProfileDetails.defaultProps = defaultProps;

export default ProfileDetails;
