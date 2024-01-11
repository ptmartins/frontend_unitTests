const iwCore = require('./iwCore.js');

test('Check addClassName() function is able to add a class to an element', () => {
  document.body.innerHTML = `
    <div class="container"></div>
  `

  const container = document.querySelector('.container');
  iwCore.addClassName(container, 'test');

   expect(container.className).toBe('container test');

})