import React, { Component } from "react";
import Field from "./Field";
import Operator from "./Operator";
import Value from "./Value";
import * as Service from "./Service";

class Criteria extends Component {
  constructor() {
    super();
    this.state = {
      operators: [],
      values: [],
      selectedOperator: "",
    };
  }

  setOperatorsAndValues(selectedField) {
    this.getOperatorsByField(selectedField);
    this.getValuesByField(selectedField);
  }
  async getOperatorsByField(selectedField) {
    console.log("criterias", this.props.criterias.criterias);
    console.log("id", this.props.id);

    this.props.criterias.criterias.map((element)=>{
        if(element.id === this.props.id){
            element.operator = "";
        }
    })
    let operators = await Service.getOperatorsByField(selectedField.value);
    this.setState({
      operators: operators.map((operator) => {
        return { value: operator, label: operator };
      }),
    });
  }

  async getValuesByField(selectedField) {
    this.props.criterias.criterias.map((element)=>{
        if(element.id === this.props.id){
            element.values = "";
        }
    })
    let values = await Service.getValuesByField(selectedField.value);
    this.setState({
      values: values.map((value) => {
        return { value: value, label: value };
      }),
    });
  }
  operatorSelected(operator) {
    this.setState({ selectedOperator: operator });
  }
  render() {
    return (
      <div className="container">
        <Field
          {...this.props}
          fieldSelected={this.setOperatorsAndValues.bind(this)}
        />
        <Operator
          {...this.props}
          onSelectOperator={this.operatorSelected.bind(this)}
          operators={this.state.operators}
        />
        <Value
          {...this.props}
          values={this.state.values}
          selectedOperator={this.state.selectedOperator}
        />
      </div>
    );
  }
}

export default Criteria;
