/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/

        console.log('Received Event: ' + id);

        //listener click button ok
        document.getElementById('buttonSubmitCity')
        .addEventListener("click", submitCity);
    }
};

function submitCity() {

    var city= document.getElementById('city');

    //alert('city: '+ city);
    if(city.value.length <=0){
        alert('Vous devez saisir une ville !');
        return;
    }
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},fr&units=metric&appid=6b50cf099fed11dfc566006869b2aa7e`;

    var requete = new XMLHttpRequest();
    requete.open('GET', url, true); //async
    requete.send();


    requete.onreadystatechange = function() {
        if(requete.readyState == 4 ){
        //alert('state : ' + requete.readyState+ "status: "+ requete.status + this.responseText);
        document.getElementById('resultCity').innerHTML= JSON.parse(this.response).name;
        document.getElementById('resultTemperature').innerHTML= JSON.parse(this.response).main.temp;
        document.getElementById('resultIcon').innerHTML= '<img src="https://openweathermap.org/img/w/'+
        JSON.parse(this.response).weather[0].icon+'.png" width="100px" />';
        }
        /*else{
            alert('Erreur serveur : aucune réponse')
        }*/

    }
}