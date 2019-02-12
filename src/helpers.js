export const isEmpty = obj => Object.keys(obj).length === 0;

export const guidGenerator = () => {
  const S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

export const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
