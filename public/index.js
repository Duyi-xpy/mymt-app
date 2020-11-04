const axios = require("axios");

axios
  .get("http://localhost:23331/api/user/login?tel=15659414657",{
      data:{
          firstName:"xu",
          lastName:"wzd"
      }
  })
  .then((data) => {
    console.log(data.data);
  });
