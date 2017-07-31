/*Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
Проверка, что телефонный номер содержит только числа
Добавление пользователей в объект
Удаление пользователя по имени, фамилии
Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
Фильтр по указанному свойству */
class PhoneApp {
    constructor() {
        this.dataBase = [
            { id: 1, name: 'Vasya', lastName: 'Ivanov', phone: '0993345647' },
            { id: 2, name: 'Petya', lastName: 'Serov', phone: '0950441414' },
            { id: 3, name: 'Raya', lastName: 'Rudnova', phone: '0509991122' },
            { id: 4, name: 'Petya', lastName: 'Lovnov', phone: '0993113131' },
            { id: 5, name: 'Nastya', lastName: 'Ulyanova', phone: '0689565095' },
            { id: 6, name: 'Vasya', lastName: 'Lanov', phone: '0993345555' },
        ];
    }


    checkNumber(num) {
        if (!isNaN(telNum)) {
            return true;
        } else {
            return 'You should type number only';
        }
    };
    formatedNumber(num) {
        let code = num.slice(0, 3);
        let startNum = num.slice(3, 6);
        let middle = num.slice(6, 8);
        let end = num.slice(8, 10);
        console.log(
            `(${code}) ${startNum}-${middle}-${end}`
        );
    };
    createUserCard(id, name, lastName, phone) {
        let userCard = {};
        userCard.id = id;
        userCard.name = name;
        userCard.lastName = lastName;
        userCard.phone = phone;
        this.dataBase.push(userCard);
        console.log(this.dataBase);
        return userCard;
    }
    sort(key) {
        this.dataBase.sort((param1, param2) => {
            if (param1[key] > param2[key]) {
                return 1;
            } else if (param1[key] < param2[key]) {
                return -1;
            }
        });
        console.log(this.dataBase);
        return this.database;
    }
    editUser(newId, newName, newLastName, newPhone) {
        this.createUserCard(newId, newName, newLastName, newPhone);
    }
    delete(delOption) {
        this.dataBase = this.dataBase.filter(function(val) {
            return !(val.name == delOption || val.lastName == delOption);
        });
        console.log(this.dataBase);
    }
    search(searchName) {
        this.dataBase = this.dataBase.filter(function(val) {
            return val.name == searchName || val.lastName == searchName;
        });
        console.log(this.dataBase);
    }
}
const myApp = new PhoneApp();
myApp.formatedNumber('3330004449');
myApp.createUserCard(12, 'John', 'Grid', '0990441444');
myApp.sort('name');
myApp.delete('Petya');
myApp.search('Vasya');
myApp.editUser(33, 'lalala', 'fafa', '0000000');