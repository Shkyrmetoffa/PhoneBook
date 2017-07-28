// const PhoneBook = {
//     title: 'Contacts',
//     cardTitle: ['Name', 'Last Name', 'Email'],
//     footer: ['Contacts', 'Keypad', 'Edit contact', 'User', 'Add user'],
//     phoneCards: [{
//             name: 'Vasya',
//             lastName: 'Petrov',
//             email: 'petrov@gmail.com',
//         },
//         {
//             name: 'Vasya',
//             lastName: 'Petrov',
//             email: 'petrov@gmail.com',
//         },
//         {
//             name: 'Sergey',
//             lastName: 'Sergeev',
//             email: 'SergeiSergeev@ec.ua',
//         },
//         {
//             name: 'Ivan',
//             lastName: 'Ivanov',
//             email: 'IvanIvanov@ec.ua',
//         },
//         {
//             name: 'Aleksandr',
//             lastName: 'Aleksandrov',
//             email: 'AlexAlex@ec.ua',
//         },
//         {
//             name: 'Aleksandr',
//             lastName: 'Smirnov',
//             email: 'AlexSmirnov@ec.ua',
//         },
//         {
//             name: 'Sergey',
//             lastName: 'Volkov',
//             email: 'VolkovSergey@ec.ua',
//         },
//         {
//             name: 'Mariya',
//             lastName: 'Sharapova',
//             email: 'MariyaSharapova@ec.ua',
//         },
//         {
//             name: 'Alexandr',
//             lastName: 'Vinnik',
//             email: 'AlexVinnik@ec.ua',
//         },
//         {
//             name: 'Dariy',
//             lastName: 'Smirnov',
//             email: 'DariySmirnov@ec.ua',
//         },
//         {
//             name: 'Elena',
//             lastName: 'Leshenko',
//             email: 'ElenaLeshenko@ec.ua',
//         },
//         {
//             name: 'Olga',
//             lastName: 'Novikova',
//             email: 'OlgaNovikova@ec.ua',
//         },
//         {
//             name: 'Nata',
//             lastName: 'Shemyakina',
//             email: 'ShemyakinaN@ec.ua',
//         },
//         {
//             name: 'Anna',
//             lastName: 'Dontsova',
//             email: 'AnnaDontsova@ec.ua',
//         },
//         {
//             name: 'Vlad',
//             lastName: 'Yama',
//             email: 'VladYama@ec.ua',
//         },
//         {
//             name: 'Kira',
//             lastName: 'Varobyova',
//             email: 'Kira1990@ec.ua',
//         },
//         {
//             name: 'Victor',
//             lastName: 'Krivenko',
//             email: 'ViktorKriv@ec.ua',
//         }
//     ],
//     render() {
//         const body = document.body;
//         const header = this.createNewTag('header');
//         const main = this.createNewTag('main');
//         const footer = this.createNewTag('footer');
//         const div = this.createDiv();
//         const div2 = this.createDiv();
//         const div3 = this.createDiv();
//         const formDiv = this.createDiv();
//         const h2 = this.createNewTag('h2');
//         const form = this.createNewTag('form');
//         const table = this.createNewTag('table');
//         const thead = this.createNewTag('thead');
//         const tbody = this.createNewTag('tbody');
//         let headTr = this.createTr();
//         let nav = this.createNewTag('nav');
//         let label = this.createNewTag('label');
//         let input = this.createNewTag('input');

//         h2.textContent = this.title;
//         label.textContent = 'Search';
//         label.setAttribute('for', 'search');

//         input.id = 'serch';
//         input.setAttribute('type', 'text');
//         input.setAttribute('placeholder', 'search');

//         header.className = 'header';
//         div.className = 'container top-radius';
//         this.addClassName(div2, 'container');
//         this.addClassName(nav, ' main-nav');
//         this.addClassName(div3, 'container bottom-radius');
//         this.addClassName(table, 'table table-hover contacts');
//         this.addClassName(form, 'form-inline search-form');
//         this.addClassName(formDiv, 'form-group');
//         this.addClassName(label, 'sr-only');
//         this.addClassName(input, 'form-control');

//         body.appendChild(header);
//         body.appendChild(main);
//         body.appendChild(footer);
//         header.appendChild(div);
//         div.appendChild(h2);

//         main.appendChild(div2);

//         div2.appendChild(form);
//         form.appendChild(formDiv);
//         form.appendChild(label);
//         form.appendChild(input);

//         div2.appendChild(table);
//         table.appendChild(thead);
//         table.appendChild(tbody);
//         thead.appendChild(headTr);

//         footer.appendChild(div3);
//         div3.appendChild(nav);

//         this.cardTitle.forEach((title, i) => {
//             let thName = this.createNewTag('th');
//             thName.textContent = title;
//             headTr.appendChild(thName);
//         });

//         this.phoneCards.forEach((card) => {
//             const tr = this.createTr();
//             let tdName = this.createTd();
//             let tdLastName = this.createTd();
//             let tdEmail = this.createTd();

//             tdName.textContent = card.name;
//             tdLastName.textContent = card.lastName;
//             tdEmail.textContent = card.email;
//             tr.appendChild(tdName);
//             tr.appendChild(tdLastName);
//             tr.appendChild(tdEmail);
//             tbody.appendChild(tr);
//         });
//         this.footer.forEach(elem => {
//             let a = this.createNewTag('a');
//             let spanFont = this.createNewTag('span');
//             let span = this.createNewTag('span');
//             a.appendChild(spanFont);
//             a.appendChild(span);
//             span.textContent = elem;
//             nav.appendChild(a);
//             this.addClassName(a, 'tab');
//             this.addClassName(spanFont, 'glyphicon glyphicon-user');
//             this.addClassName(span, 'tab-text');
//             spanFont.setAttribute('aria-hidden', 'true');
//         })
//     },

//     createNewTag(tag) {
//         return document.createElement(tag);
//     },
//     createDiv() {
//         return this.createNewTag('div');
//     },
//     createTr() {
//         return this.createNewTag('tr');
//     },
//     createTd() {
//         return this.createNewTag('td');
//     },
//     addClassName(tag, name) {
//         return tag.className = name;
//     }
// };
// PhoneBook.render();
class Contacts {
    constructor() {

    }
    createContacts() {
        return `<div class="ibox">
                        <div class="ibox-content">
                            <h2>Contacts</h2>
                            <div class="input-group">
                                <input type="text" placeholder="Search client " class="input form-control">
                                <span class="input-group-btn">
                                        <button type="button" class="btn btn btn-primary"> <i class="fa fa-search"></i> Search</button>
                                </span>
                            </div>
                            <div class="clients-list">
                           
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane active">
                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;"><div class="full-height-scroll" style="overflow: hidden; width: auto; height: 100%;">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-hover">
                                                <tbody>
                                                <tr>
                                                    <td class="client-avatar"><img alt="image" src="img/a2.jpg"> </td>
                                                    <td><a data-toggle="tab" href="#contact-1" class="client-link">Anthony Jackson</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><img alt="image" src="img/a4.jpg"> </td>
                                                    <td><a data-toggle="tab" href="#contact-3" class="client-link">Lionel Mcmillan</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td>rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-4" class="client-link">Edan Randall</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a6.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-2" class="client-link">Jasper Carson</a></td>
                                                  <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-3" class="client-link">Reuben Pacheco</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a1.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-1" class="client-link">Simon Carson</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a3.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-2" class="client-link">Rooney Lindsay</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a4.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-3" class="client-link">Lionel Mcmillan</a></td>
                                                   <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-4" class="client-link">Edan Randall</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a2.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-1" class="client-link">Anthony Jackson</a></td>
                                                   <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-2" class="client-link">Reuben Pacheco</a></td>
                                                   <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-3" class="client-link">Edan Randall</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a6.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-4" class="client-link">Jasper Carson</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-2" class="client-link">Reuben Pacheco</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a1.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-1" class="client-link">Simon Carson</a></td>
                                                   <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a3.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-3" class="client-link">Rooney Lindsay</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a4.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-4" class="client-link">Lionel Mcmillan</a></td>
                                                   <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-1" class="client-link">Edan Randall</a></td>
                                                   <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a2.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-2" class="client-link">Anthony Jackson</a></td>
                                                  <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                <tr>
                                                    <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                                    <td><a data-toggle="tab" href="#contact-4" class="client-link">Reuben Pacheco</a></td>
                                                    <td class="contact-type"><i class="fa fa-envelope"></i><td> rooney@proin.com</td></td>
                                                    <td class="contact-type"><i class="fa fa-phone"></i><td>+422 600 213</td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 366.226px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
                                </div>
                                <div id="tab-2" class="tab-pane">
                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 100%;"><div class="full-height-scroll" style="overflow: hidden; width: auto; height: 100%;">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-hover">
                                                <tbody>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-1" class="client-link">Tellus Institute</a></td>
                                                    <td>Rexton</td>
                                                    <td><i class="fa fa-flag"></i> Angola</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Velit Industries</a></td>
                                                    <td>Maglie</td>
                                                    <td><i class="fa fa-flag"></i> Luxembourg</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-3" class="client-link">Art Limited</a></td>
                                                    <td>Sooke</td>
                                                    <td><i class="fa fa-flag"></i> Philippines</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-1" class="client-link">Tempor Arcu Corp.</a></td>
                                                    <td>Eisden</td>
                                                    <td><i class="fa fa-flag"></i> Korea, North</td>
                                                    <td class="client-status"><span class="label label-warning">Waiting</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Penatibus Consulting</a></td>
                                                    <td>Tribogna</td>
                                                    <td><i class="fa fa-flag"></i> Montserrat</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-3" class="client-link"> Ultrices Incorporated</a></td>
                                                    <td>Basingstoke</td>
                                                    <td><i class="fa fa-flag"></i> Tunisia</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Et Arcu Inc.</a></td>
                                                    <td>Sioux City</td>
                                                    <td><i class="fa fa-flag"></i> Burundi</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-1" class="client-link">Tellus Institute</a></td>
                                                    <td>Rexton</td>
                                                    <td><i class="fa fa-flag"></i> Angola</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Velit Industries</a></td>
                                                    <td>Maglie</td>
                                                    <td><i class="fa fa-flag"></i> Luxembourg</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-3" class="client-link">Art Limited</a></td>
                                                    <td>Sooke</td>
                                                    <td><i class="fa fa-flag"></i> Philippines</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-1" class="client-link">Tempor Arcu Corp.</a></td>
                                                    <td>Eisden</td>
                                                    <td><i class="fa fa-flag"></i> Korea, North</td>
                                                    <td class="client-status"><span class="label label-warning">Waiting</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Penatibus Consulting</a></td>
                                                    <td>Tribogna</td>
                                                    <td><i class="fa fa-flag"></i> Montserrat</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-3" class="client-link"> Ultrices Incorporated</a></td>
                                                    <td>Basingstoke</td>
                                                    <td><i class="fa fa-flag"></i> Tunisia</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Et Arcu Inc.</a></td>
                                                    <td>Sioux City</td>
                                                    <td><i class="fa fa-flag"></i> Burundi</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-1" class="client-link">Tellus Institute</a></td>
                                                    <td>Rexton</td>
                                                    <td><i class="fa fa-flag"></i> Angola</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Velit Industries</a></td>
                                                    <td>Maglie</td>
                                                    <td><i class="fa fa-flag"></i> Luxembourg</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-3" class="client-link">Art Limited</a></td>
                                                    <td>Sooke</td>
                                                    <td><i class="fa fa-flag"></i> Philippines</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-1" class="client-link">Tempor Arcu Corp.</a></td>
                                                    <td>Eisden</td>
                                                    <td><i class="fa fa-flag"></i> Korea, North</td>
                                                    <td class="client-status"><span class="label label-warning">Waiting</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Penatibus Consulting</a></td>
                                                    <td>Tribogna</td>
                                                    <td><i class="fa fa-flag"></i> Montserrat</td>
                                                    <td class="client-status"></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-3" class="client-link"> Ultrices Incorporated</a></td>
                                                    <td>Basingstoke</td>
                                                    <td><i class="fa fa-flag"></i> Tunisia</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a data-toggle="tab" href="#company-2" class="client-link">Et Arcu Inc.</a></td>
                                                    <td>Sioux City</td>
                                                    <td><i class="fa fa-flag"></i> Burundi</td>
                                                    <td class="client-status"><span class="label label-primary">Active</span></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>`;
    }
    render() {
        let body = document.querySelector('body');
        body.innerHTML = this.createContacts();
    }
}
let contacts = new Contacts();
contacts.render();