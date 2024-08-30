import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Customer</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="customer-name">Customer Name</Label>
              <Input
                type="text"
                id="customer-name"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Customer Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="customer-address">Address</Label>
              <Input
                type="text"
                id="customer-address"
                name="address"
                value={this.state.activeItem.address}
                onChange={this.handleChange}
                placeholder="Enter Customer address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone-number">Phone Number</Label>
              <Input
                type="text"
                id="phone-number"
                name="phone_number"
                value={this.state.activeItem.phone_number}
                onChange={this.handleChange}
                placeholder="Enter Customer Phone"
              />
            </FormGroup>
            <FormGroup>
              <Label for="creation">Creation</Label>
              <Input
                type="date"
                id="creation"
                name="creation"
                value={this.state.activeItem.creation}
                onChange={this.handleChange}
                placeholder="Enter Creation"
              />
            </FormGroup>
            <FormGroup>
              <Label for="created-by">Created by</Label>
              <Input
                type="number"
                id="created-by"
                name="created_by"
                value={this.state.activeItem.created_by}
                onChange={this.handleChange}
                placeholder="Enter Owner"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}