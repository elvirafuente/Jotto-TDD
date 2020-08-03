/**
 * finds and returns virtual DOM node(s) with the given dtat-test attibute
 * @function
 * @param {ShallowWrapper} wrapper 
 * @param {string} value 
 * @returns {ShallowWrapper}
 */

export const findByTestAtrr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}