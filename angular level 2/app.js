(function () {
  var app = angular.module('gameStore', []);

  app.controller('StoreController', function ($scope) {
    this.products = games;

    $scope.addToCart = function (value) {
      if (value) {
        alert("This game is sold out!");
      } else {
        alert("One item added to your cart!");
      }
    };

  });

  app.controller('TabController', function () {
    this.tab = 1;
    this.setTab = function (setTab) {
      this.tab = setTab;
    };
    this.isSet = function (setTab) {
      return this.tab == setTab;
    };
  });

  app.controller('GalleryController', function () {
    this.current = 0;
    this.setCurrent = function (newValue) {
      this.current = newValue || 0;
    };
  });

  var games = [
    {
      name: 'Dark Souls',
      price: 21.95,
      description: 'The core mechanic of the game is exploration. Players are encouraged by the game to proceed with caution, learn from past mistakes, or find alternate areas to explore. Dark Souls takes place in a large and continuous open world environment, connected through a central hub area (Firelink Shrine).',
      review: 'Dark Souls is a third-person action role-playing game. The core mechanic of the game is exploration. Players are encouraged by the game to proceed with caution, learn from past mistakes, or find alternate areas to explore. Dark Souls takes place in a large and continuous open world environment, connected through a central hub area (Firelink Shrine).',
      rating: 4,
      soldOut: true,
      canPurchase: true,
      images: [
        "images/Dark Souls.jpg",
        "images/Dark Souls II.jpg",
        "images/Hearthstone.jpg",
        "images/Super Mario 3D World.jpg",
      ],
    },

    {
      name: 'Dark Souls II',
      price: 25.95,
      description: 'Each time the player dies their maximum health is reduced by 5% until they use a human effigy or assist another player in clearing a level.',
      review: 'Dark Souls II, in the mold of Dark Souls, is a game of noteworthy difficulty. Each time the player dies their maximum health is reduced by 5% until they use a human effigy or assist another player in clearing a level.',
      rating: 4,
      soldOut: false,
      canPurchase: false,
      images: [
        "images/Dark Souls.jpg",
        "images/Dark Souls II.jpg",
        "images/Hearthstone.jpg",
        "images/Super Mario 3D World.jpg",
      ],
    },

    {
      name: 'Hearthstone',
      price: 0.0,
      description: 'Online collectible card game developed by Blizzard Entertainment. ',
      review: 'Hearthstone: Heroes of Warcraft is an online collectible card game developed by Blizzard Entertainment. It is free-to-play with optional purchases to acquire additional cards and access content quicker. ',
      rating: 4,
      soldOut: false,
      canPurchase: true,
      images: [
      ],
    },

    {
      name: 'Super Mario 3D World',
      price: 35.95,
      description: 'Super Mario 3D Land, which combines the free-roaming gameplay of 3D Mario titles with the mechanics of 2D side-scrolling platforming games in the series, going so far as to include a flagpole and timer on every level. Four different playable characters are initially available in Super Mario 3D World: Mario, Luigi, Princess Peach, and Toad.',
      review: 'The game follows a similar play style to Super Mario 3D Land, which combines the free-roaming gameplay of 3D Mario titles with the mechanics of 2D side-scrolling platforming games in the series, going so far as to include a flagpole and timer on every level. Four different playable characters are initially available in Super Mario 3D World: Mario, Luigi, Princess Peach, and Toad.',
      rating: 4,
      soldOut: false,
      canPurchase: true,
      images: [
        "images/Dark Souls.jpg",
        "images/Dark Souls II.jpg",
        "images/Hearthstone.jpg",
        "images/Super Mario 3D World.jpg",
      ],
    }
  ];
})();