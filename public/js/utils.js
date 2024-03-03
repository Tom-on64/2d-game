/**
 * Load an image
 * @param {string} src Image source directory (Absolute Path)
 * @returns {HTMLImageElement} Image element
 */
export const loadImage = (src) => {
    let img = new Image()
    img.src = src
    return img
}