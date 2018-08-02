import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets all calendars from the DB
  getCalendarList: function(params) {
    return axios.get("/api/calendar", { params: filterParams(params) });
  },
  
};
