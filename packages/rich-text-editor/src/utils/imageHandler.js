export function onImage(event) {
  console.log('query onImage');
  const reader = new FileReader();

  reader.onload = readOnLoad(event);

  // reader.onload = (function(e) {
  //   console.log('query e', e.target.result);
  // })(e).bind(this);
}

const readOnLoad = (e) => {
  console.log('query e', e.target.result);
};
