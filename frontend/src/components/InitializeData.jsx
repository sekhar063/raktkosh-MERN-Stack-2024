import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
// import { fetchStatusActions } from "../store/fetchStatusSlice";
import { dataActions } from "../store/dataSlice";
import { publicURL } from "../utils/Url";

const InitializeData = () => {
  // const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  const fetchCamps = async () => {
    await Axios.get(`${publicURL}/blood-camps`)
      .then(({ data }) => {
        console.log(data);
        // dispatch(fetchStatusActions.markFetchDone());
        // dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(dataActions.addCampData(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchForms = async () => {
    await Axios.get(`${publicURL}/totalbloodform`)
      .then(({ data }) => {
        console.log(data);
        dispatch(dataActions.addFormData(data));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // if (fetchStatus.fetchDone) return;
    // dispatch(fetchStatusActions.markFetchingStarted());
    fetchCamps();
    fetchForms();
  }, []);
  return <></>;
};

export default InitializeData;
