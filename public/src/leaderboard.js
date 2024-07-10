import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getDatabase, ref, get, child } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js';


  function create_body() {
    var lead_data = []
    var lead_under_data = []
    var lead_over_data = []
    

    // Create a div to hold the leaderboard
    var leaderboard = document.createElement('div')
    leaderboard.id = 'leaderboard'
    document.body.appendChild(leaderboard)

    // Get the firebase database value
    const firebaseConfig = {
      apiKey: "AIzaSyATjRpcC0oqPD_ZtgyYNh0lDd5aWbZMUCw",
      authDomain: "kiwanis-1be5f.firebaseapp.com",
      databaseURL: "https://kiwanis-1be5f-default-rtdb.firebaseio.com",
      projectId: "kiwanis-1be5f",
      storageBucket: "kiwanis-1be5f.appspot.com",
      messagingSenderId: "65582946152",
      appId: "1:65582946152:web:8955b62a8d921c2f5568dd",
      measurementId: "G-9YWDQF8WDL"
    };

    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
    var db = getDatabase(app);

    get(child(ref(db), `108Aze-c5krJ2MkYIvc29M3rVv0_AAP9CmJTCJhFieAg/Sheet1`)).then((snapshot) => {
      if (snapshot.exists()) {
        var num = snapshot.size + 1
        var lead_data = []

        for (var i, i = 1; (i < num); i++) {
          var j = 1

          get(child(ref(db, '108Aze-c5krJ2MkYIvc29M3rVv0_AAP9CmJTCJhFieAg/'), `Sheet1/${i}/Age`)).then((snapshot) => {
            if (snapshot.exists()) {
              /*var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead.setAttribute("style", "display: inline-block; width: 50%")
              lead_in.innerHTML = j + " " + snapshot.val()
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
              j++*/
              lead_data.push(snapshot.val())
              j++
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

          get(child(ref(db, '108Aze-c5krJ2MkYIvc29M3rVv0_AAP9CmJTCJhFieAg/'), `Sheet1/${i}/Name`)).then((snapshot) => {
            if (snapshot.exists()) {
              /*var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead.setAttribute("style", "display: inline-block; width: 50%")
              lead_in.innerHTML = j + " " + snapshot.val()
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
              j++*/
              lead_data.push(snapshot.val())
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
      
          get(child(ref(db, '108Aze-c5krJ2MkYIvc29M3rVv0_AAP9CmJTCJhFieAg/'), `Sheet1/${i}/Total Hours`)).then((snapshot) => {
            if (snapshot.exists()) {
              /*var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead_in.innerHTML = snapshot.val()
              lead.setAttribute("style", "display: inline-block; width: 50%")
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
              */
              lead_data.push(snapshot.val())
              if (j == num) {

              for (var i = 0; i < lead_data.length; i+=3) {
                if (lead_data[i] < 16) {
                  lead_under_data.push(lead_data[i])
                  lead_under_data.push(lead_data[i+1])
                  lead_under_data.push(lead_data[i+2])
                } else {
                  lead_over_data.push(lead_data[i])
                  lead_over_data.push(lead_data[i+1])
                  lead_over_data.push(lead_data[i+2])
                }
              }


              var lead_under_container = document.createElement('div')
              lead_under_container.setAttribute('class', 'tabs_content tabs_content--active')
              lead_under_container.setAttribute('data-tab', '1')
              var label_container = document.createElement('div')
                label_container.setAttribute('style', 'margin-left: 10%; margin-right: 15%; font-weight: bold')

                var left_label_container = document.createElement('div')                
                var place_label = document.createElement('p')
                place_label.setAttribute('style', 'display: inline; padding-right: 65px; color: black; margin-bottom: 20px !important;')
                place_label.innerHTML = "Rank"
                var name_label = document.createElement('p')
                name_label.setAttribute('style', 'display: inline; color: black; margin-bottom: 20px !important;')
                name_label.innerHTML = "Name"
                left_label_container.setAttribute('style', 'float: left')
                left_label_container.append(place_label, name_label)

                var right_label_container = document.createElement('div')
                var hours_label = document.createElement('p')
                hours_label.setAttribute('style', 'color: black; margin-bottom: 20px !important;')
                hours_label.innerHTML = "Hours"
                right_label_container.setAttribute('style', 'text-align: right;')
                right_label_container.append(hours_label)            

                label_container.append(left_label_container, right_label_container)
                lead_under_container.append(label_container)
              var rank = 1
              for (var i = 0; i < lead_under_data.length; i+=3) {
                var lead = document.createElement('div')
                lead.setAttribute('style', 'outline: 1px solid grey; margin-left: 10%;  outline-offset: 10px; margin-right: 15%; border-radius: 1px')
                /*var lead_in = document.createElement('h2')
                lead_in.setAttribute("style", "text-align: center")
                lead_in.innerHTML = rank + " " + lead_under_data[i] + " " + lead_under_data[i+1] + ": " + lead_under_data[i+2]
                lead.innerHTML = lead_in.innerHTML*/


                var left_container = document.createElement('div')
                var place = document.createElement('p')
                place.setAttribute('style', 'display: inline; padding-right: 100px; color: black; margin-bottom: 40px !important;')
                place.innerHTML = rank
                var name = document.createElement('p')
                name.setAttribute('style', 'display: inline; color: black; margin-bottom: 40px !important;')
                name.innerHTML = lead_under_data[i+1]

                left_container.setAttribute('style', 'float: left')
                left_container.append(place, name)


                var right_container = document.createElement('div')
                var hours = document.createElement('p')
                hours.setAttribute('style', 'color: black; margin-bottom: 40px !important;')
                hours.innerHTML = lead_under_data[i+2]

                right_container.setAttribute('style', 'text-align: right;')
                right_container.append(hours)

                lead.append(left_container, right_container)
                lead_under_container.append(lead)
                rank++
              }

              var lead_over_container = document.createElement('div')
              lead_over_container.setAttribute('class', 'tabs_content')
              lead_over_container.setAttribute('data-tab', '2')
              var label_container = document.createElement('div')
                label_container.setAttribute('style', 'margin-left: 10%; margin-right: 15%; font-weight: bold')

                var left_label_container = document.createElement('div')                
                var place_label = document.createElement('p')
                place_label.setAttribute('style', 'display: inline; padding-right: 65px; color: black; margin-bottom: 20px !important;')
                place_label.innerHTML = "Rank"
                var name_label = document.createElement('p')
                name_label.setAttribute('style', 'display: inline; color: black; margin-bottom: 20px !important;')
                name_label.innerHTML = "Name"
                left_label_container.setAttribute('style', 'float: left')
                left_label_container.append(place_label, name_label)

                var right_label_container = document.createElement('div')
                var hours_label = document.createElement('p')
                hours_label.setAttribute('style', 'color: black; margin-bottom: 20px !important;')
                hours_label.innerHTML = "Hours"
                right_label_container.setAttribute('style', 'text-align: right;')
                right_label_container.append(hours_label)            

                label_container.append(left_label_container, right_label_container)
              lead_over_container.append(label_container)
              rank = 1
              for (var i = 0; i < lead_over_data.length; i+=3) {
                var lead = document.createElement('div')
                lead.setAttribute('style', 'outline: 1px solid grey; margin-left: 10%;  outline-offset: 10px; margin-right: 15%; border-radius: 1px')
                /*var lead_in = document.createElement('h2')
                lead_in.setAttribute("style", "text-align: center")
                lead_in.innerHTML = rank + " " + lead_over_data[i] + " " + lead_over_data[i+1] + ": " + lead_over_data[i+2]
                lead.innerHTML = lead_in.innerHTML
                document.body.appendChild(lead)*/


                var left_container = document.createElement('div')
                var place = document.createElement('p')
                place.setAttribute('style', 'display: inline; padding-right: 100px; color: black; margin-bottom: 40px !important;')
                place.innerHTML = rank
                var name = document.createElement('p')
                name.setAttribute('style', 'display: inline; color: black; margin-bottom: 40px !important;')
                name.innerHTML = lead_over_data[i+1]

                left_container.setAttribute('style', 'float: left')
                left_container.append(place, name)


                var right_container = document.createElement('div')
                var hours = document.createElement('p')
                hours.setAttribute('style', 'color: black; margin-bottom: 40px !important;')
                hours.innerHTML = lead_over_data[i+2]

                right_container.setAttribute('style', 'text-align: right;')
                right_container.append(hours)

                lead.append(left_container, right_container)
                lead_over_container.append(lead)
                rank++
              }
              const content = document.getElementById("content")
              content.appendChild(lead_under_container)
              content.appendChild(lead_over_container)
            }
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    }); 

    
  
}

  window.addEventListener("load", create_body());


