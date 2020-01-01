//PUERTO

process.env.PORT = process.env.PORT || 3000;

//=====================================
//==========ENTORNO====================
//=====================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================================
//==========Vencimiento de token=======
//=====================================

process.env.CADUCIDA_TOKEN = '48h';



//=====================================
//==========SEED de autenfificacion=====
//=====================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-de-de-sarrollo';


//=====================================
//===========BASE DE DATOS=============
//=====================================
let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;
//=====================================
//===========CLIENT_ID=============
//=====================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '736826338166-1sh6okt0jff8g6i5rv750eqhkjk8rs55.apps.googleusercontent.com';