import React from "react";
import styled from "styled-components";
import moment from 'moment';
import NotFoundPage from "./NotFoundPage";
import data from "../data";
import colors from "../utils/colors";
import QuakeDetails from "../components/QuakeDetails";

const StyledDetailPage = styled.div`
  color: ${colors.grey03};
  text-align: center;

  .subtitle {
    font-size: 20px;
    font-weight: bold;
    width: 440px;
  }
`;

const StyledQuakeSubHeader = styled.div`
   display: flex;
   justify-content: center;

   p {
     text-align: left;
   }
`;


const DetailPage = ({match}) => {
  const code = match.params.code;
  const quake = data.data.features.find(feature => feature.properties.code === code);

  if (!quake) return <NotFoundPage />

  const quakeObj = {
    title: quake.properties.title,
    magnitude: quake.properties.mag,
    time: moment(quake.properties.time).format('MMM DD, YYYY, HH:mm A'),
    status: quake.properties.status,
    tsunami: quake.properties.tsunami,
    type: quake.properties.type
  };

  return (
    <StyledDetailPage>
      <StyledQuakeSubHeader>
        <p className="subtitle">{quakeObj.title}</p>
      </StyledQuakeSubHeader>
      <QuakeDetails quake={quakeObj} />
    </StyledDetailPage>
  )
};

export default DetailPage;
