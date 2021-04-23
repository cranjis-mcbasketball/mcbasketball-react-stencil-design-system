import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const component = await page.find('my-component');
    const element = await page.find('my-component >>> div');
    expect(element.textContent).toEqual(`Hello, Uranus! I'm `);

    component.setProperty('first', 'Cranjis');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, Uranus! I'm Cranjis`);

    component.setProperty('last', 'McBasketball');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, Uranus! I'm Cranjis McBasketball`);

    component.setProperty('middle', 'Jeremiah');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, Uranus! I'm Cranjis Jeremiah McBasketball`);
  });
});
