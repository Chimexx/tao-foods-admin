import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyD2o3OsnEqaxzSBy4ECJrIw0NnVneezI6w",
	authDomain: "tao-foods.firebaseapp.com",
	projectId: "tao-foods",
	storageBucket: "tao-foods.appspot.com",
	messagingSenderId: "985463550517",
	appId: "1:985463550517:web:5118d79b1e8cd206b7f77c",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
