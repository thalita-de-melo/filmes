// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnskgO2Vic8jlhwRyYXK8fx-u0AvOnfUQ",
    authDomain: "movies-5e976.firebaseapp.com",
    projectId: "movies-5e976",
    storageBucket: "movies-5e976.appspot.com",
    messagingSenderId: "1030495145180",
    appId: "1:1030495145180:web:802f81249c5f0afe1c3819"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  var colecao = db.collection("filmes");

  function getAllData() { //pega todos os documentos
  	colecao.get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
	        // doc.data() is never undefined for query doc snapshots
	        console.log(doc.id, " => ", doc.data());
	    });
	});
  }
  
  function getData() {
  	// pega todos os documentos com um determinado campo
  colecao.where("status", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }

    function adiciona($valor){
    	//adicionar um documento com id gerada automaticamente
	    colecao.add({
	    	nome: $valor,
	    	status: true
	    })
	    .then((docRef) => { //mensagem de sucesso
	    	console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => { //mensagem de erro
	    	console.error("Error adding document: ", error);
		});
    }

	function deletData(valor) {
		//deleta um documento especifico

		colecao.where("nome", "==", valor)
	    .get()
	    .then((querySnapshot) => {
	        querySnapshot.forEach((doc) => {
	            // doc.data() is never undefined for query doc snapshots
	            colecao.doc(doc.id).delete().then(() => {
			    	console.log("Document successfully deleted!");
					}).catch((error) => {
				    	console.error("Error removing document: ", error);
					});
	        });
	    })
	    .catch((error) => {
	        console.log("Error getting documents: ", error);
	    });
	}

	export {getData, getAllData, deletData, adiciona};