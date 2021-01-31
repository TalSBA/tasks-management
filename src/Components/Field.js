import React, { Component } from "react";
import Select from "react-select";

class Field extends Component {
  constructor() {
    super();
    this.state = {
      currentField: null,
    };
  }

  createdBySelected(selectedValue) {
    return selectedValue.value === "Created By";
  }
  idSelected(selectedValue) {
    return selectedValue.value === "ID";
  }
  selectField(selectedField) {
    if (this.state.currentField != null) {
      if (this.state.currentField.value === "Created By") {
        this.props.addAvailableField({ value: "Team", label: "Team" });
      }
      if (this.state.currentField.value === "ID") {
        this.props.addAvailableField({ value: "Team", label: "Team" });
      }
    }
    if (selectedField.value === "Created By" || selectedField.value === "ID") {
      this.props.removeAvailableField({ value: "Team", label: "Team" });
    }
    //in case the selected fields was changed then we will add the prev selected back to available fields
    if (
      this.state.currentField !== null &&
      this.state.currentField.value !== selectedField.value
    ) {
      this.props.addAvailableField(this.state.currentField);
    }
    if(this.createdBySelected(selectedField) || this.idSelected(selectedField)){
        this.props.removeCriteriaWithUnavailableField({
            value: "Team",
            label: "Team",
          });
    }
    this.props.removeAvailableField(selectedField);
    this.setState({ currentField: selectedField });

    this.props.addFieldByID(this.props.id, selectedField);
    this.props.fieldSelected(selectedField);
  }
  render() {
    return (
      <Select
        className="select"
        options={this.props.availableFields.availableFields}
        onChange={this.selectField.bind(this)}
        placeholder="Field"
        value={this.props.criterias.criterias.map((criteria) => {
            if (criteria.id === this.props.id) return criteria.field;
          })}
      />
    );
  }
}

export default Field;
