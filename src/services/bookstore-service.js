
export default class BookstoreService {

  data = [
    { id: 1,
      title: 'React.js Book: Learning React JavaScript Library From Scratch',
      author: 'Gre Sidelnikov',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51ad7GkEzNL._SX322_BO1,204,203,200_.jpg',
      price: 23  
    },
    { id: 2,
      title : 'Data Visualization with Python and JavaScript',
      author: 'Kyran Dale',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51e472YBqmL._SX331_BO1,204,203,200_.jpg',
      price: 34 
    },
    { id: 3,
      title : 'Javascript for beginners',
      author: 'Enrique Sanchez',
      coverImage: 'https://m.media-amazon.com/images/I/51AMdOpEf7L._SX260_.jpg',
      price: 18 
    }
  ]

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'))
        } else {
          resolve(this.data)
        }
      }, 700) 
    }) 

  } 

}