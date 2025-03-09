'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Fairyfly',
        description: "Fairyflies are tiny parasitoid wasps, often measuring between 0.5 to 1 millimeter in length. They possess slender bodies and fringed wings, giving them a delicate appearance.",
        fact: "hey include the world’s smallest known insect, with a body length of only 0.139 millimeters.",
        territory: "Found in temperate, subtropical, and tropical regions worldwide.",
        millimeters: 0.7
      },
      {
        name: 'Scydosella Musawasensis',
        description: "This beetle is recognized as the smallest free-living insect, with an elongated oval shape and yellowish-brown coloration.",
        fact: "It holds the record for being the smallest known free-living insect",
        territory: "Initially discovered in Nicaragua, also found in Colombia",
        millimeters: 0.325
      },
      {
        name: 'Western Pygmy Blue Butterfly',
        description: "One of the smallest butterflies, featuring copper brown and dull blue patterns on its wings.",
        fact: "ts wingspan can be as little as 12 millimeters.",
        territory: "hroughout North America, extending to Hawaii and the Middle East.",
        millimeters: 12
      },
      {
        name: "Patu Digua",
        description: "One of the smallest known spiders, with males growing to about a third of a millimeter.",
        fact: "Smaller than the head of a pin.",
        territory: "Near the Rio Digua river in Colombia",
        millimeters: 0.3
      },
      {
        name: "Scarlet Dward Dragonfly",
        description: "Known as the smallest dragonfly, with males having a distinct scarlet coloration.",
        fact: "Recognized as the world's smallest dragonfly species",
        territory: "Found in Southeast Asia and China.",
        millimeters: 18
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', {
      name: ['Patu Digua', 'Scydosella Musawasensis']
    });
  }
};
