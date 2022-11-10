let obj = [
  {
    id: "1",
    name: "Mandala 1",
    category: "mandalas",
    stock: "20",
    price: "5000",
    image: "../assets/mandala1.PNG",
  },
  {
    id: "2",
    name: "Mandala 2",
    category: "mandalas",
    stock: "15",
    price: "5000",
    image: "../assets/mandala2.PNG",
  },
  {
    id: "3",
    name: "Mandala 3",
    category: "mandalas",
    stock: "30",
    price: "2000",
    image: "../assets/mandala3.PNG",
  },
  {
    id: "4",
    name: "Remera 1",
    category: "remeras",
    stock: "10",
    price: "10000",
    image: "../assets/remera1.PNG",
  },
  {
    id: "5",
    name: "Remera 2",
    category: "remeras",
    stock: "5",
    price: "7000",
    image: "../assets/remera2.PNG",
  },
];

export const DataSet = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(obj);
    }, 1000);
  });
};
