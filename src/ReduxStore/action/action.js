import ActionTypes from '../constant/constant';
import history from '../../History';

import * as firebase from 'firebase';



var config = {
  apiKey: "AIzaSyCmWpzhGTeWKc5CSazHihKBwlE2_Hhpu6U",
  authDomain: "final-project-74163.firebaseapp.com",
  databaseURL: "https://final-project-74163.firebaseio.com",
  projectId: "final-project-74163",
  storageBucket: "final-project-74163.appspot.com",
  messagingSenderId: "549580931363",
  appId: "1:549580931363:web:cb85a18e3c1a365283cc96"
};
firebase.initializeApp(config);



/////////////////////////////////////////// user login & signup /////////////////////////////////////////////

export function signupAction(createdUser) {
    console.log(createdUser);
    return dispatch => {
        console.log('user', createdUser);
        firebase.auth().createUserWithEmailAndPassword(createdUser.email, createdUser.password).then(({ user }) => {
            console.log(user.uid);
            createdUser.uid = user.uid;
            console.log(createdUser)
            firebase.database().ref().child('users/' + createdUser.uid + '/').set(createdUser)
                .then(() => {
                    let currentUserUid = firebase.auth().currentUser.uid;

                    dispatch({ type: ActionTypes.CURRENTUSER, payload: createdUser })
                    dispatch({ type: ActionTypes.AUTHED, payload: true })
                    localStorage.setItem('uid', currentUserUid)
                    history.push('/parking');
                })
        })
    }
}




export function signinAction(user) {
    console.log(history);
    return dispatch => {
        console.log('user in signin', user);


        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                let userid = signedinUser.user.uid
                console.log(userid);
                firebase.database().ref(`users/${userid}`).once('value')
                    .then((snapshot) => {
                        console.log(snapshot.val());
                        let currentUser = snapshot.val();
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUser })

                        dispatch({ type: ActionTypes.AUTHED, payload: true })
                        localStorage.setItem('uid', userid);
                        history.push('/parking');
                    })

            })
    }
}


  /////////////////////////////////////////// user login & signup /////////////////////////////////////////////

    export function parkingLocation(loca){
        console.log(loca);
        return dispatch => {
            firebase.database().ref(`/`).child(`parking/${loca}/`).on('value',
            (snapshot) => {
                // console.log(snapshot.val());
                let slots = snapshot.val()
                let sloptsArr= [];

                for(let key in slots){
                    sloptsArr.push(slots[key]);
                }
                console.log(sloptsArr);

                dispatch({ type: ActionTypes.GETSLOTS, payload: sloptsArr })
            })
                   
            
        }
    }

    export function slotbooking(ev){
        return dispatch => {
            console.log(ev);
            firebase.database().ref('/').child(`parking/${ev.area}/${ev.slot}/${ev.uid}/`).push(ev)
            .then((snapshot)=>{console.log("check it")})
        }
    }














  export function getSlotss(timeAndArea) {
    console.log(timeAndArea);
    return dispatch => {
        dispatch({type: ActionTypes.TIME , payload:timeAndArea })
        // let d = timeAndArea.date;
        // let st = timeAndArea.startingTime;
        // let et = timeAndArea.endingTime;

        // let obj = {
        //     // location:timeAndArea.area,
        //     date : d.toDateString(),
        //     startingTime: st.toTimeString(),
        //     endingTime: et.toTimeString(),
        // }        

        // console.log(obj)
        // firebase.database().ref(`/`).child(`parking/${timeAndArea.area}/booking`).set({
        //     obj
            
        // });
        // console.log('done');
    
    }
  }














  export function adminLogin(admin) {
    return dispatch => {
        console.log('user in signin', admin);
        firebase.auth().signInWithEmailAndPassword(admin.email, admin.password)
            .then((adminsignedinUser) => {
                firebase.database().ref('users/admin').once('value')
                    .then((userData) => {
                        let admincurrentUserUid1 = firebase.auth().currentUser.uid;
                        dispatch({type:ActionTypes.AUTHED , payload:true })
                        dispatch({ type: ActionTypes.ADMINLOGIN, payload: admincurrentUserUid1 })
                        history.push('/adminpanel');
                    })
            })
    }
}


////////////////////////////////////////signout ////////////////////////////////////////////////////
export function signout() {
    return dispatch => {
        // firebase.auth().onAuthStateChanged((user)=>{
        firebase.auth().signOut().then(function () {
            //    dispatch({type: ActionTypes.CURRENTUSER,payload:null})
            localStorage.clear()
            // console.log(user)
            history.push('/')
            window.location.reload();
        }).catch(function (error) {

        });

        // })
    }
}
////////////////////////////////////////signout ////////////////////////////////////////////////////
