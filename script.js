replaceText(document.body)

function replaceText(element)
{
    if(element.hasChildNodes())
    {
        element.childNodes.forEach(replaceText)
    }
    else if(element.nodeType === element.TEXT_NODE)
    {
        element.textContent=element.textContent.replace(/Coronavirus/gi,'ChinaVirus')
    }

}