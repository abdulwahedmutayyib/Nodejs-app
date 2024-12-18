beforeAll(async () => {
  return new Promise((resolve, reject) => {
    app.listen(port, (err) => {
      if (err) {
        reject(err); 
      } else {
        console.log(`Server listening on port ${3000}`);
        resolve(); 
      }
    });
  });
});
