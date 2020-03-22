import React, { Component } from "react";

import ErrorCard from "../ErrorCard/ErrorCard";

export default class Result extends Component {
  render() {
    const { finalerrors, finalwarnings } = this.props.res;
    // console.log(finalerrors);
    // console.log(finalwarnings);
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>ERRORS:</h1>
        <hr />
        <h2>HTML ERRORS:</h2>
        {finalerrors.htmlError.length === 0 ? (
          <h5>No Html errors</h5>
        ) : (
          finalerrors.htmlError.map((error, i) =>
            error.map((e, j) => (
              <ErrorCard key={"html" + i + "= " + j} err={e} isWarn={false} />
            ))
          )
        )}
        <hr />
        <h2>CONTRAST ERRORS:</h2>
        {finalerrors.contrastError.length === 0 ? (
          <h5>No Contrast errors</h5>
        ) : (
          finalerrors.contrastError.map((error, i) => (
            <ErrorCard key={"contrast" + i} err={error} isWarn={false} />
          ))
        )}
        <hr />
        <h2>INTERACTION ERRORS:</h2>
        {finalerrors.interactionError.length === 0 ? (
          <h5>No interaction errors</h5>
        ) : (
          finalerrors.interactionError.map((error, i) =>
            error.map((e, j) => (
              <ErrorCard
                key={"interaction" + i + "= " + j}
                err={e}
                isWarn={false}
              />
            ))
          )
        )}
        <hr />
        <h2>ARIA ERRORS:</h2>
        {finalerrors.ariaError.length === 0 ? (
          <h5>No Aria errors</h5>
        ) : (
          finalerrors.ariaError.map((error, i) =>
            error.map((e, j) => (
              <ErrorCard key={"aria" + i + "= " + j} err={e} isWarn={false} />
            ))
          )
        )}
        <hr />
        <h1 style={{ textAlign: "center" }}>WARNINGS</h1>
        <hr />
        <h2>HTML WARNINGS:</h2>
        {finalwarnings.htmlWarning.length === 0 ? (
          <h5>No Html warnings</h5>
        ) : (
          finalwarnings.htmlWarning.map((warning, i) =>
            warning.map((e, j) => (
              <ErrorCard
                key={"html-warn" + i + "= " + j}
                err={e}
                isWarn={true}
              />
            ))
          )
        )}
        <hr />
        <h2>INTERACTION WARNINGS</h2>
        {finalwarnings.interactionWarning.length === 0 ? (
          <h5>No Ixnteraction warnings</h5>
        ) : (
          finalwarnings.interactionWarning.map((warning, i) =>
            warning.map((e, j) => (
              <ErrorCard
                key={"interaction-warn" + i + "= " + j}
                err={e}
                isWarn={true}
              />
            ))
          )
        )}
        <hr />
        <h2>ARIA WARNINGS</h2>
        {finalwarnings.ariaWarning.length === 0 ? (
          <h5>No Aria warnings</h5>
        ) : (
          finalwarnings.ariaWarning.map((warning, i) =>
            warning.map((e, j) => (
              <ErrorCard
                key={"aria-warn" + i + "= " + j}
                err={e}
                isWarn={true}
              />
            ))
          )
        )}
        <hr />
      </div>
    );
  }
}
