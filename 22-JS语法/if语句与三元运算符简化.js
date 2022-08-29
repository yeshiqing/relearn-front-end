ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument
if (ifrm.contentWindow) {
    ifrm = ifrm.contentWindow
} else {
    ifram = (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument
}