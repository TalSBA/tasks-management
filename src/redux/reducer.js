import { combineReducers, bindActionCreators } from "redux";

const initialState = {
  availableFields: [],
  criterias: [],
};

function availableFields(state = initialState, action) {
  switch (action.type) {
    case "ADD_AVAILABLE_FIELD":
      return {
        ...state,
        availableFields: state.availableFields.some(
          (field) => field.value === action.field.value
        )
          ? [...state.availableFields]
          : [...state.availableFields.concat(action.field)],
      };
    case "REMOVE_AVAILABLE_FIELD":
      return {
        availableFields: [
          ...state.availableFields.filter(
            (field) => field.value !== action.selectedField.value
          ),
        ],
      };
    case "INITIAL_AVAILABLE_FIELDS":
      return {
        ...state,
        availableFields: [
          ...action.fields.filter(
            (field) => field.value !== "ID" && field.value !== "State"
          ),
        ],
      };
    default:
      return state;
  }
}

function criterias(state = initialState, action) {
  switch (action.type) {
    case "ADD_CRITERIA":
      return {
        ...state,
        criterias: [...state.criterias.concat(action.criteria)],
      };
    case "REMOVE_CRITERIA":
      return {
        ...state,
        criterias: [...state.criterias.filter((el) => el.id !== action.id)],
      };
    case "ADD_FIELD_BY_ID":
      return {
        ...state,
        ...state.criterias.forEach((element) => {
          if (element.id == action.id) {
            element.field = action.field;
          }
        }),
      };
    case "ADD_OPERATOR_BY_ID":
      return {
        ...state,
        ...state.criterias.forEach((element) => {
          if (element.id == action.id) {
            element.operator = action.operator;
          }
        }),
      };
    case "ADD_VALUES_BY_ID":
      return {
        ...state,
        ...state.criterias.forEach((element) => {
          if (element.id == action.id) {
            element.values = action.values;
          }
        }),
      };
    case "REMOVE_CRITERIA_BY_FIELD":
      return {
        ...state,
        criterias: [
          ...state.criterias.filter(
            (el) => el.field.value !== action.field.value
          ),
        ],
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ availableFields, criterias });

export default rootReducer;
