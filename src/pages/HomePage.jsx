import React, { useState } from "react";
import styled from "styled-components";
import QuakesTable from "../components/QuakesTable";
import data from "../data";
import colors from "../utils/colors"

const StyledHomePage = styled.div`
  text-align: center;
  color: ${colors.grey03};

  .subtitle {
    font-size: 20px;
    font-weight: bold;
  }
`;

const headers = ["Title", "Magnitude", "Time"];

const getQuakesDisplayData = () => {
  return data.data.features.map((feature) => {
    return {
      title: feature.properties.place,
      magnitude: feature.properties.mag,
      time: feature.properties.time,
      code: feature.properties.code,
    }
  });
};

const HomePage = () => {
 
  const [sortedData, setSortedData] = useState(getQuakesDisplayData());
  const [sortby, setSortby] = useState(null);
  const [descending, setDecending] = useState(false);

  const sortData = (e) => {
    const columnIdx = e.target.cellIndex;
    const column = headers[columnIdx].toLowerCase();
    var data = sortedData.slice();
    const isDescending = sortby === columnIdx && !descending;
    data.sort((a, b) => {
      return isDescending
        ? a[column] < b[column] ? 1 : -1
        : a[column] > b[column] ? 1 : -1;
    });
    setSortedData(data);
    setSortby(columnIdx);
    setDecending(isDescending);
  };

  return (
    <StyledHomePage>
      <p className="subtitle">{data.data.metadata.title}</p>
      <QuakesTable
        descending={descending}
        headers={headers}
        quakes={sortedData}
        sortby={sortby}
        sortData={sortData}
      />
    </StyledHomePage>
  );
};

export default HomePage;
