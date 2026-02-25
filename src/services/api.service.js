// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName,
    email,
    password,
    phone,
  };
  return axios.post(URL_BACKEND, data);
};

const updateUserAPI = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id,
    fullName,
    phone,
  };
  return axios.put(URL_BACKEND, data);
};

const deleteUserAPI = (_id) => {
  const URL_BACKEND = `/api/v1/user/${_id}`;

  return axios.delete(URL_BACKEND);
};

const fetchAllUsersAPI = (current, pageSize) => {
  const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;

  return axios.get(URL_BACKEND);
};

const handleUploadFileAPI = (file, folder) => {
  const URL_BACKEND = "/api/v1/file/upload";

  let config = {
    headers: {
      "upload-type": folder,
      "content-type": "multipart/form-data",
    },
  };

  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);
  return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (_id, fullName, phone, avatar) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id,
    fullName,
    phone,
    avatar,
  };
  return axios.put(URL_BACKEND, data);
};
export {
  createUserAPI,
  updateUserAPI,
  fetchAllUsersAPI,
  deleteUserAPI,
  handleUploadFileAPI,
  updateUserAvatarAPI,
};
