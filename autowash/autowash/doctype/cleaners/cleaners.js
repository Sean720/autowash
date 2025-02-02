// Copyright (c) 2025, Nashon Mwangi and contributors
// For license information, please see license.txt

frappe.ui.form.on("Cleaners", {
	refresh(frm) {
        const firstName = frm.doc.first_name;
        const lastName = frm.doc.last_name;
        const fullName = firstName + " " + lastName;
        frm.set_value("full_name",fullName)
	},
});
