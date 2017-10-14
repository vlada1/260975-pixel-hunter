const allData = {};

allData.introData = {
  text: ' Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

allData.greetingData = {
  logo: {
    src: 'img/logo_big.png',
    alt: 'Pixel Hunter'
  },
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  text: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.`
};

allData.rulesData = {
  title: 'Правила',
  text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`,
  placeholder: 'Ваше Имя',
  buttonText: 'Go!'
};

export const ImageType = {
  PAINT: 0,
  PHOTO: 1
};

export const answerType = {
  WRONG: 0,
  CORRECT: 1,
  SLOW: 2,
  FAST: 3
};

export const points = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50
};

export const gameType = {
  GUESS_TWO_IMAGES: 0,
  GUESS_ONE_IMAGE: 1,
  FIND_PAINT: 2
};

allData.questions = [
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k42.kn3.net/CF42609C8.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://pandaznaet.ru/wp-content/uploads/2015/12/dozhdlivye-fotografii-pohozhi-na-kartiny-maslom-3.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k42.kn3.net/D2F0370D6.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'https://www.sunhome.ru/i/journal/171/likoris-v2.xxl.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'https://cameralabs.org/media/k2/items/cache/e939e174a494bc3e6b02b21f9d767cf7_L.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'https://k38.kn3.net/AD92BA712.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://pre02.deviantart.net/a160/th/pre/f/2014/164/4/f/girl_by_zephyrxavier-d7m6ac6.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'https://c1.staticflickr.com/4/3561/3391067011_dfea55be7d_b.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k40.kn3.net/6A7A24F7C.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'https://k32.kn3.net/42C83EF0A.jpg',
      type: ImageType.PAINT
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://i.imgur.com/1KegWPz.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: 'http://http://art-on.ru/wp-content/uploads/2014/09/Batu_Balkanli_15.jpg',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k41.kn3.net/CF684A85A.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'http://mazaru.ucoz.ru/13.jpg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.GUESS_ONE_IMAGE,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201503/170257278.jpeg',
      type: ImageType.PAINT
    }]
  },
  {
    gameType: gameType.FIND_PAINT,
    tasks: [{
      isSelected: false,
      alt: 'Option 1',
      src: 'https://4tololo.ru/files/images/201322091909383330.jpg',
      type: ImageType.PHOTO
    }, {
      isSelected: true,
      alt: 'Option 1',
      src: 'http://artyx.ru/news/item/f00/s09/n0000922/pic/000004.jpg',
      type: ImageType.PAINT
    }, {
      isSelected: false,
      alt: 'Option 1',
      src: '',
      type: ImageType.PHOTO
    }]
  },
  {
    gameType: gameType.GUESS_TWO_IMAGES,
    tasks: [{
      name: 'question1',
      alt: 'Option 1',
      src: 'https://k32.kn3.net/5C7060EC5.jpg',
      type: ImageType.PAINT
    }, {
      name: 'question2',
      alt: 'Option 2',
      src: 'https://i.imgur.com/Pg08d7X.jpg',
      type: ImageType.PHOTO
    }]
  }
];

allData.questionText = {
  [gameType.GUESS_TWO_IMAGES]: 'Угадайте для каждого изображения фото или рисунок?',
  [gameType.GUESS_ONE_IMAGE]: 'Угадай, фото или рисунок?',
  [gameType.FIND_PAINT]: 'Найдите рисунок среди изображений'
};

allData.statsData = {
  titleWin: 'Победа!',
  titleFail: 'FAIL',
  speedBonusTitle: 'Бонус за скорость:',
  lifeBonusTitle: 'Бонус за жизни:',
  fineTitle: 'Штраф за медлительность:'
};

export default allData;
