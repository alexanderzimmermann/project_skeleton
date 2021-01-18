/**
 * Form validator class file
 */


/**
 * Form validator class
 * @constructor
 */
const Form = function () {

    /**
     * Form selector.
     * @type {string}
     */
    this.sSelector = '';

    /**
     * Form valid.
     * @type {boolean}
     */
    this.bValid = false;
};

/**
 * Object declaration.
 */
Form.prototype = {

    /**
     * Constructor.
     */
    constructor: Form,

    /**
     * Valiate form depending on attributes.
     */
    validate: function () {
        // This is not touched.
        this.bValid = false;

        // Unused local variables are deleted in final code.
        let bValid = false;

        // Local variable were shortened (var e=new Date;console.log("Validate"+e)
        let oDate = new Date();
        console.log('Validate' + oDate);
    }
}