<<<<<<< HEAD
const handleHttpError = (res, message = "Algo sucedio", code = 403) => {
=======
const handleHttpError = (res, message = "error", code = 404) => {
>>>>>>> 1100e048dc62da233b6c61993b3feaccf4b8979b
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
