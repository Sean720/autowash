// Copyright (c) 2025, Nashon Mwangi and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Customer", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("Customer", {
    refresh(frm) {
        validate_names(frm);
    },
    first_name: function(frm) {
        validate_names(frm);
    },
    last_name: function(frm) {
        validate_names(frm);
    }
});

function validate_names(frm) {
    const nameRegex = /^[A-Za-z]+$/; // Only letters, no spaces or numbers
    
    let firstName = frm.doc.first_name || "";
    let lastName = frm.doc.last_name || "";
    
    if (!nameRegex.test(firstName)) {
        frappe.msgprint(__("First name should contain only letters and no spaces."));
        frm.set_value("first_name", "");
        return;
    }
    
    if (!nameRegex.test(lastName)) {
        frappe.msgprint(__("Last name should contain only letters and no spaces."));
        frm.set_value("last_name", "");
        return;
    }
    
    const fullName = firstName + " " + lastName;
    frm.set_value("full_name", firstName && lastName ? fullName : "");
}



frappe.ui.form.on("Customer", {
refresh(frm) {
            let email = frm.doc.email;

            // Regular expression to check email format
            let email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email_regex.test(email)) {
                    frappe.msgprint(__('Invalid Email! Please enter a valid email with "@" and ".".'));
                    frm.set_value('email', ''); // Clear invalid email
            }
},
});
