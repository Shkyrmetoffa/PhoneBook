class UserProfile {
    constructor() {}
    createUserProfile() {
        return ` <div class="ibox">
                        <div class="ibox-content">
                                     <h2>Profile</h2>
                            <div class="data-wrap"> 
                                  <img src="img/a4.jpg" class="img-circle circle-border m-b-md" alt="profile">
                                  
                                <h2>
                                    Janmes Smith
                                </h2>
                        <ul class="list-unstyled m-t-md">
                            <li>
                                <div class="fa fa-envelope m-r-xs"> mike@mail.com</div>
                                
                            </li>
                            <li>
                                <div class="fa fa-phone m-r-xs"> (+121) 678 3462</div>
                               
                            </li>
                        </ul>
                              </div>   
                        
                             <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Send Message</button>
                             <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-phone"></i> Phone
                                    </button>
                        <footer>
                          <a class="btn btn-sm btn-white" href="#"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Contacts</a>
                          <a class="btn btn-sm btn-white" href="mail_compose.html"><span class="glyphicon glyphicon-th" aria-hidden="true"></span>Keypad</a>
                          <a class="btn btn-sm btn-white" href="mail_compose.html"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Edit profile</a> 
                        </footer> 
            </div>
        </div>`;
    }
    render() {
        let body = document.querySelector('body');
        body.innerHTML = this.createUserProfile();
    }
}
let userProfile = new UserProfile();
userProfile.render();