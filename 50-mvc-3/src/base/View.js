class View {
    constructor(options) {
        const PROP = ['el', 'html', 'init', 'render']
        for (let key in options) {
            if (PROP.includes(key)) {
                this[key] = options[key]
            }
        }

    }
}

export { View }