// eslint-disable-next-line no-console
const body = document.getElementById('body');

if (body !== null) {
  const div = document.createElement('h1');
  div.innerHTML = 'Hello world';
  body.prepend(div);
}
