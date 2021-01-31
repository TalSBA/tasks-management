import React, { Component } from "react";
import Criteria from "./Criteria";
import * as Service from "./Service";
import * as Icon from "react-bootstrap-icons";

class Query extends Component {
  constructor() {
    super();
    this.state = {
      fields: [],
    };
  }

  //get fields and initialize available fields to all criterias
  componentDidMount() {
    this.getFields().then(() => {
      this.props.initialAvailableFields(this.state.fields);
    });
    this.props.addCriteria({
      id: 0,
      field: "",
      operator: "",
      values: "",
    });
  }

  async getFields() {
    let fields = await Service.getAllFields();
    this.setState({
      fields: fields.map((field) => {
        return { value: field, label: field };
      }),
    });
  }

  addCriteriaHandler() {
    this.props.addCriteria({
      id: "_" + Math.random().toString(36).substr(2, 9),
      field: "",
      operator: "",
      values: "",
    });
  }
  removeCriteriaClickHandler(index) {
    this.props.criterias.criterias.forEach((element) => {
      if (element.id === index) {
        this.props.addAvailableField(element.field);
      }
    });
    this.props.removeCriteria(index);
  }

  render() {
    return (
      <div className="query">
        <div id="criterias-container">
          <Criteria id={0} {...this.props} />
          {this.props.criterias.criterias.length > 1
            ? this.props.criterias.criterias.map((element) => {
                if (element.id !== 0) {
                  return (
                    <div key={element.id}>
                      <Criteria id={element.id} {...this.props} />
                      <Icon.X
                        className="btn-delete"
                        onClick={() =>
                          this.removeCriteriaClickHandler(element.id)
                        }
                      />
                    </div>
                  );
                }
              })
            : ""}
        </div>
        <div className="container">
          <button
            className="btn-add"
            onClick={this.addCriteriaHandler.bind(this)}
          ></button>
          <span className="add-text">Add Criteria</span>
          <button className="btn-search">Search</button>
        </div>
      </div>
    );
  }
}

export default Query;
