const contacts = [
  {
    id: 1,
    name: "Brimstone",
    imgURL:"https://vgraphs.com/images/agents/brimstone-avatar.jpg",
    origin: " They think I'm an old dog? Heh, I'll show 'em just how many tricks I know.",
    type: "Controller"
  },
  {
    id: 2,
    name: "Viper",
    imgURL:"data:image/jpeg;base64,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",
    origin: "No one can hold their breath forever.",
    type: "Controller"
  },
  {
    id: 3,
    name: "Omen",
    imgURL:"https://vgraphs.com/images/agents/omen-avatar.jpg",
    origin: " I am the beginning. I am the end.",
    type: "Controller"
  },
  {
    id: 4,
    name: "Killjoy",
    imgURL:"https://vgraphs.com/images/agents/killjoy-avatar.jpg",
    origin: " Relax, I've already thought of everything.",
    type: "Sentinel"
  },
  {
    id: 5,
    name: "Cypher",
    imgURL:"https://vgraphs.com/images/agents/cypher-avatar.jpg",
    origin: "Nothing stays hidden from me. Nothing.",
    type: "Sentinel"
  },
  {
    id: 6,
    name: "Sova",
    imgURL:"https://vgraphs.com/images/agents/sova-avatar.jpg",
    origin: "Wherever they run, I will find them.",
    type: "Initiator"
  },
  {
    id: 7,
    name: "Sage",
    imgURL:"https://vgraphs.com/images/agents/sage-avatar.jpg",
    origin: " I am both shield and sword.",
    type: "Sentinel"
  },
  {
    id: 9,
    name: "Phoenix",
    imgURL:"https://vgraphs.com/images/agents/phoenix-avatar.jpg",
    origin: "Just take a seat, I got this.",
    type: "Duelist"
  },
  {
    id: 10,
    name: "Jett",
    imgURL:"https://vgraphs.com/images/agents/jett-avatar.jpg",
    origin: "Cool. Let's go.",
    type: "Duelist"
  },
  {
    id: 11,
    name: "Reyna",
    imgURL:"https://vgraphs.com/images/agents/reyna-avatar.jpg",
    origin: "They have no idea how heartless I am.",
    type: "Duelist"
  },
  {
    id: 12,
    name: "Raze",
    imgURL:"https://vgraphs.com/images/agents/raze-avatar.jpg",
    origin: "Yes, I'm pumped!",
    type: "Duelist"
  },
  {
    id: 13,
    name: "Breach",
    imgURL:"https://vgraphs.com/images/agents/breach-avatar.jpg",
    origin: "Stand in my way. I dare you.",
    type: "Initiator"
  },
  {
    id: 14,
    name: "Skye",
    imgURL:"https://vgraphs.com/images/agents/skye-avatar.jpg",
    origin: "Alright! Where's the fight?",
    type: "Initiator"
  },
  {
    id: 15,
    name: "Yoru",
    imgURL:"https://vgraphs.com/images/agents/yoru-avatar.jpg",
    origin: "I'll fight anybody. I'll fight everybody.",
    type: "Duelist"
  },
  {
    id: 16,
    name: "Astra",
    imgURL:"https://dak.gg/valorant/images/agents/small_portraits/astra.png?20201008",
    origin: "I am on a higher plane chale, literally!",
    type: "Controller"
  },
  {
    id: 17,
    name: "Kay/0",
    imgURL:"https://dak.gg/valorant/images/agents/small_portraits/kayo.png?20201008",
    origin: "Let's do this.",
    type: "Initiator"
  },
  {
    id: 18,
    name: "Chamber",
    imgURL:"https://dak.gg/valorant/images/agents/small_portraits/chamber.png?20201008",
    origin: "You have good taste, my friend.",
    type: "Sentinel"
  },
  {
    id: 19,
    name: "Neon",
    imgURL:"https://dak.gg/valorant/images/agents/small_portraits/neon.png?20201008",
    origin: "Move, or get zapped.",
    type: "Duelist"
  }
];

export default contacts;
