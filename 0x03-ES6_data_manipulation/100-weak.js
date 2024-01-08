const weakMap = new WeakMap();
function queryAPI(endpoint) {
  const calls = weakMap.get(endpoint) ? weakMap.get(endpoint) + 1 : 1;

  if (calls >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, calls);
}

export { queryAPI, weakMap };
