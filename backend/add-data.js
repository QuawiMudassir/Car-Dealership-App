const mongoose = require('mongoose');
const Car = require('./models/car'); // Adjust path to the Car model

const carData =  [
    
    {
      "make": "Ford",
      "model": "Escape",
      "year": 2020,
      "color": "Blue",
      "kilometers": 40000,
      "vin": "1FMCU9GDXLUC04578",
      "price": 25000,
      "images": [
        "https://example.com/ford-escape1.jpg"
      ]
    },
    {
      "make": "Kia",
      "model": "Sportage",
      "year": 2022,
      "color": "Green",
      "kilometers": 12000,
      "vin": "KNDPNCAC2N7256789",
      "price": 27000,
      "images": [
        "https://example.com/kia-sportage1.jpg",
        "https://example.com/kia-sportage2.jpg"
      ]
    },
    {
      "make": "Toyota",
      "model": "Camry",
      "year": 2020,
      "color": "White",
      "kilometers": 15000,
      "vin": "4T1B11HK4LU022220",
      "price": 25000,
      "images": ["https://linktoimage1.com", "https://linktoimage2.com"]
    },
    {
      "make": "Honda",
      "model": "Civic",
      "year": 2021,
      "color": "Blue",
      "kilometers": 12000,
      "vin": "2HGFC2F54MH565789",
      "price": 22000,
      "images": ["https://linktoimage3.com", "https://linktoimage4.com"]
    },
    {
      "make": "Ford",
      "model": "Mustang",
      "year": 2022,
      "color": "Red",
      "kilometers": 5000,
      "vin": "1FA6P8TH1J5134567",
      "price": 35000,
      "images": ["https://linktoimage5.com", "https://linktoimage6.com"]
    },
    {
      "make": "Chevrolet",
      "model": "Malibu",
      "year": 2020,
      "color": "Silver",
      "kilometers": 18000,
      "vin": "1G1ZD5ST3LF123456",
      "price": 23000,
      "images": ["https://linktoimage7.com", "https://linktoimage8.com"]
    },
    {
      "make": "BMW",
      "model": "X5",
      "year": 2019,
      "color": "Black",
      "kilometers": 30000,
      "vin": "5UXKR6C57KLL654321",
      "price": 48000,
      "images": ["https://linktoimage9.com", "https://linktoimage10.com"]
    },
    {
      "make": "Mercedes-Benz",
      "model": "C-Class",
      "year": 2020,
      "color": "Gray",
      "kilometers": 22000,
      "vin": "WDDWK4JB5LF765432",
      "price": 45000,
      "images": ["https://linktoimage11.com", "https://linktoimage12.com"]
    },
    {
      "make": "Audi",
      "model": "A4",
      "year": 2021,
      "color": "White",
      "kilometers": 15000,
      "vin": "WAUZ2AF2XLN098765",
      "price": 37000,
      "images": ["https://linktoimage13.com", "https://linktoimage14.com"]
    },
    {
      "make": "Nissan",
      "model": "Altima",
      "year": 2020,
      "color": "Red",
      "kilometers": 20000,
      "vin": "1N4AL3AP8LC123456",
      "price": 23000,
      "images": ["https://linktoimage15.com", "https://linktoimage16.com"]
    },
    {
      "make": "Tesla",
      "model": "Model 3",
      "year": 2022,
      "color": "Blue",
      "kilometers": 10000,
      "vin": "5YJ3E1EA0MF123456",
      "price": 50000,
      "images": ["https://linktoimage17.com", "https://linktoimage18.com"]
    },
    {
      "make": "Hyundai",
      "model": "Elantra",
      "year": 2019,
      "color": "Silver",
      "kilometers": 40000,
      "vin": "KMHD84LF4KU123456",
      "price": 16000,
      "images": ["https://linktoimage19.com", "https://linktoimage20.com"]
    },
    {
      "make": "Kia",
      "model": "Sorento",
      "year": 2021,
      "color": "Green",
      "kilometers": 7000,
      "vin": "5XYPGDA57MG123456",
      "price": 35000,
      "images": ["https://linktoimage21.com", "https://linktoimage22.com"]
    },
    {
      "make": "Mazda",
      "model": "CX-5",
      "year": 2020,
      "color": "Yellow",
      "kilometers": 10000,
      "vin": "JM3KFBDM1L1156789",
      "price": 27000,
      "images": ["https://linktoimage23.com", "https://linktoimage24.com"]
    },
    {
      "make": "Chevrolet",
      "model": "Impala",
      "year": 2021,
      "color": "Black",
      "kilometers": 15000,
      "vin": "2G1WC5E33F1234567",
      "price": 28000,
      "images": ["https://linktoimage25.com", "https://linktoimage26.com"]
    },
    {
      "make": "Toyota",
      "model": "Corolla",
      "year": 2022,
      "color": "Gray",
      "kilometers": 8000,
      "vin": "5YFBURHE9LP123456",
      "price": 22000,
      "images": ["https://linktoimage27.com", "https://linktoimage28.com"]
    },
    {
      "make": "Honda",
      "model": "Accord",
      "year": 2021,
      "color": "White",
      "kilometers": 15000,
      "vin": "1HGCV1F34KA123456",
      "price": 28000,
      "images": ["https://linktoimage29.com", "https://linktoimage30.com"]
    },
    {
      "make": "Ford",
      "model": "Explorer",
      "year": 2022,
      "color": "Silver",
      "kilometers": 9000,
      "vin": "1FM5K7F84NGA12345",
      "price": 40000,
      "images": ["https://linktoimage31.com", "https://linktoimage32.com"]
    },
    {
      "make": "BMW",
      "model": "3 Series",
      "year": 2020,
      "color": "Red",
      "kilometers": 13000,
      "vin": "WBA8E3C56L6A12345",
      "price": 38000,
      "images": ["https://linktoimage33.com", "https://linktoimage34.com"]
    },
    {
      "make": "Mercedes-Benz",
      "model": "E-Class",
      "year": 2021,
      "color": "Blue",
      "kilometers": 8000,
      "vin": "WDDZF4JB8KA123456",
      "price": 58000,
      "images": ["https://linktoimage35.com", "https://linktoimage36.com"]
    },
    {
      "make": "Audi",
      "model": "Q5",
      "year": 2021,
      "color": "Black",
      "kilometers": 9000,
      "vin": "WA1BNAFY5B2174568",
      "price": 55000,
      "images": ["https://linktoimage37.com", "https://linktoimage38.com"]
    },
    {
      "make": "Lexus",
      "model": "RX 350",
      "year": 2020,
      "color": "Silver",
      "kilometers": 16000,
      "vin": "2T2BZMCA9LC123456",
      "price": 45000,
      "images": ["https://linktoimage39.com", "https://linktoimage40.com"]
    },
    {
      "make": "Jaguar",
      "model": "F-Pace",
      "year": 2021,
      "color": "Green",
      "kilometers": 7000,
      "vin": "SADCK2GX1KA123456",
      "price": 55000,
      "images": ["https://linktoimage41.com", "https://linktoimage42.com"]
    },
    {
      "make": "Land Rover",
      "model": "Discovery",
      "year": 2022,
      "color": "Black",
      "kilometers": 5000,
      "vin": "SALRG2RV9JA123456",
      "price": 67000,
      "images": ["https://linktoimage43.com", "https://linktoimage44.com"]
    },
    {
      "make": "Volvo",
      "model": "XC90",
      "year": 2021,
      "color": "White",
      "kilometers": 8000,
      "vin": "YV4A22PL0M1234567",
      "price": 60000,
      "images": ["https://linktoimage45.com", "https://linktoimage46.com"]
    },
    {
      "make": "Porsche",
      "model": "Macan",
      "year": 2020,
      "color": "Gray",
      "kilometers": 10000,
      "vin": "WP1AA2A53LL123456",
      "price": 70000,
      "images": ["https://linktoimage47.com", "https://linktoimage48.com"]
    },
    {
      "make": "Chrysler",
      "model": "Pacifica",
      "year": 2021,
      "color": "Blue",
      "kilometers": 11000,
      "vin": "2C4RC1BG7MR123456",
      "price": 35000,
      "images": ["https://linktoimage49.com", "https://linktoimage50.com"]
    },
    {
      "make": "Subaru",
      "model": "Outback",
      "year": 2021,
      "color": "Yellow",
      "kilometers": 7000,
      "vin": "4S4BSAFC4L3334567",
      "price": 32000,
      "images": ["https://linktoimage51.com", "https://linktoimage52.com"]
    },
    {
      "make": "Tesla",
      "model": "Model X",
      "year": 2022,
      "color": "Red",
      "kilometers": 3000,
      "vin": "5YJXCAE45KF123456",
      "price": 80000,
      "images": ["https://linktoimage53.com", "https://linktoimage54.com"]
    },
    {
      "make": "Lincoln",
      "model": "Navigator",
      "year": 2021,
      "color": "Green",
      "kilometers": 6000,
      "vin": "5LMJJ2JT0MEL12345",
      "price": 70000,
      "images": ["https://linktoimage55.com", "https://linktoimage56.com"]
    },
    {
      "make": "Ford",
      "model": "F-150",
      "year": 2020,
      "color": "Blue",
      "kilometers": 25000,
      "vin": "1FTEW1E59LKE12345",
      "price": 38000,
      "images": ["https://linktoimage57.com", "https://linktoimage58.com"]
    },
    {
      "make": "Chevrolet",
      "model": "Silverado 1500",
      "year": 2021,
      "color": "Silver",
      "kilometers": 15000,
      "vin": "3GCUYDET6MG123456",
      "price": 42000,
      "images": ["https://linktoimage59.com", "https://linktoimage60.com"]
    },
    {
      "make": "Honda",
      "model": "Pilot",
      "year": 2022,
      "color": "Black",
      "kilometers": 8000,
      "vin": "5FNYF6H5XNB123456",
      "price": 46000,
      "images": ["https://linktoimage61.com", "https://linktoimage62.com"]
    },
    {
      "make": "Hyundai",
      "model": "Santa Fe",
      "year": 2021,
      "color": "White",
      "kilometers": 9000,
      "vin": "5XYZU3LB5MG123456",
      "price": 38000,
      "images": ["https://linktoimage63.com", "https://linktoimage64.com"]
    },
    {
      "make": "Ram",
      "model": "1500",
      "year": 2021,
      "color": "Red",
      "kilometers": 12000,
      "vin": "1C6RR7YT4MN123456",
      "price": 42000,
      "images": ["https://linktoimage65.com", "https://linktoimage66.com"]
    },
    {
      "make": "GMC",
      "model": "Yukon",
      "year": 2020,
      "color": "Gray",
      "kilometers": 20000,
      "vin": "1GKS2BKC9LR123456",
      "price": 57000,
      "images": ["https://linktoimage67.com", "https://linktoimage68.com"]
    },
    {
      "make": "Nissan",
      "model": "Murano",
      "year": 2021,
      "color": "Silver",
      "kilometers": 8000,
      "vin": "5N1AZ2MH7MN123456",
      "price": 42000,
      "images": ["https://linktoimage69.com", "https://linktoimage70.com"]
    },
    {
      "make": "Toyota",
      "model": "Highlander",
      "year": 2022,
      "color": "Green",
      "kilometers": 6000,
      "vin": "5TDJXRBH2NS123456",
      "price": 48000,
      "images": ["https://linktoimage71.com", "https://linktoimage72.com"]
    },
    {
      "make": "Subaru",
      "model": "Ascent",
      "year": 2021,
      "color": "Yellow",
      "kilometers": 7000,
      "vin": "4S4WMAPD3M3401234",
      "price": 46000,
      "images": ["https://linktoimage73.com", "https://linktoimage74.com"]
    },
    {
      "make": "Mazda",
      "model": "CX-9",
      "year": 2021,
      "color": "Brown",
      "kilometers": 11000,
      "vin": "JM3TCBDY2M0165432",
      "price": 49000,
      "images": ["https://linktoimage75.com", "https://linktoimage76.com"]
    }
  ];

mongoose.connect('mongodb://localhost:27017/car_dealership', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  return Car.insertMany(carData);
}).then(() => {
  console.log('Data inserted successfully');
  mongoose.connection.close();
}).catch(err => {
  console.error(err);
  mongoose.connection.close();
});
