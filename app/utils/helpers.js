// Assuming you have this function in a file called utils.js

export function extractImageName(url) {
    const parts = url.split('/');
    const imageName = parts[parts.length - 1];
    return imageName;
  }
  