import axios from "axios";

const getUserDetails = async (name : string) => {
  try {
    const response = await axios.get(`https://cache.showwcase.com/user/${name}`);
    // console.log(response.data);
    return {
      activityMessage: response.data.activity.message,
      displayName: response.data.displayName,
      profilePictureKey: response.data.profilePictureKey
    };
  } catch (error) {
    console.log(error)
  }
};

export default getUserDetails;
