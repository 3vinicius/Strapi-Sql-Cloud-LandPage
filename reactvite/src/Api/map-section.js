export const mapSection = (array = [{}]) => {
  return array.map((obj) => {
    const {
      title = '',
      metadata: { background = true } = {},
      metadata: { name = '' } = '',
      description = '',
      image = {},
      text_grid = [],
      image_grid = [],
    } = obj;
    return {
      title,
      background,
      description,
      name,
      image: mapImage(image),
      text_grid: mapGrid(text_grid),
      image_grid: mapGridImags(image_grid),
    };
  });
};

function mapGridImags(grid = []) {
  return grid.map((element) => mapImage(element));
}

function mapImage(image = {}) {
  const {
    name = '',
    alternativeText = '',
    size = 0,
    url = '',
    width = 0,
    height = 0,
  } = image;
  return {
    name,
    alternativeText,
    size,
    url,
    width,
    height,
  };
}

function mapGrid(grid = []) {
  return grid.map((g) => {
    const { title = '', description = '' } = g;
    return {
      title,
      description,
    };
  });
}
