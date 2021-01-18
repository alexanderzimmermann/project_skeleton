/**
 * Form class file
 */

/**
 * Class form.
 */
class Form6 {
    /**
     * Constructor
     * @param sSelector string Selector.
     */
    constructor (sSelector) {
        this.sSelector = sSelector;
        this.bValid = false;
    }

    /**
     * Valiate form depending on attributes.
     */
    validate () {
        this.bValid = false;
        console.log('Validate');
    }
}
