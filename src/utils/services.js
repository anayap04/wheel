import axios from "axios";
export const getInfo = () => {
  return axios
    .get(
      "https://seminario-blc.online/api-php-react/get_info.php?evento=5&isWheel=true",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      }
    )
    .then((response) => {
      return response;
    });
};

export const updateInfo = (user) => {
  const userArr = user.map(value => value.id);
  return axios
    .post(
      "https://seminario-blc.online/api-php-react/update_user_multiple.php",
      JSON.stringify({id: userArr}),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      }
    )
    .then((response) => {
      return response;
    });
};
