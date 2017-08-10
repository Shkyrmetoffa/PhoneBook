class AddUser {
    constructor() {}
    createUserProfile() {
        return ` <div class="ibox">
                   <div class="ibox-content">
                     <div class="passwordBox animated fadeInDown">
                      <div class="row">
                        <h2 class="font-bold">Create Profile</h2>
                          <form class="m-t" role="form" action="index.html">
                            <div class="data-wrap"> <img src="img/a4.jpg" class="img-circle circle-border m-b-md" alt="profile">
                              </div>
                                <div class="form-group">
                                <input type="name" class="form-control" placeholder="Enter your name" required="">
                           
                                <input type="phone" class="form-control" placeholder="Enter your phone" required="">
                          
                                <input type="email" class="form-control" placeholder="Enter your email address" required="">
                            
                                <button type="submit" class="btn btn-primary block full-width m-b">Create</button>
                                </div>
                            </form>
                        <footer>
                          <a class="btn btn-sm btn-white" href="#"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Contacts</a>
                          <a class="btn btn-sm btn-white" href="mail_compose.html"><span class="glyphicon glyphicon-th" aria-hidden="true"></span>Keypad</a>
                          <a class="btn btn-sm btn-white" href="mail_compose.html"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Add contact</a>
                        </footer> 
                    </div>
                </div>
            </div>
        </div>`;
    }
    render() {
        let body = document.querySelector('body');
        body.innerHTML = this.createUserProfile();
    }
}
let addUser = new AddUser();
addUser.render();