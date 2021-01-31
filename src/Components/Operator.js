import React, { Component } from "react";
import Select from "react-select";

class Operator extends Component {
  selectOperator(selectedOperator) {
    this.props.addOperatorByID(this.props.id, selectedOperator);
    this.props.onSelectOperator(selectedOperator);
  }
  render() {
    return (
      <Select
        className="select"
        options={this.props.operators}
        isDisabled={this.props.operators.length == 0 ? true : false}
        onChange={this.selectOperator.bind(this)}
        placeholder="Operator"
        value={this.props.criterias.criterias.map((criteria) => {
            if (criteria.id === this.props.id) return criteria.operator;
          })}
      />
    );
  }
}

export default Operator;
