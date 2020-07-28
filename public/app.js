const firebase = require('firebase');
document.addEventListener('DOMContentLoaded', event =>  {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    // try {
    //   let app = firebase.app();
    //   let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    //   document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    // } catch (e) {
    //   console.error(e);
    //   document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    // }
    
    const app = firebase.app();
    const db = firebase.firestore();
    
    const entries = db.collection('entries');

    // entries.get().then(doc => {
    //     const data = doc.data();
    //     // document.write ( data.title + '<br>')
    //     // document.write ( data.createdAt)
    //     console.log ( data.title + '<br>')
    //     console.log ( data.createdAt)
    // })

  });