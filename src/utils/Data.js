let Data = [
  {
    id: 1,
    name: "Mandala 1",
    category: "Mandalas",
    stock: "20",
    price: "5000",
    image: "Insert Image",
  },
  {
    id: 2,
    name: "Mandala 2",
    category: "Mandalas",
    stock: "15",
    price: "5000",
    image: "Insert Image",
  },
  {
    id: 3,
    name: "Remera 1",
    category: "Remeras",
    stock: "30",
    price: "2000",
    image: "Insert Image",
  },
  {
    id: 4,
    name: "Acolchado 1",
    category: "Acolchados",
    stock: "10",
    price: "10000",
    image: "Insert Image",
  },
  {
    id: 5,
    name: "Acolchado 2",
    category: "Acolchados",
    stock: "5",
    price: "7000",
    image: "Insert Image",
  },
];

export const DataSet = ()=>{
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res(Data)
        },2000)
    })
}