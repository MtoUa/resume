// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Vladyslav',
    lastname: 'Taran',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$600 per month',
  address: 'Address',
}
var footer = {
  social: {
    email: {
      text: 'vlad.de.taran@gmail.com',
      href: 'mailto:vlad.de.taran@gmail.com',
    },
    phone: {
      text: '+380999007209',
      href: 'tel:+380999007209',
    },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/vlad-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    page: {
      title: 'Resume | Home page',
    },

    header,

    main: {},

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
			experience in development. Whenever I start to
			work on a new project I learn the domain and try
			to understand the idea of the project. Good team
			player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
			different platforms (odds) and sport statistics
			(tournament position, goals etc), analyzing by
			simple mathematics models and preparing
			probability for such events like: money line -
			first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git',
          point: 8,
        },
        {
          name: 'Terminal',
          point: 9,
        },
        {
          name: 'NPM',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Music',
          isMain: true,
        },
        {
          name: 'Drawing',
          isMain: false,
        },
        {
          name: 'Videogames',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Education 1',
          isEnd: true,
        },
        {
          name: 'Education 2',
          isEnd: true,
        },
        {
          name: 'Education 3',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Certificate 1',
          id: 157490,
        },
        {
          name: 'Certificate 2',
          id: 834095,
        },
        {
          name: 'Certificate 3',
          id: 368912,
        },
        {
          name: 'Certificate 4',
          id: 299395,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'Company1',
            url: null,
          },
          duration: {
            from: '03.15.2022',
            to: '09.30.2022',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.project/',
              about: 'My first project',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'An award',
                },
                {
                  name: 'The award',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
