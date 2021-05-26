// import { Notifications } from "expo-notifications";

import { NOTIFICATIONS } from "expo-permissions";


export default (title, data) => {
  const isError =
    typeof data == "object" &&
    data &&
    data.response &&
    data.response.data &&
    (data.response.data.error || data.response.data.errors);
  let body = typeof data == "string" ? data : "OK";

  if (isError) {
    body = `CODE: ${data.response.status} ${JSON.stringify(
      data.response.data
    )}`;
  }

  Notifications.presentLocalNotificationAsync({
    title,
    body,
  });
};
