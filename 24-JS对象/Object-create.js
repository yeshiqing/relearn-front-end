let o;
o = Object.create(Object.prototype, {
    // foo is a regular 'value property'
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    // bar is a getter-and-setter (accessor) property
    bar: {
        configurable: false,
        get() { return 10; },
        set(value) {
            console.log('Setting `o.bar` to', value);
        }
    }
});