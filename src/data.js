import Dwi from "./assets/MOD/dwi.jpg";
import Taufik from "./assets/MOD/Taufik.jpg";

import Prasetyo from "./assets/Security/Prasetyo.jpg";
import Canggih from "./assets/Security/Canggih.jpg";
import Fandy from "./assets/Security/Fandy.jpg";
import Bobby from "./assets/Security/Bobby.jpg";

import Alfonsus from "./assets/Dispatcher/Alfonsus.jpg";
import Atok from "./assets/Dispatcher/Atok.jpg";
import Dimas from "./assets/Dispatcher/Dimas.jpg";
import Mismanto from "./assets/Dispatcher/Mismanto.jpg";
import Widodo from "./assets/Dispatcher/Widodo.jpg";

import Siluetwanita from "./assets/Siluet wanita.png";
import Siluetpria from "./assets/siluet pria.jpg";

const roles = [
  {
    role: "MOD",
    people: [
      {
        id: 1,
        name: "Dwi Anggono",
        imageUrl: Dwi,
      },
      {
        id: 2,
        name: "Taufik Kurniawan",
        imageUrl: Taufik,
      },
    ],
  },
  {
    role: "DISPATCHER",
    people: [
      {
        id: 4,
        name: "Alfonsus Prabawa",
        imageUrl: Alfonsus,
      },
      {
        id: 5,
        name: "Dimas Agung N",
        imageUrl: Dimas,
      },
      {
        id: 6,
        name: "Mismanto",
        imageUrl: Mismanto,
      },
      {
        id: 7,
        name: "Atok Dewa",
        imageUrl: Atok,
      },
      {
        id: 8,
        name: "Widodo",
        imageUrl: Widodo,
      },
    ],
  },
  {
    role: "SECURITY",
    people: [
      {
        id: 9,
        name: "Grup Enggar Prasetyo",
        imageUrl: Prasetyo,
      },
      {
        id: 10,
        name: "Grup Canggih Permana",
        imageUrl: Canggih,
      },
      {
        id: 11,
        name: "Grup Fandy Prahana",
        imageUrl: Fandy,
      },
      {
        id: 12,
        name: "Grup Bobby Darmawan",
        imageUrl: Bobby,
      },
    ],
  },
  {
    role: "PLANNER",
    people: [
      {
        id: 13,
        name: "Antonius Kuncoro W",
        imageUrl: Siluetpria,
      },
      {
        id: 14,
        name: "Vela bumul H",
        imageUrl: Siluetwanita,
      },
    ],
  },
];

export default roles;
