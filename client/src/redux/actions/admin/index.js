import axios from "axios";
import { ADMIN_URL } from "../../../utils/constants";


export const AddJobType = async (newJob) => {
    try {
      await axios.put(ADMIN_URL, newJob);
      alert('El tipo de trabajo ha sido agregado')
    } catch (error) {
      console.log(error);
    }

}

export const deleteJobType = async (name) => {
    try {
      await axios.delete(ADMIN_URL, name);
      alert('El tipo de trabajo ha sido eliminado')
    } catch (error) {
      console.log(error);
    }
}


