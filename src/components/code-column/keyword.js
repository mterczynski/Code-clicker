import React from "react";

export class Keyword extends React.Component {
  render = () => (
    <img
      className="Keyword"
      style={{ left: this.props.left }}
      alt=""
      src={this.props.src}
    />
  );
}
