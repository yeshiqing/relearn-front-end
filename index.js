if (j && (g = "try {" + g + "\n} catch (error) { throw error; }"),
    loopProtect.alias = "window.runnerWindow.protect",
    g = loopProtect(g),
    g = g.replace(b.script, "<\\/script"),
    b.console.test(g) && (g = g.replace(b.console, function (a, b, c) {
        return "window.runnerWindow.proxyConsole." + c
    })),
    !j && l)
    f = "<pre>\n" + g.replace(/[<>&]/g, function (b) {
        return a[b]
    }) + "</pre>";