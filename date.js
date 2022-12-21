
// console.log(module);
module.exports.getDate = function(){

  //generate a new Date object containing the current date and time
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return day = today.toLocaleDateString("en-US", options);
}
