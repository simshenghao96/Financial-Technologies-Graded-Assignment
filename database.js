// I declare that this code was written by me. 
//  I will not copy or allow others to copy my code. 
//  I understand that copying code is considered as plagiarism.
 
//  Student Name: Sim Sheng Hao
//  Student ID: 22012312
//  Class: E63C
//  Date/Time Last modified: 14/8/2023 (11.20pm)

const details = [];

const savings_account = {
    
    accountNumber: "123-45678-90",
    balance: 7000,
};

details.push(savings_account);

// Writing to payment page 2
var accountNum = savings_account.accountNumber;
var accountBalance = savings_account.balance;
var outputPage2 = document.getElementById("account-num");
var outputPage3 = document.getElementById("savingsAccNum");
outputPage2.textContent = accountNum;
outputPage3.textContent = accountNum;


const investment_account = {
    // Registered Details when opening an investment account (For Structured Deposits)
    fullName: document.getElementsByClassName("fullName") ,
    email: document.getElementsByClassName("email-address"),
    mobileNumber: document.getElementsByClassName(""),
    mailing_address: document.getElementsByClassName(""),
    idNumber: document.getElementsByClassName(""),
    fundSource: document.getElementsByClassName("source-fund"),
    accountPurpose: document.getElementsByClassName("account-purpose"),
    employmentStatus: document.getElementsByClassName("employment-status"),
    occupation: document.getElementsByClassName("occupation"),
    employerName: document.getElementsByClassName("employer-name"),
    income: document.getElementsByClassName("income-range"),

    depositAmount: document.getElementsByClassName(""),

    

    registerAmount: function() {
        if (depositAmount <= savings_account.balance) {
            balance += this.depositAmount
        }
        else {
            print("Insufficient Amount");
        }
    }

};

const investment_account2 = {
    accountNumber: "128-45684-90",
    balance: 4500,
}

details.push(investment_account);

// Writing to account information (Overview) --> investment account
var investment_accNo = investment_account2.accountNumber;
var investment_balance = investment_account2.balance;
var output_investment_account = document.getElementById("investAccNum");
var output_investment_balance = document.getElementById("investAccBalance");
output_investment_account.textContent = investment_accNo;
output_investment_balance.textContent = investment_balance;



var update = {
    updateBalance: function() {
        savings_account.balance - this.depositAmount;
    }
}


var accountNum_savings = savings_account.accountNumber;