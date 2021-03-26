let singleuser = null;

$().ready(() => {

    userDetail(7)
        .done((user) => {
            singleUser = user;
            display(singleUser);
        })

});

const display = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
};