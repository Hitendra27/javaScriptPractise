document.getElementById('button').addEventListener('click',
loadUsers);

// Load Github Users
function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if(this.status == 200) {
            var users = JSON.parse(this.responseText);

            var output = '';
            for(var i in users) {
                output +=
                '<div class="user">' +
                '<img src="'+users[i].avatar_url+'" width="70" height="70" >' +
                '<ul>' +
                '<li>ID: '+users[i].id+ '<li>' +
                '<li>Login: '+users[i].login+ '<li>' +
                '</ul>' +
                '</div>';
            }

            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}

/* <style>
.user{
  display: flex;
  background: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
}

.user ul{
  list-style: none;
}
</style>



    <button id="button">Load Github Users</button>
    <br><br>
    <h1>Github Users</h1>
    <div id="users"></div> */
