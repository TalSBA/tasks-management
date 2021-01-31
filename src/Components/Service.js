import {queryOptions} from "../data/mockedData";
import Field from "./Field";

export function getAllFields() {
  let fields = [];
  return new Promise((resolve, reject) => {
    queryOptions.map((opt) => {
      fields.push(opt.field);
    });
    resolve(fields);
  }).catch();
}

export function getOperatorsByField(selectedField) {
    let operators = null;
    return new Promise((resolve, reject) => {
      queryOptions.map((opt) => {
          if(opt.field == selectedField){
            operators = opt.operators;
          }
      });
      resolve(operators);
    }).catch();
}


export function getValuesByField(selectedField) {
    let values = null;
    return new Promise((resolve, reject) => {
      queryOptions.map((opt) => {
          if(opt.field == selectedField){
            values = opt.values;
          }
      });
      resolve(values);
    }).catch();
}