class Keypad {
    constructor() {}
    createKeypad() {
        return `<div class="ibox">
                        <div class="ibox-content">
                            <h2>Keypad</h2>
							<div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter number" required="">
                </div> 
                <div class="container">
							<button class="btn btn-primary  dim btn-large-dim" type="button">1</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">2</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">3</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">4</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">5</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">6</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">7</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">8</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">9</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">*</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">0</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">#</button>
							<button class="btn btn-primary  dim btn-large-dim" type="button"><</button>
							<button class="btn btn-warning  dim btn-large-dim" type="button"><i class="fa fa-phone"></i></button>
							<button class="btn btn-primary  dim btn-large-dim" type="button">X</button>
                            </div>
                               <footer>
                                 <a class="btn btn-sm btn-white" href="#"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>Contacts</a>
                                 <a class="btn btn-sm btn-white" href="mail_compose.html"><span class="glyphicon glyphicon-th" aria-hidden="true"></span>Keypad</a>
                                 <a class="btn btn-sm btn-white" href="mail_compose.html"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Add contact</a>
                               </footer>
							</div>
                           
							</div>`;
    }

    // click() {
    //     let buttons = document.getElementsByClassName('key');
    //     let input = document.querySelector('span');
    //     for (let i = 0; i < buttons.length; i++) {
    //         var button = buttons[i];
    //         button.addEventListener('click', (e) => {
    //             input.innerHTML += e.target.textContent;
    //         });
    //     }
    // }
    checkNumber(num) {
        if (!isNaN(telNum)) {
            console.log('true');
        } else {
            console.log('You should type number only');
        }
    }
    render() {
        let main = document.getElementsByClassName('main')[0];
        let container = document.querySelector('.container');
        main.innerHTML = this.createKeypad();

    }
}
let keypad = new Keypad();
keypad.render();