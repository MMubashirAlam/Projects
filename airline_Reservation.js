const readlineSync = require('readline-sync');

class Person {
    constructor() {
        this.name = "";
        this.phone_num = "";
        this.cnic_num = "";
        this.address = "";
        this.Passport_num = "";
        this.covid_report = "";
        this.visa_validaty = "";
    }

    setVisaValidity(visa_validaty) {
        this.visa_validaty = visa_validaty;
    }

    getVisaValidity() {
        return this.visa_validaty;
    }
}

class RandomString {
    static getAlphaNumericString(n) {
        const alphaNumericString =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < n; i++) {
            const index = Math.floor(Math.random() * alphaNumericString.length);
            result += alphaNumericString.charAt(index);
        }
        return result;
    }
}

class Airline {
    constructor() {
        this.visa_validaty = "";
    }

    setVisaValidity(visa_validaty) {
        this.visa_validaty = visa_validaty;
    }

    getVisaValidity() {
        return this.visa_validaty;
    }

    selectSeat() {
        // Implement seat selection logic in JavaScript
        // For simplicity, let's just return a placeholder message.
        return "Seat selected!";
    }
}

class Local extends Airline {
    metLoc() {
        // Provide implementation for local destination information
        console.log("\n1: Karachi to Lahore");
        console.log("2: Rawalpindi to Hyderabad");
        console.log("3: Quetta to Peshawar");
        console.log("4: Multan to Islamabad");
    }
}

class ABC extends Local {
    metLoc() {
        super.metLoc();
        // Additional implementation specific to ABC local destinations
    }
}

class XYZ extends Local {
    metLoc() {
        super.metLoc();
        // Additional implementation specific to XYZ local destinations
    }
}

class International extends Airline {
    metInt() {
        // Provide implementation for international destination information
        console.log("\n1: New York to Karachi");
        console.log("2: Karachi to New York");
        console.log("3: Tehran to Kabul");
        console.log("4: Kabul to Tehran");
    }
}

class PIA extends International {
    metInt() {
        super.metInt();
        // Additional implementation specific to PIA international destinations
    }
}

class Emirates extends International {
    metInt() {
        super.metInt();
        // Additional implementation specific to Emirates international destinations
    }
}

// Main Program
const booking_ID = 8;

console.log("*If you want to book a flight press 1");
console.log("*If you want to exit press 2\nChoice: ");
const w = Number(readlineSync.question());

if (w === 1) {
    console.log("Enter Personal Information to book a flight. ");
    const p = new Person();

    // ... (Remaining code for user input and booking process)

    const airline = new ABC(); // Example using ABC as the airline
    airline.setVisaValidity("10-july-2022");

    console.log("\n*Enter destination (1/2/3/4): ");
    const dest1 = Number(readlineSync.question());

    // ... (Remaining code for booking details and seat selection)
} else if (w === 2) {
    console.log("\nExiting....");
} else {
    console.log("\nInvalid Input!");
}
