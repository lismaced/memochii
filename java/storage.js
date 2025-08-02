const Storage = {
  getUsers() {
    const encrypted = localStorage.getItem('memochiiUsers');
    return encrypted ? JSON.parse(Auth.decrypt(encrypted)) : [];
  },

  saveUser(user) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('memochiiUsers', Auth.encrypt(JSON.stringify(users)));
  },

  setSession(user) {
    sessionStorage.setItem('currentUser', Auth.encrypt(JSON.stringify(user)));
  }
};