// Copyright (c) 2025, Nashon Mwangi and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Customer", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Customer", {
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
 
    if (!email_regex.test(email)) {
        frm.set_value('email', ''); // Clear invalid email
        frappe.throw(__('Invalid Email! Please enter a valid email with "@" and ".".'));
    }
}