class AddUser {
    constructor() {

    }
    createUserProfile() {
        return `<div class="ibox">
                        <div class="ibox-content">
            <div class="passwordBox animated fadeInDown">
        <div class="row">
            <div class="col-md-12">
                <div class="ibox-content">
                    <h2 class="font-bold">Create Profile</h2>
                    <div class="row">
                            <form class="m-t" role="form" action="index.html">
                                <div class="form-group">
                                    <input type="name" class="form-control" placeholder="Enter your name" required="">
                                </div>
                                     <input type="phone" class="form-control" placeholder="Enter your phone" required="">
                                </div>
                                     <input type="email" class="form-control" placeholder="Enter your email address" required="">
                                </div>
                                <button type="submit" class="btn btn-primary block full-width m-b">Create</button>
                            </form>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-md-6">
                Copyright Example Company
            </div>
            <div class="col-md-6 text-right">
               <small>© 2017-2018</small>
            </div>
        </div>
        </div>
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