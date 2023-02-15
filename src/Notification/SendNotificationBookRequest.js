import axios from 'axios';

export const SendNotificationBookRequest = (
  deviceTokenMessaging,
  title,
  body,
) => {
  var data = JSON.stringify({
    data: {},
    notification: {
      body: body ? body : 'click to open check Post',
      title: title ? title : 'New Post Added',
    },
    android: {
      notification: {
        sound: 'default',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/appointments-20db0.appspot.com/o/image%2Fappointment.png?alt=media&token=aeb73449-b5e1-4735-8295-24ce611b7821',
      },
    },
    apns: {
      payload: {
        aps: {
          'mutable-content': 1,
        },
      },
      fcm_options: {
        image:
          'https://firebasestorage.googleapis.com/v0/b/appointments-20db0.appspot.com/o/image%2Fappointment.png?alt=media&token=aeb73449-b5e1-4735-8295-24ce611b7821',
      },
    },
    webpush: {
      headers: {
        image:
          'https://firebasestorage.googleapis.com/v0/b/appointments-20db0.appspot.com/o/image%2Fappointment.png?alt=media&token=aeb73449-b5e1-4735-8295-24ce611b7821',
      },
    },
    to: deviceTokenMessaging,
  });

  var config = {
    method: 'post',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: {
      Authorization:
        'key=AAAAYNomcps:APA91bH-BEY8Z9kD_hV3J5EIH4Qpw611cRjdktJsvTwsBKwc4rrSL2IcM6-qyg7CBUE_Gn75P_mugsyb9HrfztMJMyV4LWVUo3Zu2LU_gOvoim37jZ-uTr941qbUJ9o2KmFiGn9IWFfr',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
