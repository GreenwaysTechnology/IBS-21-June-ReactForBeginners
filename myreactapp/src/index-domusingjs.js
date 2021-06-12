function createElement() {
    console.log('create dom element')
    const element = document.createElement('h1')
    element.innerHTML = 'Hello React';
    const rootElement = document.getElementById('root')
    rootElement.appendChild(element)
}
createElement()