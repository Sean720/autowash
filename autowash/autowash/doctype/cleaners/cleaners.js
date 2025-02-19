// Copyright (c) 2025, Nashon Mwangi and contributors
// For license information, please see license.txt



frappe.ui.form.on("Cleaners", {
    refresh(frm) {
        name_validation(frm);
        set_full_name(frm);

        // email_validation(frm);
    },
    validate(frm){
        email_validation(frm);
    },
});

// Function to validate the names
function name_validation(frm) {
    const nameRegex = /^[A-Za-z]+$/;
    const firstName = frm.doc.first_name || "";
    const lastName = frm.doc.last_name || "";

    if (!nameRegex.test(firstName)) {
        frappe.msgprint(__("First name should contain only letters and no spaces."));
        frm.set_value("first_name", "");
    }

    if (!nameRegex.test(lastName)) {
        frappe.msgprint(__("Last name should contain only letters and no spaces."));
        frm.set_value("last_name", "");
    }
}

// Function to set full name
function set_full_name(frm) {
    const firstName = frm.doc.first_name;
    const lastName = frm.doc.last_name;
    const fullName = firstName + " " + lastName;

    if (firstName && lastName) {
        frm.set_value("full_name", fullName);
    } else {
        frm.set_value("full_name", "");
    }
}
     
// Function to validate email
function email_validation(frm) {
    const email = frm.doc.email;
   
    // Regular expression to check email format
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (email && !email_regex.test(email)) {
        frm.set_value('email', ''); // Clear invalid email
        frappe.throw(__('Invalid Email! Please enter a valid email with "@" and ".".'));
    }
}










































    

// frappe.ui.form.on("Cleaners", {
//         phone_number: function(frm) {
//             format_phone_number(frm);
//         }
//     });
    
//     function format_phone_number(frm) {
//         let phoneNumber = frm.doc.phone_number || "";
    
//         // Remove any non-digit characters except for the '+' and '-'
//         phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    
//         // Handle leading zero and format the phone number
//         if (phoneNumber.startsWith("0")) {
//             phoneNumber = phoneNumber.substring(1); // Remove the leading zero
//         }
    
//         // Ensure the phone number has no more than 9 digits
//         if (phoneNumber.length > 9) {
//             phoneNumber = phoneNumber.substring(0, 9); // Limit to 9 digits
//         }
    
//         // Set the formatted phone number back to the field
//         frm.set_value("phone_number", "+254-" + phoneNumber);
//     }
    