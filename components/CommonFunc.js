const returnServiceTime = (service_time, duration) => {
  let hr = parseInt(service_time.slice(0, 2)) + Math.floor(duration / 60);
  let mn = parseInt(service_time.slice(3, 5)) + (duration % 60);
  return (
    service_time.slice(0, 5) +
    " - " +
    (hr < 10 ? "0" + hr : hr) +
    ":" +
    (mn < 10 ? "0" + mn : mn)
  );
};

export { returnServiceTime };
