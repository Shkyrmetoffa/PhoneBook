class UserProfile {
    constructor() {

    }
    createHeader() {
        return `<header class="header">
		<div class="container top-radius">
			<div class="user-top-line">
				<a href ="index.html" id ="backToContacts">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts
				</a>
				<a href ="edit-contact.html" id ="editContact">Edit</a>
			</div>
		</div>
	</header>`;
    }
    createMainInfo() {
        return `<main class="main">
		<div class="container">
			<img src="img/user-face-mini.png" alt="#" class=" user-img img-circle center-block">
			<div class="user-name"></div>
			<div class="options-line">
				<div class="message">
					<div class="options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
					<span class="options-text">message</span>
				</div>
				<div class="call">
					<div class="options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
					<span class="options-text">call</span>
				</div>
				<div class="video">
					<div class="options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
					<span class="options-text">video</span>
				</div>
				<div class="mail">
					<div class="options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
					<span class="options-text">mail</span>
				</div>
			</div> 
			<div class="options-table">
			<div class = user-data-all></div>
            <div class="options-item"><a href="#">Notes</a></div>
				<div class="options-item"><a href="#">Send message</a></div>
				<div class="options-item"><a href="#">Share contact</a></div>
				<div class="options-item"><a href="#">Add to favorites</a></div>
				<div class="options-item"><a href="#">Share my location</a></div>
				<div class="options-item"><a href="#">Block this caller</a></div>
			</div>
		</div>
	</main>`;

    }
    createFooter() {
        return `<footer class="footer">
		<div class="container bottom-radius">
			<nav class="main-nav">
				<a href="index.html" class="tab">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					<span class="tab-text">Contacts</span>
				</a>
				<a href="keypad.html" class="tab active">
					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
					<span class="tab-text">Keypad</span>
				</a>
				<a href="edit-contact.html" class="tab">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
					<span class="tab-text">Edit contact</span>
				</a>
				<a href="user.html" class="tab">
					<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
					<span class="tab-text">User</span>
				</a>
				<a href="add-user.html" class="tab">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					<span class="tab-text">Add user</span>
				</a>
			</nav>
		</div>
	</footer>`;
    }
    render() {
        let main = document.querySelector('.main');
        main.innerHTML = `${this.createHeader()} ${this.createMainInfo()} ${this.createFooter()}`;
    }
}
let userProfile = new UserProfile();
userProfile.render();