// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

// import {inject} from '@loopback/core';

export class CurrentStateController {
  constructor() {}

  @get('/greet')
  greet() {
    return `hello`;
  }
}
