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
      "https://media.ed.edmunds-media.com/ford/escape/2020/oem/2020_ford_escape_4dr-suv_se_fq_oem_1_1600.jpg", 
      "https://s3.caradvice.com.au/wp-content/uploads/2016/11/2017-ford-escape-titanium-blue-jw-15.jpg", 
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/escape/2023/collections/dm/23_FRD_ESP_46629.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480", 
      "https://www.autobics.com/wp-content/uploads/2022/10/2023-Ford-Escape-Plug-In-Hybrid-Vapor-Blue-Front.jpg"
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
    "images": ["https://images.caricos.com/k/kia/2023_kia_sportage_eu/images/2560x1440/2023_kia_sportage_eu_49_2560x1440.jpg", "https://images.caricos.com/k/kia/2023_kia_sportage_eu/images/2560x1440/2023_kia_sportage_eu_47_2560x1440.jpg", "https://di-enrollment-api.s3.amazonaws.com/kia/models/2023/sportage/colors/vehicles/jungle_green.png", "https://www.evanshalshaw.com/-/media/evanshalshaw/kia/car-models/sportage/my22/hybrid/sportage-3-hybrid-720x405px.ashx"]
  },
  {
    "make": "Toyota",
    "model": "Camry",
    "year": 2020,
    "color": "White",
    "kilometers": 15000,
    "vin": "4T1B11HK4LU022220",
    "price": 25000,
    "images": ["https://dealerimages.dealereprocess.com/image/upload/1841003.jpg", "https://3.bp.blogspot.com/-G_JuMqiTgnM/WUpowkjVInI/AAAAAAAA20o/awKGfcCb10oX7mBCVu16vvLfUgti-OqJwCLcBGAs/s1600/2018_Toyota_Camry_41.jpg", "https://i.ytimg.com/vi/JMU7-KVtXfc/maxresdefault.jpg", "https://www.motorbiscuit.com/wp-content/uploads/2022/09/Front-angle-view-of-new-2023-Toyota-Camry-midsize-sedan-highlighting-how-much-a-fully-loaded-version-costs.jpg?w=1200"]
  },
  {
    "make": "Honda",
    "model": "Civic",
    "year": 2021,
    "color": "Blue",
    "kilometers": 12000,
    "vin": "2HGFC2F54MH565789",
    "price": 22000,
    "images": ["https://di-uploads-pod5.dealerinspire.com/brownautogroup/uploads/2018/06/2018-Honda-Civic-COLOR-AegeanBlue.jpg", "https://2.bp.blogspot.com/-SoYvq4RChxU/W1aEj7URKWI/AAAAAAAAIG8/HodkCUi3iBkc2i8ZveIAkB0RT9BDQBpNACLcBGAs/s1600/Honda-Civic-Si%2B%252822%2529.jpg", "https://di-uploads-pod5.dealerinspire.com/brownautogroup/uploads/2018/06/2018-Honda-Civic-COLOR-AegeanBlue.jpg", "https://www.roadsmile.com/images/honda-civic_blue_10.jpg"]
  },
  {
    "make": "Ford",
    "model": "Mustang",
    "year": 2022,
    "color": "Red",
    "kilometers": 5000,
    "vin": "1FA6P8TH1J5134567",
    "price": 35000,
    "images": ["https://www.pngmart.com/files/10/Red-Ford-Mustang-PNG-HD.png", "https://mustangattitude.com/mustang/2019/2019_00018_01.jpg", "https://wallpaperaccess.com/full/1741657.jpg", "https://www.hdwallpapers.in/download/red_2024_ford_mustang_gt_convertible_car_4k_5k_hd_cars-HD.jpg"]
  },
  {
    "make": "Chevrolet",
    "model": "Malibu",
    "year": 2020,
    "color": "Silver",
    "kilometers": 18000,
    "vin": "1G1ZD5ST3LF123456",
    "price": 23000,
    "images": ["https://media.graphassets.com/VHbbyWzyR9qt5HRltusQ", 
                "https://www.motortrend.com/files/663ccc99b53e720008808318/2025chevymalibugenerator10.png?w=768&width=768&q=75&format=webp", 
                "https://inventory-dmg.assets-cdk.com/ChromeColorMatch/us/WHITE_cc_2020CHC110001_01_1280_GAN.jpg", 
                "https://img2.carmax.com/assets/26552404/hero.jpg?width=400&height=300"]
  },
  { 
    "make": "BMW",
    "model": "X5",
    "year": 2019,
    "color": "Black",
    "kilometers": 30000,
    "vin": "5UXKR6C57KLL654321",
    "price": 48000,
    "images": ["https://www.hdwallpapers.in/download/bmw_bmw_x5_black_car_luxury_car_suv_4k_hd_cars-2560x1440.jpg", "https://www.hdwallpapers.in/download/bmw_x5_m50i_edition_black_vermilion_2021_4k_5k_hd_cars-1600x900.jpg", "https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f4251091e3d8e88cb10/stills_0640_png/MY2022/15302/15302_st0640_116.png", "https://th.bing.com/th/id/R.449b089ce0c9866c4b84828294cdf7c3?rik=iNxyf%2bdedKblcw&pid=ImgRaw&r=0"]
  },
  {
    "make": "Mercedes-Benz",
    "model": "C-Class",
    "year": 2020,
    "color": "Gray",
    "kilometers": 22000,
    "vin": "WDDWK4JB5LF765432",
    "price": 45000,
    "images": ["https://purepng.com/public/uploads/large/purepng.com-grey-mercedes-benz-c-class-coupe-carcarvehicletransportmercedes-benz-9615246453744edlm.png", "http://www.hongliyangzhi.com/manufacturers/mercedes-benz/mercedes-benz-c-class/mercedes-benz-c-class-grey/mercedes-benz-c-class-grey-1.jpg", "https://wallpaper.caricos.com/2019-Mercedes-Benz-C-300-de-Diesel-Plug-in-Hybrid-Sedan-%28Color-Selenite-Grey-Shape%29---Front-Three-Quarter-181095-2560x1440.jpg", "https://i.ytimg.com/vi/aMjTPb82lbg/maxresdefault.jpg"]
  },
  {
    "make": "Audi",
    "model": "A4",
    "year": 2021,
    "color": "White",
    "kilometers": 15000,
    "vin": "WAUZ2AF2XLN098765",
    "price": 37000,
    "images": ["https://s1.1zoom.me/big3/907/Audi_2015_A4_2.0_TDI_453230.jpg", "https://www.publicdomainpictures.net/pictures/210000/velka/white-audi-a4-saloon-car.jpg", "https://images.carid.com/inspiration/audi/a4/61/3.jpg", "https://i.pinimg.com/originals/a1/c7/d0/a1c7d05410959ff75aa51b18a47ea4b8.jpg"]
  },
  {
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "color": "Red",
    "kilometers": 20000,
    "vin": "1N4AL3AP8LC123456",
    "price": 23000,
    "images": ["https://www.autotrader.com/wp-content/uploads/2021/11/2022-nissan-altima-vc-t-sr-front-right.jpg", "https://cdn.jdpower.com/JDP_2023%20Nissan%20Altima%20SL%20Garnet%20Pearl%20Red%20Front-Quarter-View.jpg", "https://www.motortrend.com/uploads/2023/03/2023-Nissan-Altima-2.5SL-AWD-015-front-three-quarter-in-motion.jpg", "https://cdn.jdpower.com/JDP_2023%20Nissan%20Altima%20SL%20Garnet%20Pearl%20Red%20Front-Quarter-View.jpg"]
  },
  {
    "make": "Tesla",
    "model": "Model 3",
    "year": 2022,
    "color": "Blue",
    "kilometers": 10000,
    "vin": "5YJ3E1EA0MF123456",
    "price": 50000,
    "images": ["https://www.motorbiscuit.com/wp-content/uploads/2022/11/Front-angle-view-of-new-2023-Tesla-Model-3-electric-car-with-Deep-Blue-Metallic-exterior-paint-color.jpg?w=1200", "https://images.squarespace-cdn.com/content/v1/5b2437bcc3c16a6fea91cd4d/1647014146915-8NLOG4T85NVYACA5JJJU/2022-03-10+11.19.58.jpg", "https://i.gaw.to/content/photos/61/08/610886-tesla-model-3-2024-enfin-une-vraie-voiture.jpeg", "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/01/2024-tesla-model-3-highland.jpg"]
  },
  {
    "make": "Hyundai",
    "model": "Elantra",
    "year": 2019,
    "color": "Silver",
    "kilometers": 40000,
    "vin": "KMHD84LF4KU123456",
    "price": 16000,
    "images": ["https://vicimus-glovebox7.s3.us-east-2.amazonaws.com/photos/k7sVTBgmdUHJ/KMHD84LF2LU091024/d100de268bd0812c86f71fe1734af8b6.jpg", "https://roadtestdotorg.wordpress.com/wp-content/uploads/2012/01/2012-hyundai-elantra-sedan.jpg?w=500", "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/classifieds/8/0b/80b17283-94b6-55b6-bcc6-45a10ffd68f7/5ecb0d2e4cf06.image.jpg", "https://s3.amazonaws.com/di-enrollment-api/hyundai/models/2020/elantra/exterior/silver.jpg"]
  },
    {
      "make": "Kia",
      "model": "Sorento",
      "year": 2021,
      "color": "Green",
      "kilometers": 7000,
      "vin": "5XYPGDA57MG123456",
      "price": 35000,
      "images": [
        "https://cdn-ds.com/blogs-media/sites/420/2024/06/04180124/2024-Kia-Sorento-Jungle-Green.jpg",
        "https://cdn-ds.com/blogs-media/sites/420/2024/06/04180125/2024-Kia-Sorento-Midnight-Lake-Blue.jpg",
        "https://cdn-ds.com/blogs-media/sites/420/2024/06/04180124/2024-Kia-Sorento-Jungle-Green.jpg",
        "https://cdn-ds.com/blogs-media/sites/420/2024/06/04180126/2024-Kia-Sorento-Road-Rider-Brown.jpg"
      ]
    },
    {
      "make": "Mazda",
      "model": "CX-5",
      "year": 2020,
      "color": "Yellow",
      "kilometers": 10000,
      "vin": "JM3KFBDM1L1156789",
      "price": 27000,
      "images": [
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-21.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-39.jpg?w=892&h=502",
        "https://www.topgear.com/sites/default/files/cars-car/carousel/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-53.jpg?w=892&h=502"
      ]
    },
    {
      "make": "Chevrolet",
      "model": "Impala",
      "year": 2021,
      "color": "Black",
      "kilometers": 15000,
      "vin": "2G1WC5E33F1234567",
      "price": 28000,
      "images": [
        "https://s1.cdn.autoevolution.com/images/news/gallery/1960-chevrolet-impala-black-beauty-can-ride-high-or-low-and-looks-astounding-either-way_4.jpg",
        "https://s1.cdn.autoevolution.com/images/news/gallery/1960-chevrolet-impala-black-beauty-can-ride-high-or-low-and-looks-astounding-either-way_1.jpg",
        "https://s1.cdn.autoevolution.com/images/news/gallery/1960-chevrolet-impala-black-beauty-can-ride-high-or-low-and-looks-astounding-either-way_6.jpg",
        "https://s1.cdn.autoevolution.com/images/news/gallery/1960-chevrolet-impala-black-beauty-can-ride-high-or-low-and-looks-astounding-either-way_10.jpg"
      ]
    },
    {
      "make": "Toyota",
      "model": "Corolla",
      "year": 2022,
      "color": "Gray",
      "kilometers": 8000,
      "vin": "5YFBURHE9LP123456",
      "price": 22000,
      "images": [
        "https://toyotacanada.scene7.com/is/image/toyotacanada/2021_Corolla_Apex_9?ts=1689854460815&$Media-Large$&dpr=off",
        "https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2020/07/classic_silver_metallic.png",
        "https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2020/07/blizzard_pearl.png",
        "https://di-uploads-pod1.dealerinspire.com/earlstewarttoyota/uploads/2020/07/black_sand_pearl.png"
      ]
    },
    {
      "make": "Honda",
      "model": "Accord",
      "year": 2021,
      "color": "White",
      "kilometers": 15000,
      "vin": "1HGCV1F34KA123456",
      "price": 28000,
      "images": [
        "https://vehicle-images.dealerinspire.com/b2ed-110007895/1HGCY2F70RA081161/c1d9b49cb4d7eea785ae616c68fb7d63.jpg",
        "https://vehicle-images.dealerinspire.com/fdbe-110007895/1HGCY2F70RA081161/0e78f9789533d3d847007ac0e9a5dfce.jpg",
        "https://vehicle-images.dealerinspire.com/b0b1-110007895/1HGCY2F70RA081161/fcf17b9310b394da82fcc139528e148c.jpg",
        "https://vehicle-images.dealerinspire.com/9f67-110007895/1HGCY2F70RA081161/97b99714b2bbcaa0f89c3aeb8b2fda1b.jpg"
      ]
    },
    {
      "make": "Ford",
      "model": "Explorer",
      "year": 2022,
      "color": "Silver",
      "kilometers": 9000,
      "vin": "1FM5K7F84NGA12345",
      "price": 40000,
      "images": [
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/IyQMUTvhngP2.HgtU_jGYc.jpg?t=161586234053",
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/360d4748cf103ccc8156a0d94596456ca0512c29/photos/v17H7T4fI7.zVotkmMN_.jpg?t=161557695123",
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/d78357c508a6da7daf4b589035b84347ec6476be/photos/VvalMUQynxp.jpg?t=161491968173",
        "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/360d4748cf103ccc8156a0d94596456ca0512c29/photos/K6Cx-mTsSLd.FS-zWdAfJT.jpg?t=161557695383"
      ]
    },
    {
      "make": "BMW",
      "model": "3 Series",
      "year": 2020,
      "color": "Red",
      "kilometers": 13000,
      "vin": "WBA8E3C56L6A12345",
      "price": 38000,
      "images": [
        "https://i.pinimg.com/1200x/51/d9/8b/51d98b4cbc691c7ad203729bb449a357.jpg",
        "https://images.carid.com/inspiration/bmw/3-series/236/3.jpg",
        "https://cdn.bmwblog.com/wp-content/uploads/2022/11/2023-bmw-m340i-melbourne-red-43.jpg",
        "https://i.pinimg.com/1200x/9e/41/42/9e4142f3ac6700e1a707504340c59be1.jpg"
      ]
    },
    {
      "make": "Mercedes-Benz",
      "model": "E-Class",
      "year": 2021,
      "color": "Blue",
      "kilometers": 8000,
      "vin": "WDDZF4JB8KA123456",
      "price": 58000,
      "images": [
        "https://di-uploads-pod9.dealerinspire.com/mercedesbenzofdurham/uploads/2020/04/MBCAN-2020-E-COUPE-GAL-004-B-FE-DR.jpg",
        "https://di-uploads-pod9.dealerinspire.com/mercedesbenzofdurham/uploads/2020/04/MBCAN-2020-E-SEDAN-GAL-002-R-FE-DR.jpg",
        "https://di-uploads-pod9.dealerinspire.com/mercedesbenzofdurham/uploads/2020/04/MBCAN-2020-E-CABRIOLET-GAL-007-O-FE-DR.jpg",
        "https://di-uploads-pod9.dealerinspire.com/mercedesbenzofdurham/uploads/2020/04/MBCAN-2020-E-SEDAN-GAL-001-R-FE-DR.jpg"
      ]
    },
    {
      "make": "Audi",
      "model": "Q5",
      "year": 2021,
      "color": "Black",
      "kilometers": 9000,
      "vin": "WA1BNAFY5B2174568",
      "price": 55000,
      "images": [
        "https://abstoragev4.blob.core.windows.net/auctions/44381/large/44381-1d_ex.jpg",
        "https://abstoragev4.blob.core.windows.net/auctions/44381/large/44381-1f_ex.jpg",
        "https://abstoragev4.blob.core.windows.net/auctions/44381/large/44381-1i_ex.jpg",
        "https://abstoragev4.blob.core.windows.net/auctions/44381/large/44381-1n_ex.jpg"
      ]
    },
    {
      "make": "Lexus",
      "model": "RX 350",
      "year": 2020,
      "color": "Silver",
      "kilometers": 16000,
      "vin": "2T2BZMCA9LC123456",
      "price": 45000,
      "images": [
        "https://s3.amazonaws.com/lexus.site.lexus/tci-prod/lexus/media/build/rx/col/big/b25_bamcat_fl2_0083_h.png?ck=12102024035355",
        "https://s3.amazonaws.com/lexus.site.lexus/tci-prod/lexus/media/build/rx/col/big/b25_bamcat_fr1_0083_h.png?ck=12102024035355",
        "https://s3.amazonaws.com/lexus.site.lexus/tci-prod/lexus/media/build/rx/col/big/b25_bamcat_pr_0083_h.png?ck=12102024035355",
        "https://s3.amazonaws.com/lexus.site.lexus/tci-prod/lexus/media/build/rx/col/big/b25_bamcat_rl0_0083_h.png?ck=12102024035355"
      ]
    },
    {
      "make": "Jaguar",
      "model": "F-Pace",
      "year": 2021,
      "color": "Green",
      "kilometers": 7000,
      "vin": "SADCK2GX1KA123456",
      "price": 55000,
      "images": [
        "https://assets.jaguarlandrover.com/asset/5278/24B1EBC42E024A9B88F5C91D2A34FB64.jpg",
        "https://assets.jaguarlandrover.com/asset/5277/EF3E8705AA63438A833CE57D587DD2C8.jpg",
        "https://assets.jaguarlandrover.com/asset/5276/1E2130AB6C444F8B9D9D40126E7B9F7D.jpg",
        "https://assets.jaguarlandrover.com/asset/5275/BB6ED49695F2445A90F7AB545CDFA145.jpg"
      ]
    },
    {
      "make": "Land Rover",
      "model": "Discovery",
      "year": 2022,
      "color": "Black",
      "kilometers": 5000,
      "vin": "SALRG2RV9JA123456",
      "price": 67000,
      "images": ["https://img.autobytel.com/chrome/colormatched_01/white/640/cc_2018lrs110001_01_640/cc_2018lrs110001_01_640_1at.jpg", 
                  "https://img.sm360.ca/images/article/dilawri-group-of-companies/120528//2024-land-rover-discovery-sport1697654796248.jpg",
                  "https://vehicle-images.dealerinspire.com/6f8e-11001579/SALCJ2FX1SH358831/0d762bc569a259ead250bff80c1f9eab.jpg",
                  "https://9512242f70552c1e6eb6-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/land-rover/discovery/2021-Land-Rover-Discover-color-Santorini-Black.png"]
    },
    {
      "make": "Volvo",
      "model": "XC90",
      "year": 2021,
      "color": "White",
      "kilometers": 8000,
      "vin": "YV4A22PL0M1234567",
      "price": 60000,
      "images": ["https://cas.volvocars.com/image/dynamic/MY25_2417/256/exterior-v1/58/70700/RC0000/R145/TC05/_/2G03/TJ04/TP02/LR02/JT02/GR03/T102/NP03/TM02/JG02/_/EV02/JB0B/T21C/LF01/_/VP07/UF02/FH02/_/_/TY03/TR07/default.jpg?market=ca&client=pdps&angle=3&w=1920&bg=descriptive-studio",
                  "https://www.motortrend.com/uploads/sites/5/2020/06/2020-Volvo-XC90-T8-E-AWD-Inscription-30.jpg?w=768&width=768&q=75&format=webp", 
                  "https://assets.choosemycar.com/vehicles/large/4351536_552_4748_vehicle-4351536-001-20240205-062912-a386cf8cd76be1f39259fadb4a0750ed087f8e57923621c6d6239fe956d40ccc.jpg",
                  "https://www.birchwood.ca/wp-content/uploads/2021/11/xc90-gallery-19-16x9-1.jpg",
                  ]
    },
    {
      "make": "Porsche",
      "model": "Macan",
      "year": 2020,
      "color": "Gray",
      "kilometers": 10000,
      "vin": "WP1AA2A53LL123456",
      "price": 70000,
      "images": ["https://vehicle-images.dealerinspire.com/stock-images/porsche/a184ed27af4c09bdbfa9f90ec6b4a8eb.jpg", 
                  "https://vehicle-images.dealerinspire.com/stock-images/porsche/c930e17a7bb37e16d289ba884e104cd4.jpg",
                  "https://www.macanforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.macanforum.com/attachments/1649863690881-png.254504/",
                  "https://www.millermotorcars.com/imagetag/5823/15/l/Used-2017-Porsche-Macan-Turbo.jpg" ]
    },
    {
      "make": "Chrysler",
      "model": "Pacifica",
      "year": 2021,
      "color": "Blue",
      "kilometers": 11000,
      "vin": "2C4RC1BG7MR123456",
      "price": 35000,
      "images": ["https://images.hgmsites.net/hug/2019-chrysler-pacifica_100705996_h.jpg", 
                  "https://static.overfuel.com/photos/334/148570/image-1.webp",
                  "https://www.autoblog.com/.image/t_share/MjA5MTMxMDE3MDcxMDQ0MjA4/image-placeholder-title.jpg",
                  "https://www.autotrader.ca/editorial/media/161923/2018-chrysler-pacifica-limited-01-mb.jpg?rxy=0.49327354260089684,0.6174496644295302&width=1920&height=1080&v=1d47b8948a07bc0"]
    },
    {
      "make": "Subaru",
      "model": "Outback",
      "year": 2021,
      "color": "Red",
      "kilometers": 7000,
      "vin": "4S4BSAFC4L3334567",
      "price": 32000,
      "images": ["https://www.motortrend.com/uploads/sites/5/2017/11/2018-Subaru-Outback-2.5i-front-three-quarter-in-motion-02.jpg", 
                  "https://www.williamssubaru.com/blogs/4515/wp-content/uploads/2022/10/Subaru-Outback-Dealer-2023-Subaru-Outback-Red.jpg",
                  "https://cdn.images.stock.i-motor.net.au/vehicles/large/2975900-18298-2acd8c1e-bb7d-5c4e-8f6c-f0225a61a8d6.jpg",
                  "https://www.chasingcars.com.au/wp-content/uploads/2022/05/Outback-LT-Intro-Stills-3.jpg"]
    },
    {
      "make": "Tesla",
      "model": "Model X",
      "year": 2022,
      "color": "Red",
      "kilometers": 3000,
      "vin": "5YJXCAE45KF123456",
      "price": 80000,
      "images": ["https://cdn.motor1.com/images/mgl/pbjv2W/s1/2023-tesla-model-x-ultra-red-color.webp", "https://teslamotorsclub.com/tmc/attachments/img_4424-jpg.843145/?id=6981196", "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/01/2024-tesla-model-x.webp", "https://gallery.automobilemag.com/gallery/2023-tesla-model-x-ultra-red-1360x900.jpg"]
    },
    {
      "make": "Lincoln",
      "model": "Navigator",
      "year": 2021,
      "color": "Green",
      "kilometers": 6000,
      "vin": "5LMJJ2JT0MEL12345",
      "price": 70000,
      "images": ["https://imagecdnsa.zigwheels.ae/large/gallery/exterior/23/1802/lincoln-navigator-full-front-view-726110.jpg",
                  "https://theknockturnal.com/wp-content/uploads/2021/08/2022-Lincoln-Navigator_Manhattan-Green-Black-Label_03-scaled-e1630082782147.jpg", 
                  "https://linktoimage56.com",
                  "https://www.autopediame.com/storage/images/Lincoln/navigator%202023/2024%20Lincoln%20Navigator%20rear.jpg"]
    },
    {
      "make": "Ford",
      "model": "F-150",
      "year": 2020,
      "color": "Black",
      "kilometers": 25000,
      "vin": "1FTEW1E59LKE12345",
      "price": 38000,
      "images": ["https://cdn-ds.com/blogs-media/sites/71/2023/10/02173652/E6-2024-Ford_F150_Platinum-Black-Edition_A1_o.jpg", 
                  "https://www.ford.ca/is/image/content/dam/vdm_ford/live/en_ca/ford/nameplate/f-150f-150/2025/collections/dm/24_FRD_F15_STX_BlackPack.tif?croppathe=1_4x3&wid=2160",
                  "https://sickdieselgear.com/cdn/shop/files/2024-Ford-F150-Platinum-and-Black_04_1_1.jpg?v=1724851968",
                  "https://zopsoftware-asset.b-cdn.net/upload/d9aed15ebef5f05f4a5fd1bb56d1f8e9/1725846261_baa7d4e2873a1273c441.jpeg"]
    },
    {
      "make": "Chevrolet",
      "model": "Silverado 1500",
      "year": 2021,
      "color": "Silver",
      "kilometers": 15000,
      "vin": "3GCUYDET6MG123456",
      "price": 42000,
      "images": ["https://di-uploads-pod14.dealerinspire.com/edwardschevy280/uploads/2024/03/2024-Chevy-Silverado-1500-RST-Model-Left-728x400.jpg", "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/trucks/silverado-ld/mov/02-images/special-editions/2025-ldretail-redlineedition.png?imwidth=1200", "https://i.ytimg.com/vi/e3JwmikxHQw/maxresdefault.jpg", "https://content.homenetiol.com/2000292/2143540/0x0/296d6cb766754849b8d95734c11c9cf3.jpg"]
    },
    {
      "make": "Honda",
      "model": "Pilot",
      "year": 2022,
      "color": "Black",
      "kilometers": 8000,
      "vin": "5FNYF6H5XNB123456",
      "price": 46000,
      "images": ["https://www.ctvnews.ca/polopoly_fs/1.4531092.1564583113!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg", 
                  "https://www.theautochannel.com/news/2020/02/09/803628-2020-honda-pilot-black-edition-rocky-mountain-review-by-dan.1-lg.jpg",
                  "https://s1.cdn.autoevolution.com/images/news/gallery/honda-pilot-black-edition-virtually-joins-trailsport-as-fashionable-street-trim_7.jpg",
                  "https://autonxt.net/wp-content/uploads/2019/09/2020-Honda-Pilot-Black-Ediiton1.jpg"]
    },
    {
      "make": "Hyundai",
      "model": "Santa Fe",
      "year": 2021,
      "color": "White",
      "kilometers": 9000,
      "vin": "5XYZU3LB5MG123456",
      "price": 38000,
      "images": ["https://media.ed.edmunds-media.com/hyundai/santa-fe-sport/2017/oem/2017_hyundai_santa-fe-sport_4dr-suv_20t-ultimate_fq_oem_1_1600.jpg", 
                  "https://wtop.com/wp-content/uploads/2019/08/Image-from-iOS-15-1672x1254.jpg",
                  "https://blog.consumerguide.com/wp-content/uploads/sites/2/2021/07/20210531_161300.jpg",
                  "https://limitedslipblog.com/wp-content/uploads/2014/05/hyundai-santa-fe-5.jpg"]
    },
    {
      "make": "Ram",
      "model": "1500",
      "year": 2021,
      "color": "Red",
      "kilometers": 12000,
      "vin": "1C6RR7YT4MN123456",
      "price": 42000,
      "images": ["https://cdn-fastly.thetruthaboutcars.com/media/2022/11/15/12531/2022-ram-1500-rebel-review-lil-red-imperial-express.jpg?size=1200x628", 
                  "https://autoimage.capitalone.com/cms/Auto/assets/images/2722-hero-2024-ram-1500-rebel.jpg",
                  "https://www.motortrend.com/uploads/sites/3/2021/07/008_2022_Ram_1500_Laramie_GT.jpg?w=768&width=768&q=75&format=webp",
                  "https://i.redd.it/pqtpu0rczd681.jpg"]
    },
    {
      "make": "GMC",
      "model": "Yukon",
      "year": 2020,
      "color": "Gray",
      "kilometers": 20000,
      "vin": "1GKS2BKC9LR123456",
      "price": 57000,
      "images": ["https://cdn.jdpower.com/JDPA_2021%20GMC%20Yukon%20Denali%20Gray%20Front%20Quarter%20View.jpg", 
                  "https://cdn.jdpower.com/JDPA_2021%20GMC%20Yukon%20Denali%20Gray%20Front%20Quarter%20View.jpg",
                  "https://hips.hearstapps.com/hmg-prod/images/2025-gmc-yukon-at4-ultimate-308-66be4bc615411.jpg?crop=0.660xw:0.605xh;0.158xw,0.314xh&resize=980:*",
                  "https://images.cars.com/cldstatic/wp-content/uploads/gmc-yukon-denali-2021-24-angle--exterior--front--silver.jpg"]
    },
    {
      "make": "Nissan",
      "model": "Murano",
      "year": 2021,
      "color": "Silver",
      "kilometers": 8000,
      "vin": "5N1AZ2MH7MN123456",
      "price": 42000,
      "images": ["https://www.carnewscafe.com/wp-content/uploads/2015/05/2015-05-10-19.18.44.jpg", 
                  "https://assets6.motorfuse.com/assets/global/VTO/1290/5N1AZ2DS3PC120347-2.jpg",
                  "https://i0.wp.com/surangel.com/wp-content/uploads/2022/02/image002-17.jpg?resize=1053%2C593&ssl=1",
                  "https://media.ed.edmunds-media.com/nissan/murano/2006/oem/2006_nissan_murano_4dr-suv_sl_s_oem_1_500.jpg"]
    },
    {
      "make": "Toyota",
      "model": "Highlander",
      "year": 2022,
      "color": "Green",
      "kilometers": 6000,
      "vin": "5TDJXRBH2NS123456",
      "price": 48000,
      "images": ["https://cdn.motor1.com/images/mgl/0eJ7qn/s1/2023-toyota-highlander-turbo-limited-cypress-green.webp", 
                  "https://static.wixstatic.com/media/1377dc_95424095e62f416681be130660ed9f80~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/1377dc_95424095e62f416681be130660ed9f80~mv2.jpg",
                  "https://autoimage.capitalone.com/cms/Auto/assets/images/2872-inset11-2024-toyota-highlander.jpg",
                  "https://cdn-fastly.autoguide.com/media/2023/06/29/13439038/toyota-highlander-review-specs-pricing-features-videos-and-more.jpg?size=720x845&nocrop=1"]
    },
    {
      "make": "Subaru",
      "model": "Ascent",
      "year": 2021,
      "color": "Blue",
      "kilometers": 7000,
      "vin": "4S4WMAPD3M3401234",
      "price": 46000,
      "images": ["https://media.ed.edmunds-media.com/subaru/ascent/2025/oem/2025_subaru_ascent_4dr-suv_bronze-edition_fq_oem_1_1600.jpg", 
                  "https://dealerimages.dealereprocess.com/image/upload/v1693238097/1/Subaru/2024_Ascent/24_ASC_hero_1.png",
                    "https://lp-auto-assets.s3.amazonaws.com/23/subaru/ascent/m3/header.jpg",
                    "https://m.subaru.ca/content/7907/media/General/360/2024/Ascent/2024_Subaru%20Ascent_Premier_Cosmic_Blue_Pearl_0031.jpg"]
    },
    {
      "make": "Mazda",
      "model": "CX-9",
      "year": 2021,
      "color": "Brown",
      "kilometers": 11000,
      "vin": "JM3TCBDY2M0165432",
      "price": 49000,
      "images": ["https://cloudflareimages.dealereprocess.com/resrc/images/dep_asset,c_limit,dpr_3.0,f_auto,fl_lossy,q_80,w_500/590098-L2hvbWUvZGVhbGVycy9hc3NldHMvMjQvaW1hZ2VzLzU5MDA5OC0zLmpwZw==", 
                  "https://sayartii.com/uploads/cars/17592199957746/af02e88f9933851d3e11cc36319acea72381996d_med.jpg",
                  "https://cdn-fastly.thetruthaboutcars.com/media/2022/07/19/9219843/we-re-driving-a-2016-mazda-cx-9-signature-which-is-very-expensive-and-very-good.jpg?size=720x845&nocrop=1",
                  "https://dealerimages.dealereprocess.com/image/upload/1585256.jpg"]
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
