import { JSX } from 'mcbasketball-core';
import { defineCustomElements } from 'mcbasketball-core/loader';

/** We'll talk about this one in a minute **/
import { createReactComponent } from './createComponent';

export const HelloWorld = /*@__PURE__*/createReactComponent<JSX.HelloWorld, HTMLHelloWorldElement>('hello-world');
export const HelloUranus = /*@__PURE__*/createReactComponent<JSX.HelloUranus, HTMLHelloWorldElement>('hello-uranus');

defineCustomElements(window);