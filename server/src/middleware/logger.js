export const logRequest = (req, res, next) => {
  console.log(req);
  //   console.log("This is middleware");

  next();
};
