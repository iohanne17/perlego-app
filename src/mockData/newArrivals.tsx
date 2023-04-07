export interface ArrivalProps {
  id: string;
  name: string;
  author: string;
  image: string;
  html: string;
  summary: string;
  keyArray?: string[];
}

export const arrivals: ArrivalProps[] = [
  {
    id: '0',
    name: 'Game of Thrones',
    author: 'George RR Martin',
    image: 'https://source.unsplash.com/user/c_v_r',
    html: 'htmlContent',
    summary: '',
  },
  {
    id: '1',
    name: 'Kill Bill',
    author: 'Quentine Torentino',
    image: 'https://source.unsplash.com/user/c_v_r',
    html: 'htmlContent',
    summary: '',
  },
  {
    id: '2',
    name: 'kill Boksoon',
    author: 'Hyung Kim',
    image: 'https://source.unsplash.com/user/c_v_r',
    html: 'htmlContent',
    summary: '',
  },
  {
    id: '3',
    name: 'The Matrix',
    author: 'Keanu Reeves',
    image: 'https://source.unsplash.com/user/c_v_r',
    html: 'htmlContent',
    summary: '',
  },
  {
    id: '4',
    name: 'Squid Games',
    author: 'Hyunsoo Hyung',
    image: 'https://source.unsplash.com/user/c_v_r',
    html: 'htmlContent',
    summary: '',
  },
  {
    id: '5',
    name: 'Emmanuel Olodo',
    author: 'Emmannuel Obagunwa',
    image: 'https://source.unsplash.com/user/c_v_r',
    html: 'htmlContent',
    summary: '',
  },
];
