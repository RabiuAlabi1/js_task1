//TASK A: Customer information

let  customerName = "Seyi Tinubu";
let phoneNumber;
let registrationStatus = true;
let airtimeBalance = "NGN 1500";
let selectedBalance = 5;

console.log(customerName);
console.log(phoneNumber);
console.log(registrationStatus);
console.log(airtimeBalance);
console.log(selectedBalance);

//TASK B: Bundle selection using switch

let bundleCode = 2;
let dataAllowance;
let price;

switch(bundleCode){
    case 1:
        dataAllowance = "500MB";
        price = 200;
        break;
    case 2:
        dataAllowance = "1GB";
        price = 350;
        break;
    case 3:
        dataAllowance = "2GB";
        price = 600;
        break;
    case 4:
        dataAllowance = "5GB";
        price = 1500;
        break;
    default:
        console.log("Invalid bundle code. Purchase not allowed");
        break;
}
if (bundleCode >= 1 && bundleCode <= 4) {
    console.log("Data allowance: " + dataAllowance);
    console.log("Price: NGN " + price);

}

//TASK C: Purchase Eligibility using if/else

    let  _customerName = "Rabiu Alabi";
    let _registrationStatus = true;
    let _airtimeBalance = 700;
    let _bundleCode = 3;
    let _dataAllowance;
    let _price;
    let remainingBalance;

    if(_bundleCode === 1){
        _dataAllowance = "500MB"
        _price = 200;
    }
    else if(_bundleCode === 2){
        _dataAllowance = "1GB"
        _price = 350;
    }
    else if(_bundleCode === 3){
        _dataAllowance = "2GB"
        _price = 600;
    }
    else if(_bundleCode === 4) {
        _dataAllowance = "5GB"
        _price = 1500;
    }
    else{
        _price = undefined;
    }

    if (_registrationStatus === false){
        console.log("You can't purchase without registration.");
    }
    else if (_airtimeBalance <= 0){
        console.log("Insufficient balance.");
    }
    else if (_price === undefined){
        console.log("Invalid bundle code");
    }
    else if (_airtimeBalance < _price){
        console.log("Insufficient airtime.");
    }
    else {
        remainingBalance = _airtimeBalance - _price;
    }

    console.log("Customer Name: " + _customerName);
    console.log("Bundle: " + _dataAllowance);
    console.log("Amount Deducted: NGN " + _price);
    console.log("Remaining Balance: NGN " + remainingBalance);
    console.log("Purchase Successful!");

    console.log("What if the balance is equals to the bundle price? it will be successful because i used '_airtimeBalance < _price' and i decleared _airtimeBalance to be 600; and _price to be 600 ")

    console.log("task D: is not cleared and i don't know how to do the testing")

    //TASK E: Critical thinking and code Quality

    console.log(
        "1. The selected bundle must be validated before airtime is deducted to prevent charging customers for an invalid bundle."
    )
    console.log("2. If program checks airtime but ignores registration, unregistered customers may be allowed to purchase data")

    console.log("3. Switch is suitable for bundle selection because it checks different bundle codes. if/else is suitable for eligibility because it checks multiple conditions before allowing a purchase.")
