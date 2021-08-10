import http from "../http-common";

class VehicleDataService {
  getAll() {
   
    return http.get(`vehicle`);
  }

  get(id) {
    return http.get(`vehicle/${id}`);
  }

  // find(query, by = "name") {
  //   return http.get(`vehicle?${by}=${query}`);
  // } 
  filter(searchType,searchString) {
   
    return http.get(`vehicle/filter/${searchType}/${searchString}`);
  
  } 
  createVehicle(data) {
    return http.post("vehicle/add", data);
  }

  updateVehicle(id,data) {
    return http.post(`vehicle/update/${id}`, data);
  }

  deleteVehicle(id) {
    return http.delete(`/vehicle/${id}`, {data:{Id: id}});
  }

  

}

export default new VehicleDataService();