function extractText() {
    const liElements= [...document.getElementsByTagName('li')];
    const elText = liElements.map(e => e.textContent);
    document.getElementById('result').value = elText.join('\n')
}
