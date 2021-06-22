import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import moment from "moment";
import colors from "../utils/colors";

const StyledQuakesTable = styled.div`
  display: flex;
  justify-content: center;

  th {
    font-weight: normal;
  }

  tbody {
    font-weight: bold;
  }
  
  .quake-title {
    text-align: left;
  }

  a:link {
    color:  ${colors.blue}
  }

  a:visited {
    color:  ${colors.purple}
  }
`;

const propTypes = {
  descending: PropTypes.bool,
  headers: PropTypes.array.isRequired,
  quakes: PropTypes.array,
  sortby: PropTypes.number,
  sortData: PropTypes.func.isRequired,
};

const defaultProps = {
  descending: false,
  quakes: [],
  sortby: null,
};

const QuakesTable = ({ descending, headers, quakes, sortby, sortData }) => {
  return (
    <StyledQuakesTable>
      <table>
        <thead onClick={(e) => sortData(e)}>
          <tr>
            {headers.map((header, key) => (
              <th key={key}>
                {sortby !== key
                  ? header
                  : descending
                  ? `${header}  \u2193`
                  : `${header}  \u2191`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {quakes.map((quake) => (
            <tr key={quake.code}>
              <td className="quake-title">
                <Link to={`/quake/${quake.code}`}>{quake.title}</Link>
              </td>
              <td>{quake.magnitude}</td>
              <td>{moment(quake.time).format("MMM DD, YYYY, HH:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledQuakesTable>
  );
};

QuakesTable.propTypes = propTypes;
QuakesTable.defaultProps = defaultProps;

export default QuakesTable;
