export defaults [require('./assets/snack-icon.png')];

const cacheImages = images.map(image => {
  return Asset.fromModule(image).downloadAsync();
}); 