import { newE2EPage } from '@stencil/core/testing';

describe('hello-uranus', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-uranus></hello-uranus>');
    const element = await page.find('hello-uranus');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-uranus></hello-uranus>');
    const component = await page.find('hello-uranus');
    const element = await page.find('hello-uranus >>> div');
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
