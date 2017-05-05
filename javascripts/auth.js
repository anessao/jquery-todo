var FbAPI = ((oldFbAPI) => {
	oldFbAPI.registerUser = (credentials) => {
		return new Promise((resolve, reject) => {
			firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
			.then((authData) => {
				resolve(authData);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	oldFbAPI.loginUser = (userCreds) => {
		return new Promise((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(userCreds.email, userCreds.password)
			.then((authData) => {
				resolve(authData);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	oldFbAPI.credentialsCurrentUser = () => {
		return firebase.auth().currentUser;
	};

	oldFbAPI.logoutUser = () => {
		firebase.auth().signOut();
	};


	return oldFbAPI;
})(FbAPI || {});