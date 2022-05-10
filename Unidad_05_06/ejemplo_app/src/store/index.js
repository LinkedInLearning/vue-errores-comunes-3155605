import { createStore } from 'vuex'

export default createStore({
  state: {
    imagenSeleccionada: null,
    usuarios: [
      {
        id: "6276f94d1eb0e6f26dee0972",
        email: "ryan_harrison@marqet.gl",
        nombre: "Ryan Harrison",
        compania: "Marqet",
        fdn: "1990-05-05"
      },
      {
        id: "6276f94d02b7c524f92a182e",
        email: "lancaster_walsh@xth.toshiba",
        nombre: "Lancaster Walsh",
        compania: "Xth",
        fdn: "1994-01-25"
      },
      {
        id: "6276f94d07e777333f8b805d",
        email: "mia_allison@frosnex.bargains",
        nombre: "Mia Allison",
        compania: "Frosnex",
        fdn: "1993-04-22"
      },
      {
        id: "6276f94d44013829749f06d7",
        email: "patricia_barton@zanymax.fitness",
        nombre: "Patricia Barton",
        compania: "Zanymax",
        fdn: "1988-07-19"
      },
      {
        id: "6276f94dba86646f7e70fa75",
        email: "bernice_lopez@orbean.taxi",
        nombre: "Bernice Lopez",
        compania: "Orbean",
        fdn: "1993-08-01"
      },
      {
        id: "6276f94d866e8a1f9c5dc49f",
        email: "laurel_delaney@coriander.eat",
        nombre: "Laurel Delaney",
        compania: "Coriander",
        fdn: "1991-10-28"
      },
      {
        id: "6276f94d0f3378c15480ac0b",
        email: "erin_bernard@geoforma.mx",
        nombre: "Erin Bernard",
        compania: "Geoforma",
        fdn: "1990-01-29"
      },
      {
        id: "6276f94dd3fb0f3e491ed88b",
        email: "claudia_hawkins@dognost.work",
        nombre: "Claudia Hawkins",
        compania: "Dognost",
        fdn: "1990-06-13"
      },
      {
        id: "6276f94d1377f6277c8ba437",
        email: "mercer_warren@comtrek.works",
        nombre: "Mercer Warren",
        compania: "Comtrek",
        fdn: "1994-07-13"
      },
      {
        id: "6276f94dff3d8b62b7918a27",
        email: "matthews_ball@entality.monash",
        nombre: "Matthews Ball",
        compania: "Entality",
        fdn: "1993-02-26"
      }
    ],
    libros: [
      {
        id: 1,
        autor: "Chinua Achebe",
        paginas: 209,
        titulo: "Things Fall Apart",
        anno: 1958
      },
      {
        id: 2,
        autor: "Hans Christian Andersen",
        paginas: 784,
        titulo: "Fairy tales",
        anno: 1836
      },
      {
        id: 3,
        autor: "Dante Alighieri",
        paginas: 928,
        titulo: "The Divine Comedy",
        anno: 1315
      },
      {
        id: 4,
        autor: "Unknown",
        paginas: 160,
        titulo: "The Epic Of Gilgamesh",
        anno: -1700
      },
      {
        id: 5,
        autor: "Unknown",
        paginas: 176,
        titulo: "The Book Of Job",
        anno: -600
      },
      {
        id: 6,
        autor: "Unknown",
        paginas: 288,
        titulo: "One Thousand and One Nights",
        anno: 1200
      },
      {
        id: 7,
        autor: "Unknown",
        paginas: 384,
        titulo: "Nj\u00e1l's Saga",
        anno: 1350
      },
      {
        id: 8,
        autor: "Jane Austen",
        paginas: 226,
        titulo: "Pride and Prejudice",
        anno: 1813
      },
      {
        id: 9,
        autor: "Honor\u00e9 de Balzac",
        paginas: 443,
        titulo: "Le P\u00e8re Goriot",
        anno: 1835
      },
      {
        id: 10,
        autor: "Samuel Beckett",
        paginas: 256,
        titulo: "Molloy, Malone Dies, The Unnamable, the trilogy",
        anno: 1952
      },
      {
        id: 11,
        autor: "Giovanni Boccaccio",
        paginas: 1024,
        titulo: "The Decameron",
        anno: 1351
      },
      {
        id: 12,
        autor: "Jorge Luis Borges",
        paginas: 224,
        titulo: "Ficciones",
        anno: 1965
      },
      {
        id: 13,
        autor: "Emily Bront\u00eb",
        paginas: 342,
        titulo: "Wuthering Heights",
        anno: 1847
      },
      {
        id: 14,
        autor: "Albert Camus",
        paginas: 185,
        titulo: "The Stranger",
        anno: 1942
      },
      {
        id: 15,
        autor: "Paul Celan",
        paginas: 320,
        titulo: "Poems",
        anno: 1952
      },
      {
        id: 16,
        autor: "Louis-Ferdinand C\u00e9line",
        paginas: 505,
        titulo: "Journey to the End of the Night",
        anno: 1932
      },
      {
        id: 17,
        autor: "Miguel de Cervantes",
        paginas: 1056,
        titulo: "Don Quijote De La Mancha",
        anno: 1610
      },
      {
        id: 18,
        autor: "Geoffrey Chaucer",
        paginas: 544,
        titulo: "The Canterbury Tales",
        anno: 1450
      },
      {
        id: 19,
        autor: "Anton Chekhov",
        paginas: 194,
        titulo: "Stories",
        anno: 1886
      },
      {
        id: 20,
        autor: "Joseph Conrad",
        paginas: 320,
        titulo: "Nostromo",
        anno: 1904
      },
      {
        id: 21,
        autor: "Charles Dickens",
        paginas: 194,
        titulo: "Great Expectations",
        anno: 1861
      },
      {
        id: 22,
        autor: "Denis Diderot",
        paginas: 596,
        titulo: "Jacques the Fatalist",
        anno: 1796
      },
      {
        id: 23,
        autor: "Alfred D\u00f6blin",
        paginas: 600,
        titulo: "Berlin Alexanderplatz",
        anno: 1929
      },
      {
        id: 24,
        autor: "Fyodor Dostoevsky",
        paginas: 551,
        titulo: "Crime and Punishment",
        anno: 1866
      },
      {
        id: 25,
        autor: "Fyodor Dostoevsky",
        paginas: 656,
        titulo: "The Idiot",
        anno: 1869
      },
      {
        id: 26,
        autor: "Fyodor Dostoevsky",
        paginas: 768,
        titulo: "The Possessed",
        anno: 1872
      },
      {
        id: 27,
        autor: "Fyodor Dostoevsky",
        paginas: 824,
        titulo: "The Brothers Karamazov",
        anno: 1880
      },
      {
        id: 28,
        autor: "George Eliot",
        paginas: 800,
        titulo: "Middlemarch",
        anno: 1871
      },
    ]
  },
  getters: {
    obtenerLibros(state){
      return state.libros;
    },
    obtenerUsuarios(state){
      return state.usuarios;
    }
  },
  mutations: {
    agregarUsuario(state, usuario){
      state.usuarios.push(usuario);
    },
    modificarUsuario(state, usuario){
      state.usuarios = state.usuarios.map(us => us.id === usuario.id? usuario : us);
    },
    eliminarUsuario(state, id){
      state.usuarios = state.usuarios.filter(usuario => usuario.id !== id);
    },
    agregarLibro(state, libro){
      state.libros.push(libro);
    },
    modificarLibro(state, libro){
      state.libros = state.libros.map(lib => lib.id === libro.id? libro : lib);
    },
    eliminarLibro(state, id){
      state.libros = state.libros.filter(libro => libro.id !== id);
    },
    seleccionarImagen(state, ruta){
      state.imagenSeleccionada = ruta;
    }
  },
  actions: {
    async seleccionarImagen ({commit}, ruta) {
      commit('seleccionarImagen', ruta);
      return ruta;
    },
    async agregarUsuario ({commit}, usuario) {
      commit('agregarUsuario', usuario);
      return usuario;
    },
    async modificarUsuario ({commit}, usuario) {
      commit('modificarUsuario', usuario);
      return usuario;
    },
    async eliminarUsuario ({commit}, id) {
      commit('eliminarUsuario', id);
      return id;
    },
    async agregarLibro ({commit}, libro) {
      commit('agregarLibro', libro);
      return libro;
    },
    async modificarLibro ({commit}, libro) {
      commit('modificarLibro', libro);
      return libro;
    },
    async eliminarLibro ({commit}, id) {
      commit('eliminarLibro', id);
      return id;
    },
  }
})
