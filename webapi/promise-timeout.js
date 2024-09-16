function delayGreeting(name) {
  let promise = new Promise(function (resolve) {
    const rnd = Math.floor(Math.random() * (5000 - 1000) + 1000);
    const rndpers = rnd / 1000;
    setTimeout(
      () =>
        resolve(
          "After delaying for " +
            rndpers.toFixed(3) +
            " seconds," +
            " Hello, " +
            name +
            "!"
        ),
      rndpers
    );
  });
  return promise;
}

delayGreeting("Manee").then(console.log);
