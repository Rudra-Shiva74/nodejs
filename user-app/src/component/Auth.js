export const fetchDataFromLocalStorage = () => {
    // Retrieve data from localStorage based on user key
    const storedData = localStorage.getItem('users');
    // Parse the data (assuming it's stored as a JSON string)
    if (storedData) {
        const user = JSON.parse(storedData);
        return user;
    }
};
export const isLoggedIn = () => {

}
export const LoginUser = (email, pass) => {
    const users = fetchDataFromLocalStorage();
    users.forEach(element => {
        if (element.email === email && element.password === pass) {
            return true;
        }
    });
}