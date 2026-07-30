/* ============================================================
   EDIT THIS FILE TO CUSTOMIZE THE WHOLE SITE.
   Every page reads from this one file — change something here
   and it updates everywhere automatically.
   ============================================================ */

window.SITE_CONFIG = {

  herName: 'Areena',
  yourName: 'Tempi',

  heroTagline: "Baby's breath for how gently you fill every space around you. Dark red lilies for how deeply I mean this.",

  // The word she'll need to type to unlock the last page.
  passcode: "ayt",
  // Shown under the passcode box as a hint. Keep it vague enough that only
  // she'd actually get it, or delete the text and leave it blank.
  passcodeHint: "hint: It's the thing that we both say alot",

  // ---------------- LETTER PAGE ----------------
  letter: {
    greeting: "My love,",
    paragraphs: [
      "I wanted today to have something just for you — not a big gesture, just a quiet page that says what I mean.",
      "i dont even know how to start this but i just wanted you to know how much you mean to me
      "you came into my life in a way i didnt expect and somehow you became someone i cant imagine my days without"
      "you make me feel calm in a way no one else does and even on days when everything feels off you still manage to make things feel a little better just by being there"
      "i know im not perfect and i overthink and mess up sometimes but one thing that never changes is how much i care about you"
      "i dont say it perfectly all the time but i really do love you and i appreciate you more than you probably realize"
      "im glad its you and im glad i get to have you in my life",
      "happy girlfriends day baby

      "mwah take care of yourself for me 🤍"
    ],
    signOff: "Always yours,"
  },

  // ---------------- REASONS PAGE ----------------
  // Add, remove, or edit as many as you want — the page adjusts automatically.
  reasons: [
    "The way you laugh at your own jokes before you even finish telling them.",
    "How you remember tiny things I mentioned once, weeks ago.",
    "The specific way you say my name when you're annoyed with me — and I still love it.",
    "You make ordinary Tuesdays feel like an occasion.",
    "The way you fall asleep mid-sentence and insist you were listening.",
    "How you always save me the last bite, then pretend you didn't.",
    "You've never once made me feel silly for caring too much.",
    "The way your whole face changes when you talk about something you love."
  ],

  // A bigger bonus pool the "surprise me" button pulls from — feel free to
  // add more one-liners here, they show up randomly.
  bonusReasons: [
    "Because you make plans feel like adventures.",
    "Because you argue for what's fair, even when it's inconvenient.",
    "Because your playlists say more about you than a paragraph could.",
    "Because you still get excited for small things.",
    "Because you're the softest place I know.",
    "Because you make me want to be better at loving people."
  ],

  // ---------------- MEMORIES PAGE ----------------
  // A short timeline. Replace the text (and add real photos if you want —
  // see the README for how to swap in an image instead of the flower icon).
  memories: [
    { date: "EDIT ME", title: "How it started", text: "Add the story of how the two of you met, or the moment you knew." },
    { date: "EDIT ME", title: "A favorite day", text: "Describe a specific day together that you still think about." },
    { date: "EDIT ME", title: "A small, ordinary moment", text: "Sometimes the tiny unremarkable moments matter most — put one here." },
    { date: "Today", title: "Right now", text: "Whatever you want to say about this exact moment in your story." }
  ],

  // ---------------- FINALE PAGE ----------------
  finaleMessage: "Happy Girlfriend's Day. Every one of these pages is small, but all of it is true.",

  // The picture that appears once she unlocks the finale with the passcode.
  // Put an image file in this same folder (e.g. "us.jpg") and put its
  // filename here. If the file isn't found, a placeholder frame shows instead
  // so nothing looks broken.
  finalePhoto: "us.jpg",

  // The note that sits under the picture. Write whatever you want here.
  finalePhotoCaption: "EDIT ME — write something to go with this picture.",

  // Background song. Put an audio file (mp3 works everywhere) in this same
  // folder and put its filename here. Leave it as "" to have no music button
  // show up at all.
  song: "song.mp3",
  // 0 to 1. 0.36 = 36%.
  songVolume: 0.36,

  // "Love coupons" — customize freely, add or remove as many as you like.
  coupons: [
    { title: "One uninterrupted video call", text: "No scrolling on my end, phones down, just us." },
    { title: "A handwritten letter in the mail", text: "Actual paper, actual stamp, sent within the week." },
    { title: "A synced movie night", text: "Same movie, same time, different couches, call running the whole time." },
    { title: "A surprise care package", text: "Something small in the mail when you least expect it." },
    { title: "A voice memo instead of a text", text: "Redeemable whenever you're tired of typing." },
    { title: "Help planning our next visit", text: "I'll actually sit down and look at flights/dates with you." }
  ]
};
