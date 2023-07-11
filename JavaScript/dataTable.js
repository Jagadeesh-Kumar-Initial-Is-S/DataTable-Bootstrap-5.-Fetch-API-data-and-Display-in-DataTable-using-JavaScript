// Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .
async function getData() {
    const records = await fetch('https://dummyjson.com/users');
    const data = await records.json();
    // Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .
    let tab = '';
    data.users.forEach(function (user) {
        // Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .
        tab += `<tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.email}</td>
        </tr>`
    })
    document.getElementById('tbody').innerHTML = tab;
    // Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .
    $('#userTable').DataTable({
        "data": data.users,
        "columns": [
            { "data": 'firstName' },
            { "data": 'lastName' },
            { "data": 'age' },
            { "data": 'gender' },
            { "data": 'email' },
        ]
    })
}
// Submitted and coded by Jagadeesh Kumar with initial as S, you may send mail to my email address which is equal to jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is equal to jagadeesh-kumar@airtel .