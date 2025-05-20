const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2112", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Ingresa la contraseña", // Title displayed on the passcode entry page
  successMessage: "Muy bien", // Message shown upon successful passcode entry
  redirectMessage: "Redirigiendo...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Contraseña incorrecta, pista: Nuestra fecha de aniversario!", // Message shown for incorrect passcode
  cancelButtonText: "Limpiar", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Buscar en Google o escribir una URL", // Placeholder text in the search input
  trendingTitle: "Búsquedas populares", // Title for the trending searches section
  trendingSearches: [
    "Precio del Kumys Mayo 2025", // Example trending search query
    "Porque mi Luisa es tan bella?", // Another example query
    `Como consentir a mi novia`, // A personalized trending search
  ],
  proTip: 'Intenta buscar "¿Cuánto tiempo hemos estado juntos?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-12-21", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Hemos estado juntos por:", // Title displayed on the timer page
  timerMessage: "... y contando.", // Message shown alongside the timer
  timeUnits: {
    days: "Días", // Label for days in the timer
      hours: "Horas", // Label for hours in the timer
      minutes: "Minutos", // Label for minutes in the timer
      seconds: "Segundos", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Algunas cosas en nuestro tiempo juntos", // Title for the recap page
  clickMeText: "¡Haz clic en mí!", // Text prompting users to interact

  recapSections: [
    { label: "Mensajes", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Fotos", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Música", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Canciones que me recuerdan a ti cosota", // Title for the music page
  musicGallery: [
    {
      title: "Nobody New", // Title of the song
      artist: "The Marias", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Chachacha",
      artist: "Josean Log",
      left: "40%",
      top: "15%",
    },
    {
      title: "Otro atardecer",
      artist: "Bad Bunny ft. The Marias",
      left: "15%",
      top: "40%",
    },
    {
      title: "Enseñame a bailar",
      artist: "Bad Bunny",
      left: "30%",
      top: "75%",
    },
    {
      title: "Si Me Voy",
      artist: "Cuco, The Marias",
      left: "5%",
      top: "65%",
    },
    {
      title: "No One Noticed",
      artist: "The Marias",
      left: "25%",
      top: "90%",
    },
    {
      title: "Ojitos Lindos",
      artist: "Bad Bunny, Bomba Estéreo",
      left: "35%",
      top: "50%",
    },
    {
      title: "Krippy Kush",
      artist: "Bad Bunny, Farruko",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Nuestros momentos", // Title for the messages recap page
    messageGallery: [
      { title: "25 abril 2025", description: "Nuestras metas y deseos." }, // Message entry
      { title: "19 mayo 2025", description: "Completamos nuestro hogar virtual." },
      { title: "12 enero 2025", description: "Me diste nuestras cabezas de calabaza" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Nuestras fotos", // Title for the pictures recap page
    pictureGallery: [
      { title: "21 abril 2025", description: "Celebrando tu cumpleaños y nuestro 4° mes 🎉" }, // Picture entry
      { title: "18 abril 2025", description: "Día de tu cumpleaños 💕" },
      { title: "8 mayo 2025", description: "Ultima foto que nos tomamos, el dia del apagon 🌌" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hola mi Luisa, hoy son 5 meses y cada uno ha sido increíble gracias por todo mi amor!🩵", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "¡Gracias por todo! 🩵 Espero que tengamos muchos meses más juntos, estos 5 me han encantado y cada uno ha sido especial, eres muy especial para mi y quiero seguir contigo, conocerte, verte mas y darme muchos besos mas, te amo mi Luisa.", // Mensaje de cierre mostrado

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Página anterior", // Text for the previous page button
  nextPageText: "Página siguiente", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Cuánto tiempo hemos estado juntos", 
    "cuanto tiempo hemos estado juntos", 
    "cuánto tiempo hemos estado juntos",
    "¿Cuánto tiempo hemos estado juntos?",
    "¿Cuanto tiempo hemos estado juntos?",
    "¿cuánto tiempo hemos estado juntos?",
    "¿cuanto tiempo hemos estado juntos?",
    // Another example of a correct search query
  ],
};

export default config;
