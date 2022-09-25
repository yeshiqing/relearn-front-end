function Foo() {
    if (new.target) { throw 'Foo() can\'t be called with new'; }
}
new Foo()
