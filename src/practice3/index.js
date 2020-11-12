export const getPoetry = () => {
  return fetch('https://v1.jinrishici.com/all.json', { method: 'GET' })
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      const { origin, author, content } = response;
      const output = [];
      output.push(origin);
      output.push(author);
      output.push(content);
      return output;
    })
    .catch((err) => {
      console.error(err);
    });
};
