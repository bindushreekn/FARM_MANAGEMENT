
// Function to show the appropriate form
function showForm(formType) {
    document.getElementById('createAccountForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    
    if (formType === 'createAccount') {
        document.getElementById('createAccountForm').style.display = 'block';
    } else if (formType === 'login') {
        document.getElementById('loginForm').style.display = 'block';
    }
}

function registerFarmer() {
    const name = document.getElementById('regName').value;
    const password = document.getElementById('regPassword').value;
    const farmSize = document.getElementById('regFarmSize').value;
    const crops = document.getElementById('regCrops').value;

    // Simulate registration process
    alert('Registration successful! Welcome, Farmer ' + name);
    // You can add redirection or further processing here
}

function loginUser() {
    const name = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate login process
    alert('Login successful! Welcome back, ' + name);
    // You can add redirection or further processing here
}
