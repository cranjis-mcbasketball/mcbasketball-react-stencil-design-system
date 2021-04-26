import { newE2EPage } from '@stencil/core/testing';

describe('hello-world', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-world></hello-world>');
    const element = await page.find('hello-world');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<hello-world></hello-world>');
    const component = await page.find('hello-world');
    const element = await page.find('hello-world >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'Uranus');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Uranus`);

    component.setProperty('last', 'McBasketball');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Uranus McBasketball`);

    component.setProperty('middle', 'Jeremiah');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Uranus Jeremiah McBasketball`);
  });
});
