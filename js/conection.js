//getData(document.getElementById('usuario').value,document.getElementById('senha').value)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnskgO2Vic8jlhwRyYXK8fx-u0AvOnfUQ",
  authDomain: "movies-5e976.firebaseapp.com",
  projectId: "movies-5e976",
  storageBucket: "movies-5e976.appspot.com",
  messagingSenderId: "1030495145180",
  appId: "1:1030495145180:web:802f81249c5f0afe1c3819",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

var colecao = db.collection("users");

function procuraAleatorio() {
  //pega todos os documentos
  var lista = [];
  var i = 0;
  let tamanho = 0;

  colecao.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());

      lista[i] = doc.get("nome");
      console.log(lista[i]);
      tamanho = lista.length;
      //console.log(tamanho);
      i++;
    });
    const rndInt = Math.floor(Math.random() * tamanho) + 1;
    var id = lista[rndInt];
    console.log(id);
    setAleatorio(id);
  });
}

function getAllData() {
  //pega todos os documentos

  colecao.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      i++;
    });
  });
}

function getData() {
  // pega todos os documentos com um determinado campo
  colecao
    .where("status", "==", true)
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

function getDataUser($usuario, $senha) {
  // pega todos os documentos com um determinado campo
  colecao
    .where("usuario", "==", $usuario)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data().nome);
        if ($senha == doc.data().senha) {
          $nome = doc.data().nome;
          console.log($nome);
        }
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function login($usuario, $senha) {
  if (getDataUser($usuario, $senha) == false) {
    alert("usuario não cadastrado");
  } else {
    window.open("menu.html", "_self");
    alert(getDataUser($usuario, $senha));
  }
}

function adiciona($valor) {
  //adicionar um documento com id gerada automaticamente
  const rndInt = Math.floor(Math.random() * 100) + 1;
  colecao
    .add({
      id: rndInt,
      nome: $valor,
      status: true,
    })
    .then((docRef) => {
      //mensagem de sucesso
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      //mensagem de erro
      console.error("Error adding document: ", error);
    });
}

function deletData(valor) {
  //deleta um documento especifico

  colecao
    .where("nome", "==", valor)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        colecao
          .doc(doc.id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function setAleatorio($id) {
  //const rndInt = Math.floor(Math.random() * 100) + 1
  //console.log(rndInt);

  colecao
    .where("nome", "==", $id) // precisa modificar o if no firebase pra parar de dar erro
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

function movie() {
  var valor = document.getElementById("input-txt").value;

  console.log(valor);

  adiciona(valor);
}
