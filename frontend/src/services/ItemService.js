import axios from "axios";

export function getItems() {
  return axios
    .get("http://localhost:8000/api/items/")
    .then((response) => response.data);
}

export function deleteItem(id) {
  return axios
    .delete("http://localhost:8000/api/items/" + id + "/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

export function addItem(item) {
  return axios
    .post("http://localhost:8000/api/items/", {
      name: item.name,
      description: item.description,
      quantity: item.quantity,
      unit_of_measure: item.unit_of_measure,
      price: item.price,
    })
    .then((response) => response.data);
}

export function updateItem(id, item) {
  return axios
    .put("http://localhost:8000/api/items/" + id + "/", {
      name: item.name,
      description: item.description,
      quantity: item.quantity,
      unit_of_measure: item.unit_of_measure,
      price: item.price,
    })
    .then((response) => response.data);
}
