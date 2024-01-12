const iwCore = require('./iwCore.js');

/**
 * Test addClassName function
 */
test('Check addClassName() function is able to add a class to an element', () => {
  document.body.innerHTML = `
    <div class="container"></div>
  `

  const container = document.querySelector('.container');
  iwCore.addClassName(container, 'test');

   expect(container.className).toBe('container test');

})

/**
 * Test hasClass function
 */
test('Check hasClass() function is able to check if an element contains a class', () => {
  document.body.innerHTML = `
    <div class="target foo bar"></div>
  `

  const target = document.querySelector('.target');

   expect(iwCore.hasClass(target, 'foo')).toBe(true);
   expect(iwCore.hasClass(target, 'foobar')).toBe(false);

})

/**
 * Test hasClass function
 */
test('Check isChild() function is able to check if an element is child of a parent', () => {
  document.body.innerHTML = `
    <div class="wrapper">
      <p class="text">
        <i class="icon"></i>
      </p>
    </div>
    <div class="foo"></div>
  `

  const wrapper = document.querySelector('.wrapper'),
        text = document.querySelector('.text'),
        icon = document.querySelector('.icon'),
        foo = document.querySelector('.foo');

  expect(iwCore.isChild(wrapper, text)).toBe(true);
  expect(iwCore.isChild(wrapper, icon)).toBe(true);
  expect(iwCore.isChild(text, icon)).toBe(true);
  expect(iwCore.isChild(wrapper, foo)).toBe(false);
})