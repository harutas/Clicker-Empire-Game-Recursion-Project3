function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

function displayBlock(ele){
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

const config = {
    formPage : document.getElementById("form-page"),
    mainPage : document.getElementById("main-page"),
}

const form = {
    userName : document.getElementById("user-name"),
    newBtn : document.getElementById("new-btn"),
    loginBtn : document.getElementById("login-btn"),
}

class User{
    constructor(name, age, day, money, oneClick, burgerAmount, items){
        this.name = name
        this.age = age;
        this.day = day;
        this.money = money;
        this.oneClick = oneClick;
        this.burgerAmount = burgerAmount;
        this.items = items;
    }

    // 1日経過する
    getOld(){
        this.day++;
        if (this.day % 365 == 0){
            this.age += 1;
        }
    }

    // 購入ボタンを押したときにそのアイテムのtypeがabilityだったらoneclickをget分増やす
    getOneClick(item, amount){
        if (item.type === "ability"){
            this.oneClick += item.get * amount;
        }
    }

    // ハンバーガーをクリックした時のメソッド
    clickingBurger(){
        this.burgerAmount += 1;
        this.money += this.oneClick
    }

    // お金を払う
    payMoney(money){
        this.money -= money;
    }

    // お金を得る
    getMoneyBySec(money){
        this.money += money;
    }

}

class Item{
    constructor(name, type, howToIncrease,imgUrl, maxPurchases, price, get, possessions, totalPurchases){
        this.name = name;
        this.type = type;
        this.howToIncrease = howToIncrease;
        this.imgUrl = imgUrl;
        this.maxPurchases = maxPurchases;
        this.price = price;
        this.get = get;
        this.possessions = possessions;
        this.totalPurchases = totalPurchases;
    }

    // アイテム購入時のメソッド
    purchaseItem(amount){
        this.possessions += amount;
        this.totalPurchases += this.price * amount;
    }
    
    // 株式購入の値上がり
    changeStockPrice(amount, rate){
    if (this.type === "stock"){
        for (let i = 0; i < amount; i++){
            this.price = Math.floor(this.price * (1 + rate));
        }
    }
    }
}

const items = 
    [{
        "name" : "Flip machine",
        "type" : "ability",
        "howToIncrease" : "click",
        "imgUrl" : "https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
        "maxPurchases" : 500,
        "price" : 15000,
        "get" : 25,
        "possessions" : 0,
        "totalPurchases" : 0
    },
    {
        "name" : "ETF stock",
        "type" : "stock",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "maxPurchases" : -1,
        "price" : 300000,
        "get" : 0.1,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "ETF bond",
        "type" : "bond",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
        "maxPurchases" : -1,
        "price" : 300000,
        "get" : 0.7,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "Lemonade Stand",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
        "maxPurchases" : 1000,
        "price" : 30000,
        "get" : 30,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "Ice Cream Truck",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png",
        "maxPurchases" : 500,
        "price" : 100000,
        "get" : 120,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "House",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
        "maxPurchases" : 100,
        "price" : 20000000,
        "get" : 32000,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "TownHouse",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
        "maxPurchases" : 100,
        "price" : 40000000,
        "get" : 64000,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "Mansion",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png",
        "maxPurchases" : 20,
        "price" : 	250000000,
        "get" : 500000,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "Industrial Space",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
        "maxPurchases" : 10,
        "price" : 1000000000,
        "get" : 2200000,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "Hotel Skyscraper",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
        "maxPurchases" : 5,
        "price" : 10000000000,
        "get" : 25000000,
        "possessions" : 0,
        "totalPurchases" : 0     
    },
    {
        "name" : "Bullet-Speed Sky Railway",
        "type" : "realEstate",
        "howToIncrease" : "sec",
        "imgUrl" : "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
        "maxPurchases" : 1,
        "price" : 10000000000000,
        "get" : 30000000000,
        "possessions" : 0,
        "totalPurchases" : 0     
    },

];

form.newBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (form.userName.value === ""){
        alert('Please put your name');
    }
    else {
        newGame();
    }
});

function newGame(){
    let userItems = [];
    for (let i = 0; i < items.length; i++){
        userItems.push(new Item(
            items[i].name,
            items[i].type,
            items[i].howToIncrease,
            items[i].imgUrl,
            items[i].maxPurchases,
            items[i].price,
            items[i].get,
            items[i].possessions,
            items[i].totalPurchases,
            ));
    }
    let userAccount = new User(form.userName.value, 20, 0, 1000000, 25, 0, userItems);
    displayNone(config.formPage);
    displayBlock(config.mainPage);
    createMainPage(userAccount);
    createItemPage(userAccount);
}

form.loginBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (form.userName.value === ""){
        alert('Please put your name');
        return false;
    }else if (localStorage.getItem(form.userName.value) === null){
        alert("There is no data.");
        return false;
    }else {
        login();
    }
});

function login(){
    let saveduserAccount = localStorage.getItem(form.userName.value);
    saveduserAccount = JSON.parse(saveduserAccount);

    let items =[];
    Object.keys(saveduserAccount.items).forEach(key =>{
        let item = saveduserAccount.items[key];
        items.push(new Item(item.name, item.type, item.howToIncrease, item.imgUrl, item.maxPurchases, item.price, item.get, item.possessions, item.totalPurchases));
    });

    let user = new User(
        saveduserAccount.name,
        saveduserAccount.age,
        saveduserAccount.day,
        saveduserAccount.money,
        saveduserAccount.oneClick,
        saveduserAccount.burgerAmount,
        items
    );

    displayNone(config.formPage);
    displayBlock(config.mainPage);
    createMainPage(user);
    createItemPage(user);
}

function createMainPage(userAccount){
    let container = document.createElement("div");
    container.classList.add("bg-stategrey", "d-flex", "justify-content-center","col-12", "col-md-9", "p-2", "vh-90");
    container.innerHTML = `
    <div class="left-section bg-dark col-4 p-2">
        <div id="burger-status" class="bg-stategrey text-white text-center">
            <h5>${userAccount.burgerAmount} Burgers</h5>
            <p>one click ¥ ${userAccount.oneClick}</p>
        </div>
        <div class="burger-img text-center mt-5">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" id="burger-img" class="hover" alt="" width="75%">
        </div>
    </div>
    <div class="right-section d-flex flex-column col-8 ps-3 pe-2">
        <div class="status text-white d-flex flex-wrap text-center p-2">
            <div class="bg-dark col-12 col-sm-6 p-1"><p class="bg-stategrey pb-3">${userAccount.name}</p></div>
            <div id="age-status" class="bg-dark col-12 col-sm-6 p-1"><p class="bg-stategrey pb-3">${userAccount.age} years old</p></div>
            <div id="day-status" class="bg-dark col-12 col-sm-6 p-1"><p class="bg-stategrey pb-3">${userAccount.day} days</p></div>
            <div id="money-status" class="bg-dark col-12 col-sm-6 p-1"><p class="bg-stategrey pb-3">¥ ${userAccount.money}</p></div>
        </div>

        <div id="menu" class="menu bg-dark d-flex flex-column text-white ps-2 py-1 mt-2 m-vh-80 scroll">
            <div id="item-box" class="pe-2"></div>
            <div id="purchase-page" class="pe-2"></div>    
        </div>

        <div class="d-flex justify-content-end text-white mt-2">
            <div id="reset-btn" class="d-flex border p-2 me-2 hover">
                <i class="fas fa-2x fa-undo"></i>
            </div>
            <div id="save-btn" class="d-flex border p-2 hover">
                <i class="far fa-2x fa-save"></i>
            </div>
        </div>
    </div>
    `;

    // 毎秒ごとにステートメントを実行
    const everySecond = setInterval(() => {
        userAccount.getOld();
        userAccount.getMoneyBySec(secSummation(userAccount.items));
        updateDayStatus(userAccount);
        updateAgeStatus(userAccount);
        updateMoneyStatus(userAccount);
    }, 1000);

    // ハンバーガーの画像をクリックした時のイベント
    const burgerImg = container.querySelectorAll("#burger-img").item(0);
    burgerImg.addEventListener("click", function(){
        userAccount.clickingBurger();
        updateBurgerStatus(userAccount);
        updateMoneyStatus(userAccount);
    });

    // リセットボタンイベント
    const resetBtn = container.querySelectorAll("#reset-btn").item(0);
    resetBtn.addEventListener("click", function(){
        if (confirm("Reset All Data?")){
            clearInterval(everySecond);
            let userItems = [];
            for (let i = 0; i < items.length; i++){
                userItems.push(new Item(
                    items[i].name,
                    items[i].type,
                    items[i].howToIncrease,
                    items[i].imgUrl,
                    items[i].maxPurchases,
                    items[i].price,
                    items[i].get,
                    items[i].possessions,
                    items[i].totalPurchases,
                    ));
            }
            let userAccount = new User(form.userName.value, 20, 0, 1000000, 25, 0, userItems);
            config.mainPage.innerHTML = "";
            createMainPage(userAccount);
            createItemPage(userAccount);
        }
    });

    // セーブボタンイベント
    const saveBtn = container.querySelectorAll("#save-btn").item(0);
    saveBtn.addEventListener("click", function(){
        let userName = userAccount.name;
        userAccount = JSON.stringify(userAccount);
        localStorage.setItem(userName, userAccount);
        alert("Saved your data. Please put the same name when you login.");
        clearInterval(everySecond);
        config.mainPage.innerHTML = "";
        displayNone(config.mainPage);
        form.userName.value = "";
        displayBlock(config.formPage);
    });

    config.mainPage.append(container);
}

function updateBurgerStatus(userAccount){
    const burgerStatus = document.getElementById("burger-status");
    burgerStatus.innerHTML = `
    <h5>${userAccount.burgerAmount} Burgers</h5>
    <p>one click ¥ ${userAccount.oneClick}</p>
    `;
}

function updateAgeStatus(userAccount){
    const ageStatus = document.getElementById("age-status");
    ageStatus.innerHTML = `
    <p class="bg-stategrey pb-3">${userAccount.age} years old</p>
    `;
}

function updateDayStatus(userAccount){
    const dayStatus = document.getElementById("day-status");
    dayStatus.innerHTML = `
    <div class="bg-stategrey pb-3"><p>${userAccount.day} days</p></div>
    `;
}

function updateMoneyStatus(userAccount){
    const moneyStatus = document.getElementById("money-status");
    moneyStatus.innerHTML = `
    <div class="bg-stategrey pb-3"><p>¥ ${userAccount.money}</p></div>
    `;
}

// アイテムページの生成
function createItemPage(userAccount){
    const itemBox = document.getElementById("item-box");
    for (let i = 0; i < userAccount.items.length; i++){
        let itemContainer = document.createElement("div");
        itemContainer.innerHTML += `
        <div class="item d-flex justify-content-between hover bg-stategrey mt-1 mb-1 py-1 pe-3">
            <div class="d-flex align-items-center col-sm-3 col-0 ms-1">
                <img src="${userAccount.items[i].imgUrl}" width="100%" alt="">
            </div>
            <div class="col-sm-9 col-12 d-flex flex-column justify-content-center ps-3">
                <div class="d-flex justify-content-between">
                    <h3>${userAccount.items[i].name}</h3>
                    <h3>${userAccount.items[i].possessions}</h3>
                </div>
                <div class="d-flex justify-content-between pb-3">
                    <p>¥ ${userAccount.items[i].price}</p>
                    <p class="text-green">¥ ${userAccount.items[i].get} /${userAccount.items[i].howToIncrease}</p>
                </div>
            </div>
        </div>
        `;
        itemContainer.addEventListener("click", function(){
            itemBox.innerHTML = "";
            createPurchasePage(userAccount ,userAccount.items[i], 0.1);
        });

        itemBox.append(itemContainer);
    }
}

// 購入ページの生成
function createPurchasePage(userAccount, item, rate){
    let container = document.createElement("div");
    container.innerHTML = `
    <div class="bg-stategrey d-flex flex-column text-white my-1 p-2">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column align-items-start col-7">
                <h3>${item.name}</h3>
                <p class="pb-3">Max purchases: ${item.maxPurchases === -1 ? "∞" : item.maxPurchases}</p>
                <p class="pb-3">Price: ￥${item.price}</p>
                <p class="pb-3">Get ￥${item.get} /${item.howToIncrease}</p>
            </div>
            <div class="col-5 p-2">
                <img src="${item.imgUrl}" width="100%">
            </div>
    
        </div>
        <p class="pb-3">How many would you like to buy?</p>
        <input id="purchase-input" class="form-control" type="number" value="0" min="0">
        <div id="total">
            <p class="text-end">total: ¥ 0</p>
        </div>
        <div class="d-flex justify-content-between py-3">
            <div id="back-btn" class="col-5">
                <button class="btn btn-light border border-primary col-12 text-primary" type="submit">Go Back</button>
            </div>
            <div id="purchase-btn" class="col-5">
                <button class="btn btn-primary col-12" type="submit">purchase</button>
            </div>
        </div>
    </div>
    `;
    
    const purchaseInput = container.querySelectorAll("#purchase-input").item(0);
    const total = container.querySelectorAll("#total").item(0);
    const backBtn = container.querySelectorAll("#back-btn").item(0);
    const purchaseBtn = container.querySelectorAll("#purchase-btn").item(0);

    // 数量を入力した時のイベント
    purchaseInput.addEventListener("change", function(){
        let totalValue = 0;
        if (item.type === "stock" && parseInt(purchaseInput.value) >= 0){
            totalValue = howMuchStock(item.price, parseInt(purchaseInput.value), 0.1);
        }else{
            totalValue = parseInt(purchaseInput.value) >= 0 ? item.price * parseInt(purchaseInput.value) : 0;
        }
        total.innerHTML = `
            <p class="text-end">total: ¥ ${totalValue}</p>
        `;
    });
    
    // 戻るボタン
    backBtn.addEventListener("click", function(){
        container.innerHTML = "";
        createItemPage(userAccount);
    });

    // 購入ボタン
    purchaseBtn.addEventListener("click", function(){
        // 購入可能の判定（購入不可ならアラート、購入可能ならオブジェクトの更新）
        let totalValue = 0;
        if (item.type === "stock" && parseInt(purchaseInput.value) >= 0){
            totalValue = howMuchStock(item.price, parseInt(purchaseInput.value), rate);
        }else{
            totalValue = parseInt(purchaseInput.value) >= 0 ? item.price * parseInt(purchaseInput.value) : 0;
        }

        if (item.maxPurchases !== -1 && (item.maxPurchases < item.possessions + parseInt(purchaseInput.value))){
            alert("You can't buy anymore.");
        }else if (userAccount.money < totalValue){
            alert("You don't have enough money.");
        }else {
            item.purchaseItem(parseInt(purchaseInput.value));
            item.changeStockPrice(parseInt(purchaseInput.value), rate)
            userAccount.payMoney(totalValue);
            userAccount.getOneClick(item, parseInt(purchaseInput.value));
            updateBurgerStatus(userAccount);
        }

        // 購入画面を消す
        container.innerHTML = "";
        updateMoneyStatus(userAccount);
        createItemPage(userAccount);
    });

    document.getElementById("purchase-page").append(container);
}

// 毎秒ごとに得る金額
function secSummation(items){
    let total = 0;
    for (let i = 0; i < items.length; i++){
        if (items[i].type === "realEstate"){
            total += items[i].get * items[i].possessions;
        }else if (items[i].type === "stock" || items[i].type === "bond"){
            total += items[i].get * items[i].totalPurchases;
        }
    }

    return Math.floor(total);
}

function howMuchStock(price, amount, rate){
    return howMuchStockHelper(price, amount, rate, 0);
}

function howMuchStockHelper(price, amount, rate, value){
    if(amount <= 0) return value;
    else return howMuchStockHelper(Math.floor(price * (1 + rate)), amount-1, rate, value + price);
}
