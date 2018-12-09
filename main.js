

function createEmployee(firstName, lastName, age, sex, employed) {
    return {
        
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        employed: employed,
    };
}

var employee = [];
employee.push(createEmployee( 'John', 'Doe', '31', 'male', true));
employee.push(createEmployee('Amelia', 'Clark', '22', 'female', true));
employee.push(createEmployee('Jack', 'Jones', '21', 'male', false));
employee.push(createEmployee('Olivia', 'Wilde', '31', 'female', true));
employee.push(createEmployee('Keanu', 'Reeves', '54', 'male', true));
employee.push(createEmployee('Angelina', 'Jolie', '43', 'female', true));
employee.push(createEmployee('Meryl', 'Streep', '69', 'female', false));


function renderEmployees(employee) {
    // Wybranie elementu z DOM
    var employeesDOM = document.getElementById('employee');

    var contentDOM = '<table class="table">\n\
    <thead>\n\
      <tr>\n\
       <th scope="col">Index</th>\n\
        <th scope="col">First Name</th>\n\
        <th scope="col">Last Name</th>\n\
        <th scope="col">Age</th>\n\
        <th scope="col">Sex</th>\n\
        <th scope="col">Employed</th>\n\
      </tr>\n\
    </thead>\n\
<tbody>';

 


    employee.forEach(function (emp) {
        contentDOM += '<tr>\n\
<td>' + 1 + '</td>\n\
<td>' + emp.firstName + '</td>\n\
<td>' + emp.lastName + '</td>\n\
<td>' + emp.age + '</td>\n\
<td>' + emp.sex + '</td>\n\
<td>' + emp.employed + '</td>\n\
</tr>';
    });

    contentDOM += '</tbody>\n\
</table>';

    employeesDOM.innerHTML = contentDOM;
    
}

renderEmployees(employee);

const refresh = document.getElementById('refresh');
var removeWomen = document.getElementById('rw');
var removeMen = document.getElementById('rm');

refresh.addEventListener('click',function(){
    return renderEmployees(employee);
} );
removeWomen.addEventListener('click', function(){
    var womenRemoved = employee.filter((value) => {
        return value.sex == 'male';
    })
    renderEmployees(womenRemoved);
});
removeMen.addEventListener('click',  function(){
    var menRemoved = employee.filter((value) => {
        return value.sex == 'female';
    })
    renderEmployees(menRemoved);
} );