export const camelCased = normalCase => {
  return normalCase.replace(
    /-([a-z])| ([a-z])/g,
    g => g[1].toUpperCase()
  );
};

export const lowerCased = normalCase => normalCase.toLowerCase();
