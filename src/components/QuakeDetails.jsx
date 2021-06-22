import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../utils/colors"

const StyledQuakeDetails = styled.div`
   display: flex;
   justify-content: center;
`;

const StyledContent = styled.div`
  width: 440px;
`;

const StyledPair = styled.div`
  display: flex;

  .quake-prop {
    text-transform: capitalize;
    font-weight: bold;
    text-align: left;
    flex: 1;
  }

  .quake-prop-value {
    text-align: left;
    flex: 3;
    color: ${colors.grey02};
    font-weight: bold;
  }
`;

const propTypes = {
  quake: PropTypes.object
};

const defaultProps = {
  quake: {}
};

const QuakeDetails = ({ quake }) => {
  const quakePropertyPairs = Object.entries(quake);

  return (
    <StyledQuakeDetails>
      <StyledContent>
        {quakePropertyPairs.map((propertyPair) => {
          return (
            <StyledPair>
              <div className="quake-prop">{propertyPair[0]}</div>
              <div className="quake-prop-value">{propertyPair[1]}</div>
            </StyledPair>
          );
        })}
      </StyledContent>
    </StyledQuakeDetails>
  );
};

QuakeDetails.propTypes = propTypes;
QuakeDetails.defaultProps = defaultProps;

export default QuakeDetails;
