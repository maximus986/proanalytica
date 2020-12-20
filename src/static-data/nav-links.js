import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineMedicineBox,
  AiOutlineLink,
  AiOutlineSchedule,
  AiOutlineContacts,
} from 'react-icons/ai';

export const navLinks = [
  {
    path: '/',
    text: 'home',
    icon: AiOutlineHome,
  },
  {
    path: '/o-nama',
    text: 'aboutUs',
    icon: AiOutlineApartment,
  },
  {
    path: '/proizvodi-i-usluge',
    text: 'products',
    icon: AiOutlineMedicineBox,
  },
  {
    path: '/vesti',
    text: 'news',
    icon: AiOutlineSchedule,
  },
  {
    path: '/korisni-linkovi',
    text: 'links',
    icon: AiOutlineLink,
  },
  {
    path: '/kontakt',
    text: 'contact',
    icon: AiOutlineContacts,
  },
];
