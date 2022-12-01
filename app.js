// Initialize Firebase
var config = {
	//TODO: DANIEL PONER LAS CRDENCIALES
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const productRef = dbRef.child('products');
const userListUI = document.getElementById("userList");

productRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.email;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", productClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}

function productClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('products/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}

var singinButton = document.querySelector("#insertarNuevo");

singinButton.addEventListener("click", writeUserData);



function writeUserData(e) {

	productRef.push( {
	  username: 'coca',
	  email: 'coca@gmail.com',
	  profile_picture : 'foto111',
	  pedido: 0,
	});
  }


