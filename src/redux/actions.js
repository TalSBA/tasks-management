export function addAvailableField(field) {
  return (dispatch) => {
    dispatch({
      type: "ADD_AVAILABLE_FIELD",
      field,
    });
  };
}

export function removeAvailableField(selectedField) {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_AVAILABLE_FIELD",
      selectedField,
    });
  };
}

export function initialAvailableFields(fields) {
  return (dispatch) => {
    dispatch({
      type: "INITIAL_AVAILABLE_FIELDS",
      fields,
    });
  };
}

export function addCriteria(criteria) {
  return (dispatch) => {
    dispatch({
      type: "ADD_CRITERIA",
      criteria,
    });
  };
}
export function removeCriteria(id) {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_CRITERIA",
      id,
    });
  };
}

export function addFieldByID(id, field) {
  return (dispatch) => {
    dispatch({
      type: "ADD_FIELD_BY_ID",
      id,
      field,
    });
  };
}

export function addOperatorByID(id, operator) {
  return (dispatch) => {
    dispatch({
      type: "ADD_OPERATOR_BY_ID",
      id,
      operator,
    });
  };
}

export function addValuesByID(id, values) {
  return (dispatch) => {
    dispatch({
      type: "ADD_VALUES_BY_ID",
      id,
      values,
    });
  };
}

export function removeCriteriaWithUnavailableField(field) {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_CRITERIA_BY_FIELD",
      field,
    });
  };
}
