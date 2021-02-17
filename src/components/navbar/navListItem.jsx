import { Component } from "react";

class NavListItem extends Component {
  render() {
    return (
      <li>
        <a
          route={this.props.route}
          refprop={this.props.refprop}
          onClick={(e) =>
            this.props.callback(e, this.props.refprop.current, this.props.route)
          }
          className={
            this.props.className +
            (this.props.active === this.props.route
              ? " b pb1 bb bw2 b--white-50"
              : "")
          }
        >
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default NavListItem;
