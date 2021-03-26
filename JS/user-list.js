// const url = "http://localhost:8080/api/users/"

const newuser = {
    id: 0, 
    username: "user1", 
    password: "abcXYZ", 
    firstName: "Jon", 
    lastName: "Doe",
    email:"JonDoe@email.com",
    phone: "555-555-5555",
    isAdmin: false,
    isReviewer: false

}

let allUsers =[];

$().ready(() => {

    userList()
        .done((users) => {
            allUsers = users;
            display(allUsers);
        })
        .fail()
})

    // $.ajax({
    //     method: "POST",
    //     url: url,
    //     data: JSON.stringify(newuser),
    //     contentType: 'application/json'        
    // })
    //     .done((res) => {
    //         console.log(res);
    //     })
    //     .fail((err) => {
    //         console.error(err);
    //     })

    

    // $.getJSON(url)
    //     .done((users) => {
    //         console.log(users);
    //     })
    //     .fail((err) => {
    //         console.error(err);
    //     })


const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr =$("<tr></tr>");
        let tdId=$(`<td>${user.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${user.username}</td>`));
        let tdName = $(`<td>${user.firstName} ${user.lastName}</td>`);
        tr.append(tdName);
        let tdReviewer = $(`<td>${user.isReviewer ? "Yes" : "No"}</td>`);
        tr.append(tdReviewer);
        let tdAdmin = $(`<td>${user.isAdmin ? "Yes" : "No"}</td>`);
        tr.append(tdAdmin);
        tbody.append(tr);
    }
}