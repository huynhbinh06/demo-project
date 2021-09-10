import {axiosClient} from './axiosClient';

const workShiftApi = {
  getAllWorkShifts: (start, end) => {
    const url = `/work-shifts?start_time=${start}&end_time=${end}&base_ids[]=3`;
    return axiosClient.get(url);
  },
  updateWorkShift: (id, params) => {
    const url = `/work-shifts/${id}/${params}`;
    return axiosClient.put(url);
  },
};

export default workShiftApi;
