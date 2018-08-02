import React from "react";
import {
  Container,
  Button,
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./navbar.css";

export default class Navibar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <div id="nav">
        <Container className="alignItems">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto" />
            <Button
              href="tel:8008888888"
              className="contact"
              color="secondary"
              size="sm"
            >
              CALL TODAY 800-888-8888
            </Button>
            <Dropdown
              className="d-inline-block"
              onMouseOver={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle>
                <i className="fas fa-bars fa-2x" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/">
                  <i className="fas fa-home" />&nbsp;&nbsp;&nbsp;Home
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="about">
                  <i className="fas fa-users" />&nbsp;&nbsp;&nbsp;About
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="services">
                  <i className="fas fa-tooth" />&nbsp;&nbsp;&nbsp;Services
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="directions">
                  <i className="fas fa-map-marker" />&nbsp;&nbsp;&nbsp;Directions
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="contact">
                  <i className="fas fa-user" />&nbsp;&nbsp;&nbsp;Contact
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="login">
                  <i className="fas fa-sign-in-alt" />&nbsp;&nbsp;&nbsp;Login
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Navbar>
        </Container>
      </div>
    );
  }
}
