`
new Function （通过函数声明和函数表达式创建的函数也是这样的结构）
{
	arguments: null
	caller: null
	length: 0
	name: "anonymous"
	prototype: {constructor: ƒ}
	[[FunctionLocation]]: VM186:1
	[[Prototype]]: ƒ ()
	[[Scopes]]: Scopes[1]
}

new Object()
{
	__proto__
}

Object.prototype
{
	constructor: ƒ Object(),
	hasOwnProperty: ƒ hasOwnProperty(),
	isPrototypeOf: ƒ isPrototypeOf(),
	propertyIsEnumerable: ƒ propertyIsEnumerable(),
	toLocaleString: ƒ toLocaleString(),
	toString: ƒ toString(),
	valueOf: ƒ valueOf(),
	__defineGetter__: ƒ __defineGetter__(),
	__defineSetter__: ƒ __defineSetter__(),
	__lookupGetter__: ƒ __lookupGetter__(),
	__lookupSetter__: ƒ __lookupSetter__(),
	__proto__: (…),
	get __proto__: ƒ __proto__(),
	set __proto__: ƒ __proto__()
}

Object.getOwnPropertyDescriptor(Function.prototype,'arguments')
{
	configurable: true
	enumerable: false
	get: ƒ ()
	set: ƒ ()
}


Function.prototype === Object.__proto__ === Function.__proto__ === F.__proto__
{
	apply: ƒ apply(),
	arguments: [],
	bind: ƒ bind(),
	call: ƒ call(),
	caller: [],
	constructor: ƒ Function(),
	length: 0,
	name: "",
	toString: ƒ toString(),
	Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance](),
	get arguments: ƒ (),
	set arguments: ƒ (),
	get caller: ƒ (),
	set caller: ƒ (),
	[[FunctionLocation]]: ​,
	[[Prototype]]: Object,
	[[Scopes]]: Scopes[0]
}

F.prototype // 普通函数的 prototype
{
	constructor: ƒ ()
	[[Prototype]]: Object
}

F
{
	arguments: null,
	caller: null,
	length: 0, // 声明时定义的形参个数
	name: "F",
	prototype: {constructor: F,__proto__:Object.prototype},
	[[Prototype]]: Function.prototype,
}

Function
{
	length: 1,
	name: "Function",
	prototype: ƒ (),
	arguments: (…),
	caller: (…),
	[[Prototype]]: ƒ (),
	[[Scopes]]: Scopes[0]
}


Object
{
	assign: ƒ assign(),
	create: ƒ create(),
	defineProperties: ƒ defineProperties(),
	defineProperty: ƒ defineProperty(),
	entries: ƒ entries(),
	freeze: ƒ freeze(),
	fromEntries: ƒ fromEntries(),
	getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor(),
	getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors(),
	getOwnPropertyNames: ƒ getOwnPropertyNames(),
	getOwnPropertySymbols: ƒ getOwnPropertySymbols(),
	getPrototypeOf: ƒ getPrototypeOf(),
	hasOwn: ƒ hasOwn(),
	is: ƒ is(),
	isExtensible: ƒ isExtensible(),
	isFrozen: ƒ isFrozen(),
	isSealed: ƒ isSealed(),
	keys: ƒ keys(),
	length: 1,
	name: "Object",
	preventExtensions: ƒ preventExtensions(),
	prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …},
	seal: ƒ seal(),
	setPrototypeOf: ƒ setPrototypeOf(),
	values: ƒ values(),
	arguments: (…),
	caller: (…),
	[[Prototype]]: ƒ (),
	[[Scopes]]: Scopes[0]
}
`