'use strict';

/**
 * top-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-movie.top-movie');
