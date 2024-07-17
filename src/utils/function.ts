/**
 *
 * @param  {string} text - text to be sliced
 * @param {number} [max=5] - max length
 * @returns - sliced text
 */

export const textSlicer = (text: string, max: number = 5) => {
  if (text.length >= max) return `${text.slice(0, max)}...`;

  return text;
};
