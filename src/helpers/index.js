export const camelCased = normalCase => {
  return normalCase.replace(
    /-([a-z])| ([a-z])/g,
    g => g[1].toUpperCase()
  );
};

export const lowerCased = normalCase => normalCase.toLowerCase();

export const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
