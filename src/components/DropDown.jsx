import React from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DropDown() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="secondary" size="sm">Order</Button>

      <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" size="sm" />

      <Dropdown.Menu>
        <Dropdown.Item href="#">1</Dropdown.Item>
        <Dropdown.Item href="#">2</Dropdown.Item>
        <Dropdown.Item href="#">3</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">More</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}