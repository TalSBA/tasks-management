import React, { Component } from "react";
import Select from "react-select";

class Value extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: null,
      currentMultiValues: null,
    };
  }

  addTeamFieldAfterRemoveIDIfNeeded() {
    let teamAllowed = true;
    this.props.criterias.criterias.map((criteria) => {
      if (criteria.field.value === "Created By") {
        teamAllowed = false;
      }
    });
    if (teamAllowed)
      this.props.addAvailableField({ value: "Team", label: "Team" });
  }

  selectedValueChanged(selectedValue) {
    return (
      this.state.currentValue !== null &&
      this.state.currentValue.value !== selectedValue.value
    );
  }

  backlogUnselected() {
    return this.state.currentValue.value === "Backlog";
  }
  backlogSelected(selectedValue) {
    return selectedValue.value === "Backlog";
  }
  bugUnselected() {
    return this.state.currentValue.value === "Bug";
  }
  bugSelected(selectedValue) {
    return selectedValue.value === "Bug";
  }

  onChangeValue(selectedValue) {
    if (this.selectedValueChanged(selectedValue)) {
      if (this.backlogUnselected()) {
        this.props.removeAvailableField({ value: "ID", label: "ID" });
        this.props.removeCriteriaWithUnavailableField({
          value: "ID",
          label: "ID",
        });
        this.addTeamFieldAfterRemoveIDIfNeeded();
      }
      if (this.bugUnselected()) {
        this.props.removeAvailableField({ value: "State", label: "State" });
        this.props.removeCriteriaWithUnavailableField({
          value: "State",
          label: "State",
        });
      }
    }
  }
  onSelectValue(selectedValue) {
    this.onChangeValue(selectedValue);

    if (this.backlogSelected(selectedValue)) {
      this.props.addAvailableField({ value: "ID", label: "ID" });
    }
    if (this.bugSelected(selectedValue)) {
      this.props.addAvailableField({ value: "State", label: "State" });
    }
    this.setState({ currentValue: selectedValue });
  }

  backlogUnselectedMulti(selectedValues) {
    return (
      this.state.currentMultiValues.some(
        (value) => value.value === "Backlog"
      ) && !selectedValues.some((value) => value.value === "Backlog")
    );
  }
  backlogSelectedMulti(selectedValues) {
    return selectedValues.some((value) => value.value === "Backlog");
  }
  bugUnselectedMulti(selectedValues) {
    return (
      this.state.currentMultiValues.some((value) => value.value === "Bug") &&
      !selectedValues.some((value) => value.value === "Bug")
    );
  }
  bugSelectedMulti(selectedValues) {
    return selectedValues.some((value) => value.value === "Bug");
  }

  onChangeValuesMultiChange(selectedValues) {
    if (this.state.currentMultiValues !== null) {
      if (this.backlogUnselectedMulti(selectedValues)) {
        this.props.removeAvailableField({ value: "ID", label: "ID" });
        this.props.removeCriteriaWithUnavailableField({
          value: "ID",
          label: "ID",
        });

        this.addTeamFieldAfterRemoveIDIfNeeded();
      }
      if (this.bugUnselectedMulti(selectedValues)) {
        this.props.removeAvailableField({ value: "State", label: "State" });
        this.props.removeCriteriaWithUnavailableField({
          value: "State",
          label: "State",
        });
      }
    }
  }
  onSelectedMultiValues(selectedValues) {
    this.onChangeValuesMultiChange(selectedValues);

    if (this.backlogSelectedMulti(selectedValues)) {
      this.props.addAvailableField({ value: "ID", label: "ID" });
    }
    if (this.bugSelectedMulti(selectedValues)) {
      this.props.addAvailableField({ value: "State", label: "State" });
    }
    this.setState({ currentMultiValues: selectedValues });
  }

  onSelect(values) {
    if (this.props.selectedOperator.value === "Equals") {
      this.onSelectValue(values);
    } else {
      this.onSelectedMultiValues(values);
    }

    this.props.addValuesByID(this.props.id, values);
  }

  render() {
    return (
      <Select
        className="select"
        options={this.props.values}
        isDisabled={this.props.values.length == 0 ? true : false}
        onChange={this.onSelect.bind(this)}
        placeholder="Value"
        isMulti={this.props.selectedOperator.value === "Equals" ? false : true}
      />
    );
  }
}

export default Value;
